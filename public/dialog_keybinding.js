import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogKeybinding extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('keybinding');
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('keybinding', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.descriptions.keybinding, res.keybinding);
    }

    submit() {
        super.submit();
        this.core.saveOedOptions();
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('keybinding', this.initialValue)
        );
        this.core.saveOedOptions();
    }
}
