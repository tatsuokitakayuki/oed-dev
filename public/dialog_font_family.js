import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {descriptions} from '/res/descriptions.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {Res} from '/res.js';
import {SaveOptionsEditorEvent} from '/save_options_editor_event.js';

export class DialogFontFamily extends DialogPrompt {
    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
        if (!this.initialValue) {
            this.initialValue = '';
        }
        this.updateValue = this.initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('fontFamily', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(
            descriptions.FONT_FAMILY, null, res.placeholders.font_family,
            this.initialValue, 'text', null, null
        );
    }

    submit() {
        super.submit();
        document.dispatchEvent(new SaveOptionsEditorEvent({renderer: true}));
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('fontFamily', this.initialValue)
        );
    }
}
