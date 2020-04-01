import {DialogSelect} from '/dialog_select.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';

export class DialogTheme extends DialogSelect {

    constructor(core) {
        super(core);
        this.initialValue = this.core.getTheme();
    }

    onChange(event) {
        this.core.setTheme(event.target.value);
    }

    buildSelectList(themes) {
        const materialHelper = new MaterialHelper();
        const brightGroup = materialHelper.optgroup(
            null, [{name: 'label', value: 'Bright'}]
        );
        themes.bright.forEach(item => {
            const attributeList = [{name: 'value', value: String(item.value)}];
            if (item.value != this.initialValue) {
                attributeList.push({name: 'class', value: 'mdc-list-item'});
            } else {
                attributeList.push({name: 'class', value: 'mdc-list-item mdc-list-item--selected'});
                attributeList.push({name: 'selected', value: 'selected'});
            }
            brightGroup.appendChild(materialHelper.option(String(item.caption), attributeList));
        });
        const darkGroup = materialHelper.optgroup(
            null, [{name: 'label', value: 'Dark'}]
        );
        themes.dark.forEach(item => {
            const attributeList = [{name: 'value', value: String(item.value)}];
            if (item.value != this.initialValue) {
                attributeList.push({name: 'class', value: 'mdc-list-item'});
            } else {
                attributeList.push({name: 'class', value: 'mdc-list-item mdc-list-item--selected'});
                attributeList.push({name: 'selected', value: 'selected'});
            }
            darkGroup.appendChild(materialHelper.option(String(item.caption), attributeList));
        });
        return [brightGroup, darkGroup];
    }

    open() {
        const res = new Res();
        super.open(res.titles.theme, res.getThemes());
    }

    submit() {
        super.submit();
        this.core.saveRendererOptions();
    }

    reset() {
        super.reset();
        this.core.setTheme(this.initialValue);
        this.core.saveRendererOptions();
    }
}
