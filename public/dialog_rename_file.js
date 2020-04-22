import {ChangeViewEvent} from '/change_view_event.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {FileHelper} from '/file_helper.js';
import {Res} from '/res.js';

export class DialogRenameFile extends DialogPrompt {

    constructor() {
        super();
        this.index = -1;
        this.fileData = null;
        this.callback = null;
        this.args = null;
    }

    onChange(event) {
        this.updateValue = event.target.value;
    }

    open(index, fileData, callback, args) {
        const res = new Res();
        super.open(
            res.descriptions.rename_file, null, res.placeholders.rename_file,
            fileData.name, 'text', null, null
        );
        this.index = index;
        this.fileData = fileData;
        this.callback = callback;
        this.args = args;
    }

    submit() {
        if (!this.updateValue) {
            return;
        }
        const fileHelper = new FileHelper();
        const sanitizedName = fileHelper.sanitizeName(this.updateValue);
        this.fileData.setName(sanitizedName);
        this.fileData.setDisplayName(sanitizedName);
        const res = new Res();
        this.fileData.url = new URL(
            res.protocols.oed + '//' +
            res.hosts.edit_session + '/' +
            res.dirs.files + '/' + sanitizedName
        );
        this.fileData.type = 'text/plain';
        this.fileData.editSession.setMode(fileHelper.getMode(sanitizedName));
        document.dispatchEvent(
            new ChangeViewEvent(
                this.index, this.index, {editor: true, draweritem: true, appbar: true}
            )
        );
        if (this.callback) {
            this.callback(this.args);
        }
    }
}
