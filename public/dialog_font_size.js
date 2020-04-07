import {DialogPrompt} from '/dialog_prompt.js';
import {Res} from '/res.js';

export class DialogFontSize extends DialogPrompt {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('fontSize').replace('px', '');
    }

    onChange(event) {
        this.core.setFontSize(event.target.value + 'px');
    }

    open() {
        const res = new Res();
        super.open(
            res.titles.font_size, null, res.placeholders.font_size,
            this.initialValue, 'number', 8, 72
        );
    }

    submit() {
        super.submit();
        this.core.saveRendererOptions();
    }

    reset() {
        super.reset();
        this.core.setFontSize(this.initialValue + 'px');
        this.core.saveRendererOptions();
    }
}
