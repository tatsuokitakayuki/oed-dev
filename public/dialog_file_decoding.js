import {DialogSelect} from '/dialog_select.js';
import {Res} from '/res.js';

export class DialogFileDecoding extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getFileDecoding();
    }

    onChange(event) {
        this.core.setFileDecoding(event.target.value);
    }

    open() {
        const res = new Res();
        super.open(res.titles.file_decoding, res.encoding_names);
    }

    submit() {
        super.submit();
        this.core.saveOedOptions();
    }

    reset() {
        super.reset();
        this.core.setFileDecoding(this.initialValue);
        this.core.saveOedOptions();
    }
}
