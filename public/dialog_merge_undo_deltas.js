import {DialogSelect} from '/dialog_select.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogMergeUndoDeltas extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('mergeUndoDeltas');
    }

    onChange(event) {
        this.core.setOption('mergeUndoDeltas', event.target.value);
    }

    open() {
        const res = new Res();
        super.open(res.titles.merge_undo_deltas, res.merge_undo_deltas);
    }

    submit() {
        super.submit();
        this.core.saveEditorOptions();
    }

    reset() {
        super.reset();
        this.core.setOption('mergeUndoDeltas', this.initialValue);
        this.core.saveEditorOptions();
    }
}
