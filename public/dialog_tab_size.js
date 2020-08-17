import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DESCRIPTIONS} from '/res/descriptions.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {Res} from '/res.js';

export class DialogTabSize extends DialogPrompt {
    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('tabSize', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(
            DESCRIPTIONS.TAB_SIZE, null, res.placeholders.tab_size,
            this.initialValue, 'number', 1, 16
        );
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('tabSize', this.initialValue)
        );
    }
}
