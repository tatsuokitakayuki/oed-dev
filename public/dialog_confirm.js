import {Dialog} from '/dialog.js';
import {HtmlHelper} from '/html_helper.js';

export class DialogConfirm extends Dialog {
    constructor() {
        super();
        this.callback = null;
        this.args = null;
    }

    buildContent(message) {
        if (!message) {
            return;
        }
        const htmlHelper = new HtmlHelper();
        this.dialogContent.appendChild(htmlHelper.p(message, []));
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
