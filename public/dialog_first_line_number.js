import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {Res} from '/res.js';

export class DialogFirstLineNumber extends DialogPrompt {

    constructor(core) {
        super(core);
        this.initialValue = Number(this.core.getOption('firstLineNumber'));
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
            res.descriptions.first_line_number, null,
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
