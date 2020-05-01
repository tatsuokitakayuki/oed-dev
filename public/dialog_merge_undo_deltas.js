import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';
import {SaveOptionsEditorEvent} from '/save_options_editor_event.js';

export class DialogMergeUndoDeltas extends DialogSelect {
    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('mergeUndoDeltas', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.descriptions.merge_undo_deltas, res.merge_undo_deltas);
    }

    submit() {
        super.submit();
        document.dispatchEvent(new SaveOptionsEditorEvent({editor: true}));
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('mergeUndoDeltas', this.initialValue)
        );
    }
}
