import {DialogPrompt} from '/dialog_prompt.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogPrintMarginColumn extends DialogPrompt {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('printMarginColumn');
    }

    onChange(event) {
        this.core.setOption('printMarginColumn', event.target.value);
    }

    open() {
        const res = new Res();
        super.open(
            res.titles.print_margin_column, null, res.placeholders.print_margin_column,
            this.initialValue, 'number', 0, 256
        );
    }

    submit() {
        super.submit();
        this.core.saveRendererOptions();
    }

    reset() {
        super.reset();
        this.core.setOption('printMarginColumn', this.initialValue);
        this.core.saveRendererOptions();
    }
}
