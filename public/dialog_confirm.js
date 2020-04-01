import {Dialog} from '/dialog.js';
import {MaterialHelper} from '/material_helper.js';

export class DialogConfirm extends Dialog {

    constructor(core) {
        super(core);
        this.callback = null;
        this.args = null;
    }

    buildContent(message) {
        if (!message) {
            return;
        }
        const materialHelper = new MaterialHelper();
        this.dialogContent.appendChild(materialHelper.p(message, []));
    }

    open(title, message, callback, args) {
        super.open();
        this.callback = callback;
        this.args = args;
        this.buildTitle(title);
        this.buildContent(message);
    }

    submit() {
        super.submit();
        if (this.callback) {
            this.callback(this.args);
        }
    }
}
