import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {descriptions} from '/res/descriptions.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogNewLineMode extends DialogSelect {
    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('newLineMode', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(descriptions.NEW_LINE_MODE, res.new_line_mode);
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('newLineMode', this.initialValue)
        );
    }
}
