import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class Snackbar {
    constructor(core) {
        this.core = core;
        this.snackbar = new mdc.snackbar.MDCSnackbar(
            document.getElementById('snackbar-view')
        );
        this.que = [];
        this.command = null;
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
        if (event.reason && event.reason == 'action') {
            this.command();
        }
        this.snackbar.labelText = '';
        const materialHelper = new MaterialHelper();
        const snackbarActions = document.getElementById('snackbar-actions');
        materialHelper.removeChildren(snackbarActions);
        this.command = null;
        const next = this.que.shift();
        if (next) {
            this.update(next.label, next.close, next.action);
        }
    }

    onChange(event) {
        if (this.snackbar.isOpen) {
            this.que.push(
                {
                    label: event.detail.label,
                    close: event.detail.close,
                    action: event.detail.action
                }
            );
            return;
        }
        this.update(
            event.detail.label, event.detail.close, event.detail.action
        );
    }

    update(label, close, action) {
        this.snackbar.labelText = label;
        this.snackbar.closeOnEscape = true;
        this.snackbar.timeoutMs = 5000;
        if (action) {
            this.setAction(action);
        }
        if (close) {
            this.setClose();
        }
        this.snackbar.open();
    }

    setAction(action) {
        const materialHelper = new MaterialHelper();
        const snackbarActions = document.getElementById('snackbar-actions');
        const button = materialHelper.actionSnackbar();
        button.appendChild(
            materialHelper.span(
                action.label,
                [
                    {name: 'class', value: 'mdc-button__label'},
                    {name: 'style', value: 'color: magenta;'},
                ]
            )
        );
        snackbarActions.appendChild(button);
        this.command = action.command;
    }

    setClose() {
        const materialHelper = new MaterialHelper();
        const snackbarActions = document.getElementById('snackbar-actions');
        snackbarActions.appendChild(materialHelper.closeSnackbar());
    }
}
