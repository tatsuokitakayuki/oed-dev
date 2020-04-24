import {ChangeViewEvent} from '/change_view_event.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {FileHelper} from '/file_helper.js';
import {RenameFileEvent} from '/rename_file_event.js';
import {Res} from '/res.js';

export class DialogRenameFile extends DialogPrompt {

    constructor(initialValue, callback, args) {
        super();
        this.updateValue = initialValue;
        this.callback = callback;
        this.args = args;
    }

    onChange(event) {
        this.updateValue = event.target.value;
    }

    open() {
        const res = new Res();
        super.open(
            res.descriptions.rename_file, null, res.placeholders.rename_file,
            this.updateValue, 'text', null, null
        );
    }

    submit() {
        super.submit();
        document.dispatchEvent(
            new RenameFileEvent(this.updateValue, this.callback, this.args)
        );
    }

    reset() {
        super.reset();
        document.dispatchEvent(new RenameFileEvent(null, null, null));
    }
}
