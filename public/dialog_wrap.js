import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogWrap extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('wrap');
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('wrap', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.titles.wrap, res.wrap);
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('wrap', this.initialValue)
        );
    }
}
