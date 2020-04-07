import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogPrompt} from '/dialog_prompt.js';
import {Res} from '/res.js';

export class DialogFontFamily extends DialogPrompt {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('fontFamily');
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
            res.titles.font_family, null, res.placeholders.font_family,
            this.initialValue, 'text', null, null
        );
    }

    submit() {
        super.submit();
        this.core.saveRendererOptions();
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('fontFamily', this.initialValue)
        );
        this.core.saveRendererOptions();
    }
}
