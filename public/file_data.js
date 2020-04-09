import {CacheManager} from '/cache_manager.js';
import {ChangeSnackbarEvent} from '/change_snackbar_event.js';
import {DialogRenameFile} from '/dialog_rename_file.js';
import {FileHelper} from '/file_helper.js';
import {Res} from '/res.js';

const EditDocument = ace.require('ace/document').Document;

export class FileData {

    constructor(core) {
        this.core = core;
        this.editSession = new ace.EditSession(new EditDocument('')); // Ace EditSession API
        this.editSession.setUndoManager(new ace.UndoManager()); // Undo manager
        this.initialize('');
    }

    initialize(name) {
        const res = new Res();
        this.setName(name);
        this.setDisplayName(name);
        this.url = new URL(
            res.protocols.oed + '//' +
            res.hosts.edit_session + '/' +
            res.dirs.res + '/' + name
        );
        this.type = 'text/plain';
        this.readOnly = false;
        this.time = new Date().getTime();
    }

    isCoreFile() {
        const res = new Res();
        if (this.url.pathname.includes('/' + res.dirs.res + '/')) {
            return Boolean(
                Object.values(res.files).find(name => this.url.pathname.includes(name))
            );
        }
        return false;
    }

    isEmptyFile() {
        if (this.editSession.getValue()) {
            return false;
        }
        if (!this.isClean()) {
            return false;
        }
        const res = new Res();
        return this.url.pathname.includes('/' + res.dirs.res + '/');
    }

    isClean() {
        return this.editSession.getUndoManager().isClean();
    }

    hasUndo() {
        return this.editSession.getUndoManager().hasUndo();
    }

    hasRedo() {
        return this.editSession.getUndoManager().hasRedo();
    }

    markClean() {
        return this.editSession.getUndoManager().markClean();
    }

    setValues(text, name, type, readOnly = false) {
        const fileHelper = new FileHelper();
        this.editSession.setValue(text);
        this.editSession.setMode(fileHelper.getMode(name));
        this.setName(name);
        this.setDisplayName(name);
        const res = new Res();
        this.url = new URL(
            res.protocols.oed + '//' +
            res.hosts.edit_session + '/' +
            res.dirs.files + '/' + name
        );
        this.type = type;
        this.readOnly = readOnly;
    }

    setName(name) {
        this.name = name;
    }

    setDisplayName(displayName) {
        this.displayName = displayName;
    }

    async openUrlA(url) {
        try {
            let text = '';
            const res = new Res();
            if (url.href.includes(res.files.cache_list)) {
                const cacheManager = new CacheManager();
                text = await cacheManager.formattedCacheListA('markdown');
            } else {
                const fileHelper = new FileHelper();
                text = await fileHelper.fetchTextUrlA(url, 'utf-8');
                if (text === null) {
                    throw new Error();
                }
            }
            this.setValues(text, url.pathname, 'text/plain');
            return {success: true, message: 'success: ' + url.pathname};
        } catch(e) {
            console.error(e);
            return {success: false, message: 'failed: ' + url.pathname};
        }
    }

    async openFileA(file) {
        try {
            const fileHelper = new FileHelper();
            const text = await fileHelper.fetchTextFileA(
                file, this.core.getOption('fileDecoding')
            );
            if (text === null) {
                throw new Error();
            }
            this.setValues(text, file.name, file.type);
            return {success: true, message: 'success: ' + file.name};
        } catch(e) {
            console.error(e);
            return {success: false, message: 'failed: ' + file.name};
        }
    }

    downloadFile() {
        const fileHelper = new FileHelper();
        const blob = fileHelper.buildBlob(this.editSession.getValue(), this.type);
        fileHelper.writeBlob(blob, this.name);
        document.dispatchEvent(new ChangeSnackbarEvent('Download file: ' + this.name, null));
    }

    renameFile(callback) {
        const dialogRenameFile = new DialogRenameFile(this.core);
        dialogRenameFile.open(this, callback);
    }
}
