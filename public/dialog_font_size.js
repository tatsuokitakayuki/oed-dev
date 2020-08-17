import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DESCRIPTIONS} from '/res/descriptions.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {Res} from '/res.js';
import {SaveOptionsEditorEvent} from '/save_options_editor_event.js';

export class DialogFontSize extends DialogPrompt {
    constructor(initialValue) {
        super();
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
            DESCRIPTIONS.FONT_SIZE, null, res.placeholders.font_size,
            this.initialValue, 'number', 8, 72
        );
    }

    submit() {
        super.submit();
        document.dispatchEvent(new SaveOptionsEditorEvent({renderer: true}));
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('fontSize', this.initialValue + 'px')
        );
    }
}
