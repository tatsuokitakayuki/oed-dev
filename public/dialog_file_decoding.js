import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogFileDecoding extends DialogSelect {
    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('fileDecoding', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.descriptions.file_decoding, res.encoding_names);
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('fileDecoding', this.initialValue)
        );
    }
}
