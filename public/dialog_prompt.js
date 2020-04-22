import {Dialog} from '/dialog.js';
import {MaterialHelper} from '/material_helper.js';

export class DialogPrompt extends Dialog {

    constructor() {
        super();
        this.updateValue = null;
    }

    buildContent(message, placeholder, initialValue, type, min, max) {
        if (!type) {
            return;
        }
        const materialHelper = new MaterialHelper();
        if (message) {
            this.dialogContent.appendChild(materialHelper.p(message, []));
        }
        const attributes = [
            {name: 'class', value: 'mdc-text-field__input'},
            {name: 'id', value: 'dialog-input-field'},
            {name: 'type', value: type},
            {name: 'value', value: initialValue},
            {name: 'aria-label', value: 'label'}
        ];
        if (placeholder) {
            attributes.push({name: 'placeholder', value: placeholder});
        }
        if (type == 'number') {
            if (min !== null) {
                attributes.push({name: 'min', value: min});
            }
            if (max !== null) {
                attributes.push({name: 'max', value: max});
            }
        }
        const input = materialHelper.input(null, attributes);
        input.onchange = event => this.onChange(event);
        const div = materialHelper.div(
            null,
            [{name: 'class', value: 'mdc-text-field mdc-text-field--no-label'}]
        );
        div.appendChild(input);
        div.appendChild(materialHelper.underline());
        this.dialogContent.appendChild(div);
    }

    open(title, message, placeholder, initialValue, type, min, max) {
        super.open();
        this.buildTitle(title);
        this.buildContent(message, placeholder, initialValue, type, min, max);
        this.updateValue = initialValue;
    }
}
