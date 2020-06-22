import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class Dialog {
    constructor() {
        this.dialog = new mdc.dialog.MDCDialog(this.getElement());
        this.dialog.escapeKeyAction = 'reset';
        this.dialog.scrimClickAction = 'reset';
        this.dialogTitle = document.getElementById('dialog-title');
        this.dialogContent = document.getElementById('dialog-content');
        this.dialogFooter = document.getElementById('dialog-footer');
        this.buttonOk = null;
        this.buttonCancel = null;
    }

    onOpened() {}

    onChange(event) {}

    onClosed(event) {
        switch (event.detail.action) {
            case 'submit':
                this.submit();
                break;
            case 'reset':
                this.reset();
                break;
            default:
                break;
        }
        this.dialog.destroy();
        this.dialog = null;
        const materialHelper = new MaterialHelper();
        materialHelper.removeChildren(this.dialogTitle);
        materialHelper.removeChildren(this.dialogContent);
        materialHelper.removeChildren(this.dialogFooter);
        this.dialogTitle.textContent = null;
        this.dialogContent.textContent = null;
        this.dialogFooter.textContent = null;
    }

    getElement() {
        return document.getElementById('dialog');
    }

    buildTitle(title) {
        this.dialogTitle.textContent = title;
    }

    buildContent() {}

    buildFooter() {
        const res = new Res();
        const materialHelper = new MaterialHelper();
        this.dialogFooter.appendChild(materialHelper.buttonDialogCancel());
        this.rippleCancel = new mdc.ripple.MDCRipple(
            document.getElementById('dialog-button-cancel')
        );
        this.dialogFooter.appendChild(materialHelper.buttonDialogOk());
        this.rippleOk = new mdc.ripple.MDCRipple(
            document.getElementById('dialog-button-ok')
        );
    }

    open() {
        this.buildContent();
        this.buildFooter();
        const options = {passive: true, once: true};
        this.dialog.listen(
            'MDCDialog:closed', event => this.onClosed(event), options
        );
        this.dialog.listen(
            'MDCDialog:opened', () => this.onOpened(), options
        );
        this.dialog.open();
    }

    submit() {}

    reset() {}
}
