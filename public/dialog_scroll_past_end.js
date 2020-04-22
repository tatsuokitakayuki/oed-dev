import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogScrollPastEnd extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('scrollPastEnd');
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('scrollPastEnd', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.descriptions.scroll_past_end, res.scroll_past_end);
    }

    submit() {
        super.submit();
        this.core.saveRendererOptions();
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('scrollPastEnd', this.initialValue)
        );
        this.core.saveRendererOptions();
    }
}
