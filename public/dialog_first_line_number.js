import {DialogPrompt} from '/dialog_prompt.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogFirstLineNumber extends DialogPrompt {

    constructor(core) {
        super(core);
        this.initialValue = Number(this.core.getOption('firstLineNumber'));
    }

    onChange(event) {
        this.core.setOption('firstLineNumber', Number(event.target.value));
    }

    open() {
        const res = new Res();
        super.open(
            res.titles.first_line_number, null, res.placeholders.first_line_number,
            this.initialValue, 'number', 0, null
        );
    }

    submit() {
        super.submit();
        this.core.saveSessionOptions();
    }

    reset() {
        super.reset();
        this.core.setOption('firstLineNumber', Number(this.initialValue));
        this.core.saveSessionOptions();
    }
}
