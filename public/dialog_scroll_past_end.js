import {DialogSelect} from '/dialog_select.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogScrollPastEnd extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getOption('scrollPastEnd');
    }

    onChange(event) {
        this.core.setOption('scrollPastEnd', event.target.value);
    }

    open() {
        const res = new Res();
        super.open(res.titles.scroll_past_end, res.scroll_past_end);
    }

    submit() {
        super.submit();
        this.core.saveRendererOptions();
    }

    reset() {
        super.reset();
        this.core.setOption('scrollPastEnd', this.initialValue);
        this.core.saveRendererOptions();
    }
}
