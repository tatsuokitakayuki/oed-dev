import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {Res} from '/res.js';

export class DialogPrintMarginColumn extends DialogPrompt {

    constructor(core, initialValue) {
        super();
        this.core = core;
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('printMarginColumn', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(
            res.descriptions.print_margin_column, null,
            res.placeholders.print_margin_column, this.initialValue, 'number',
            0, 256
        );
    }

    submit() {
        super.submit();
        this.core.saveRendererOptions();
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('printMarginColumn', this.initialValue)
        );
        this.core.saveRendererOptions();
    }
}
