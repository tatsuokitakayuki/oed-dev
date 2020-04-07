import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogNewLineMode extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('newLineMode');
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('newLineMode', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.titles.new_line_mode, res.new_line_mode);
    }

    submit() {
        super.submit();
        this.core.saveSessionOptions();
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('newLineMode', this.initialValue)
        );
        this.core.saveSessionOptions();
    }
}
