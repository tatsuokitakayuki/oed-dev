import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class Snackbar {

    constructor(core) {
        this.core = core;
        this.snackbar = new mdc.snackbar.MDCSnackbar(
            document.getElementById('snackbar-view')
        );
    }

    initialize() {
        const options = {passive: true};
        this.snackbar.listen(
            'MDCSnackbar:closed', event => this.onClosed(event), options
        );
        document.addEventListener(
            'Snackbar:change', event => this.onChange(event), options
        );
    }

    destory() {
        this.snackbar.unlisten(
            'MDCSnackbar:closed', event => this.onClosed(event)
        );
        document.removeEventListener(
            'Snackbar:change', event => this.onChange(event)
        );
    }

    onClosed(event) {
        this.snackbar.labelText = '';
        const materialHelper = new MaterialHelper();
        const snackbarActions = document.getElementById('snackbar-actions');
        materialHelper.removeChildren(snackbarActions);
    }

    onChange(event) {
        this.update(event.detail.label, event.detail.close, event.detail.actions);
    }

    update(label, close, actions) {
        this.snackbar.labelText = label;
        this.snackbar.closeOnEscape = true;
        this.snackbar.timeoutMs = 5000;
        if (actions) {
            this.setActions(actions);
        }
        if (close) {
            this.setClose();
        }
        this.snackbar.open();
    }

    setActions(actions) {
        const materialHelper = new MaterialHelper();
        const snackbarActions = document.getElementById('snackbar-actions');
        actions.forEach(action => {
            const button = materialHelper.actionSnackbar();
            button.appendChild(
                materialHelper.span(
                    action.label,
                    [{name: 'class', value: 'mdc-button__label'}]
                )
            );
            snackbarActions.appendChild(button);
        });
    }

    setClose() {
        const materialHelper = new MaterialHelper();
        const snackbarActions = document.getElementById('snackbar-actions');
        snackbarActions.appendChild(materialHelper.actionSnackbarClose());
    }
}
