import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {Res} from '/res.js';
import {SaveOptionsEditorEvent} from '/save_options_editor_event.js';

export class DialogPrintMarginColumn extends DialogPrompt {
    constructor(initialValue) {
        super();
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
        document.dispatchEvent(new SaveOptionsEditorEvent({renderer: true}));
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('printMarginColumn', this.initialValue)
        );
    }
}
