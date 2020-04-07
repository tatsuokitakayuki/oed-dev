import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogCursorStyle extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('cursorStyle');
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('cursorStyle', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.titles.cursor_style, res.cursor_style);
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
