import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogLanguageMode extends DialogSelect {
    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('mode', event.target.value)
        );
    }

    open() {
        const res = new Res();
        super.open(res.descriptions.language_mode, this.getListData());
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('mode', this.initialValue)
        );
    }

    getListData() {
        const modeList = ace.require('ace/ext/modelist');
        const data = [];
        modeList.modes.forEach(
            item => data.push({name: item.caption, value: item.mode})
        );
        return data;
    }
}
