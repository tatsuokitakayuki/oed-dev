import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';
import {SaveOptionsEditorEvent} from '/save_options_editor_event.js';

export class DialogKeyboardHandler extends DialogSelect {

    constructor(initialValue) {
        super();
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
        document.dispatchEvent(new SaveOptionsEditorEvent({oed: true}));
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('keyboardHandler', this.initialValue)
        );
    }
}
