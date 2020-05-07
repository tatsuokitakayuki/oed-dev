import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';
import {SaveOptionsEditorEvent} from '/save_options_editor_event.js';

export class DialogMenuButton extends DialogSelect {
    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('menuButton', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.descriptions.menu_button, res.menu_button);
    }

    submit() {
        super.submit();
        document.dispatchEvent(new SaveOptionsEditorEvent({oed: true}));
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('menuButton', this.initialValue)
        );
    }
}
