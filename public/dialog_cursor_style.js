import {DialogSelect} from '/dialog_select.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogCursorStyle extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('cursorStyle');
    }

    onChange(event) {
        this.core.setOption('cursorStyle', event.target.value);
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
        this.core.setOption('cursorStyle', this.initialValue);
        this.core.saveEditorOptions();
    }
}
