import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';
import {SaveOptionsEditorEvent} from '/save_options_editor_event.js';

export class DialogScrollPastEnd extends DialogSelect {
    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
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
        document.dispatchEvent(new SaveOptionsEditorEvent({renderer: true}));
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('scrollPastEnd', this.initialValue)
        );
    }
}
