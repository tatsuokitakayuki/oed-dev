import {DialogSelect} from '/dialog_select.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogFoldStyle extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('foldStyle');
    }

    onChange(event) {
        this.core.setOption('foldStyle', event.target.value);
    }

    open() {
        const res = new Res();
        super.open(res.titles.fold_style, res.fold_style);
    }

    submit() {
        super.submit();
        this.core.saveSessionOptions();
    }

    reset() {
        super.reset();
        this.core.setOption('foldStyle', this.initialValue);
        this.core.saveSessionOptions();
    }
}