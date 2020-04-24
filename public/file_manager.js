import {FileData} from '/file_data.js';
import {Res} from '/res.js';

export class FileManager {

    constructor(core) {
        this.core = core;
        this.list = [];
        this.active = -1;
        this.untitledCount = 0;
    }

    addEventListener() {
        document.addEventListener(
            'File:rename',
            event => this.onRenameFile(event),
            {passive: true, once: true}
        );
    }

    onRenameFile(event) {
        if (event.detail.name) {
            this.list[this.active].renameFile(event.detail.name);
            if (event.detail.callback) {
                event.detail.callback(event.detail.args);
            }
        }
    }

    getActive() {
        return this.active;
    }

    isEmptyFile(index) {
        return this.list[index].isEmptyFile();
    }

    findIndex(href) {
        return this.list.findIndex(fileData => fileData.url.href == href);
    }

    isCoreFile(index) {
        return this.list[index].isCoreFile();
    }

    getEditSession(index) {
        return this.list[index].editSession;
    }

    getName(index) {
        return this.list[index].name;
    }

    getDisplayName(index) {
        return this.list[index].displayName;
    }

    getUrl(index) {
        return this.list[index].url;
    }

    getTime(index) {
        return this.list[index].time;
    }

    isReadOnly(index) {
        return this.list[index].readOnly;
    }

    isClean(index) {
        return this.list[index].isClean();
    }

    hasUndo(index) {
        return this.list[index].hasUndo();
    }

    hasRedo(index) {
        return this.list[index].hasRedo();
    }

    markClean(index) {
        return this.list[index].markClean();
    }

    setUntitledName(index) {
        const res = new Res();
        const name = res.strings.untitled + '_' + this.untitledCount + '.txt';
        this.untitledCount++;
        this.list[index].setName(name);
        this.list[index].setDisplayName(name);
        this.list[index].url = new URL(
            res.protocols.oed + '//' +
            res.hosts.edit_session + '/' +
            res.dirs.res + '/' + name
        );
    }

    setActive(index) {
        this.active = index;
        if (this.list.length === 0) {
            this.active = -1;
            return;
        }
        if (this.active >= this.list.length) {
            this.active = this.list.length - 1;
            return;
        }
        if (this.active < 0) {
            this.active = 0;
        }
        return this.active;
    }

    setName(index, name) {
        return this.list[index].setName(name);
    }

    setDisplayName(index, displayName) {
        return this.list[index].setDisplayName(displayName);
    }

    setUrl(url, index) {
        this.list[index].url = url;
    }

    setReadOnly(readOnly, index) {
        this.list[index].readOnly = readOnly;
    }

    createFileData() {
        return this.list.push(new FileData(this.core)) - 1;
    }

    updateEditSession(index, editSession) {
        if (editSession && this.active > -1) {
            this.list[this.active].editSession = editSession;
        }
        return this.setActive(index);
    }

    dropFileData(index) {
        this.list.splice(index, 1);
        this.setActive(index);
    }

    async openFileA(file, index) {
        return await this.list[index].openFileA(file);
    }

    async openUrlA(url, index) {
        return await this.list[index].openUrlA(url);
    }

    downloadFile(index) {
        return this.list[index].downloadFile();
    }
}
