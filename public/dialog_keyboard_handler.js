import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogKeyboardHandler extends DialogSelect {

    constructor(core, initialValue) {
        super();
        this.core = core;
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('keyboardHandler', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.descriptions.keyboard_handler, res.keyboard_handler);
    }

    submit() {
        super.submit();
        this.core.saveOedOptions();
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('keyboardHandler', this.initialValue)
        );
        this.core.saveOedOptions();
    }
}
