import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogWrap extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('wrap');
    }

    onChange(event) {
        this.core.setOption('wrap', event.target.value);
    }

    open() {
        const res = new Res();
        super.open(res.titles.wrap, res.wrap);
    }

    submit() {
        super.submit();
        this.core.saveSessionOptions();
    }

    reset() {
        super.reset();
        this.core.setOption('wrap', this.initialValue);
        this.core.saveSessionOptions();
    }
}
