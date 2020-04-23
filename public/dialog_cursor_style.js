import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';
import {SaveOptionsEditorEvent} from '/save_options_editor_event.js';

export class DialogCursorStyle extends DialogSelect {

    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('cursorStyle', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.descriptions.cursor_style, res.cursor_style);
    }

    submit() {
        super.submit();
        document.dispatchEvent(new SaveOptionsEditorEvent({editor: true}));
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('cursorStyle', this.initialValue)
        );
    }
}
