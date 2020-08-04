import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {descriptions} from '/res/descriptions.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {Res} from '/res.js';

export class DialogFirstLineNumber extends DialogPrompt {
    constructor(initialValue) {
        super();
        this.initialValue = Number(initialValue);
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent(
                'firstLineNumber', Number(event.target.value)
            )
        );
    }

    open() {
        const res = new Res();
        super.open(
            descriptions.FIRST_LINE_NUMBER, null,
            res.placeholders.first_line_number, this.initialValue, 'number', 0,
            null
        );
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent(
                'firstLineNumber', Number(this.initialValue)
            )
        );
    }
}
