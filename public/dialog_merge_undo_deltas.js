import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogMergeUndoDeltas extends DialogSelect {

    constructor(core, initialValue) {
        super();
        this.core = core;
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
        this.core.saveEditorOptions();
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('mergeUndoDeltas', this.initialValue)
        );
        this.core.saveEditorOptions();
    }
}
