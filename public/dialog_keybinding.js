import {DialogSelect} from '/dialog_select.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogKeybinding extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getKeybinding();
    }

    onChange(event) {
        this.core.setKeybinding(event.target.value);
    }

    open() {
        const res = new Res();
        super.open(res.titles.keybindings, res.keybindings);
    }

    submit() {
        super.submit();
        this.core.saveOedOptions();
    }

    reset() {
        super.reset();
        this.core.setKeybinding(this.initialValue);
        this.core.saveOedOptions();
    }
}
