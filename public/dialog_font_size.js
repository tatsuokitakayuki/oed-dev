import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {Res} from '/res.js';

export class DialogFontSize extends DialogPrompt {

    constructor(core, initialValue) {
        super();
        this.core = core;
        this.initialValue = initialValue.replace('px', '');
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('fontSize', event.target.value + 'px')
        );
    }

    open() {
        const res = new Res();
        super.open(
            res.descriptions.font_size, null, res.placeholders.font_size,
            this.initialValue, 'number', 8, 72
        );
    }

    submit() {
        super.submit();
        this.core.saveRendererOptions();
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('fontSize', this.initialValue + 'px')
        );
        this.core.saveRendererOptions();
    }
}
