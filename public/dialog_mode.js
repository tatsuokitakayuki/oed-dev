import {DialogSelect} from '/dialog_select.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogMode extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('mode');
    }

    onChange(event) {
        this.core.setOption('mode', event.target.value);
    }

    open() {
        const res = new Res();
        super.open(res.titles.mode, this.getListData());
    }

    submit() {
        super.submit();
    }

    reset() {
        super.reset();
        this.core.setOption('mode', this.initialValue);
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
