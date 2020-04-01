import {DialogPrompt} from '/dialog_prompt.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogTabSize extends DialogPrompt {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('tabSize');
    }

    onChange(event) {
        this.core.setOption('tabSize', event.target.value);
    }

    open() {
        const res = new Res();
        super.open(
            res.titles.tab_size, null, res.placeholders.tab_size,
            this.initialValue, 'number', 1, 16
        );
    }

    submit() {
        super.submit();
        this.core.saveSessionOptions();
    }

    reset() {
        super.reset();
        this.core.setOption('tabSize', this.initialValue);
        this.core.saveSessionOptions();
    }
}
