import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogFoldStyle extends DialogSelect {

    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('foldStyle', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.descriptions.fold_style, res.fold_style);
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('foldStyle', this.initialValue)
        );
    }
}