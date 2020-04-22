import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogCursorStyle extends DialogSelect {

    constructor(core, initialValue) {
        super();
        this.core = core;
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
        this.core.saveEditorOptions();
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('cursorStyle', this.initialValue)
        );
        this.core.saveEditorOptions();
    }
}
