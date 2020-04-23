import {ChangeEditorOptionEvent} from '/change_editor_option_event.js';
import {DialogSelect} from '/dialog_select.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';
import {SaveOptionsEditorEvent} from '/save_options_editor_event.js';

export class DialogTheme extends DialogSelect {

    constructor(initialValue) {
        super();
        this.initialValue = initialValue;
    }

    onChange(event) {
        document.dispatchEvent(
            new ChangeEditorOptionEvent('theme', event.target.value)
        );
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
        super.open(res.descriptions.theme, res.getThemes());
    }

    submit() {
        super.submit();
        document.dispatchEvent(new SaveOptionsEditorEvent({renderer: true}));
    }

    reset() {
        super.reset();
        document.dispatchEvent(
            new ChangeEditorOptionEvent('theme', this.initialValue)
        );
    }
}
