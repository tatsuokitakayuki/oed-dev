import {Dialog} from '/dialog.js';
import {MaterialHelper} from '/material_helper.js';

export class DialogSelect extends Dialog {

    constructor(core) {
        super(core);
        this.updateValue = null;
    }

    buildSelectList(items) {
        const materialHelper = new MaterialHelper();
        const selectList = [];
        items.forEach(item => {
            const attributeList = [{name: 'value', value: String(item.value)}];
            if (item.value != this.initialValue) {
                attributeList.push({name: 'class', value: 'mdc-list-item'});
            } else {
                attributeList.push({name: 'class', value: 'mdc-list-item mdc-list-item--selected'});
                attributeList.push({name: 'selected', value: 'selected'});
            }
            selectList.push(materialHelper.option(String(item.name), attributeList));
        });
        return selectList;
    }

    buildContent(selectData) {
        if (!selectData) {
            return;
        }
        const materialHelper = new MaterialHelper();
        const select = materialHelper.select(
            null,
            [
                {name: 'class', value: 'mdc-select__native-control'},
                {name: 'id', value: 'dialog-select-field'}
            ]
        );
        this.buildSelectList(selectData).forEach(item => select.appendChild(item));
        select.onchange = event => this.onChange(event);
        const div = materialHelper.div(
            null, [{name: 'class', value: 'mdc-select mdc-select--no-label'}]
        );
        div.appendChild(
            materialHelper.span(
                null, [{name: 'class', value: 'mdc-select__dropdown-icon'}]
            )
        );
        div.appendChild(select);
        div.appendChild(materialHelper.underline());
        this.dialogContent.appendChild(div);
    }

    open(title, selectData) {
        super.open();
        this.buildTitle(title);
        this.buildContent(selectData);
    }
}