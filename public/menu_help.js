import {descriptions} from '/res/descriptions.js';
import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';
import {Res} from '/res.js';

export class MenuHelp extends Menu {
    constructor(core) {
        super(core, 'menu-help');
        this.itemData = {
            id: 'menu-list-help',
            items: [
                {
                    id: 'menu-help-open-command-pallete',
                    text: descriptions.COMMAND_PALLETE + '...',
                    meta: 'F1',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-keyboard-handler',
                    text: descriptions.KEYBOARD_HANDLER + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-help-oed-menu-button',
                    text: descriptions.MENU_BUTTON + '...',
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-export-options',
                    text: descriptions.EXPORT_OPTIONS,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-import-options',
                    text: descriptions.IMPORT_OPTIONS + '...',
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-cache-list',
                    text: descriptions.CACHE_LIST,
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-source-code',
                    text: descriptions.SOURCE_CODE,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-change-log',
                    text: descriptions.CHANGE_LOG,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-open-source-lisence',
                    text: descriptions.OPEN_SOURCE_LISENCE,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-about',
                    text: descriptions.ABOUT,
                    meta: '',
                    update: false
                }
            ]
        };
    }

    updateMenuItems() {
        const res = new Res();
        const materialHelper = new MaterialHelper();
        this.menu.items.forEach(item => {
            const data = this.itemData.items.find(
                data => item.id == data.id
            );
            if (data.update) {
                const optionValue = String(
                    this.core.getOption(
                        this.core.idToName(
                            item.id.slice((this.id + '-oed-').length)
                        )
                    )
                );
                let optionText = optionValue;
                switch (item.id) {
                    case 'menu-help-oed-keyboard-handler':
                        optionText = res.keyboard_handler.find(
                            item => item.value == optionValue
                        ).name;
                        break;
                    case 'menu-help-oed-menu-button':
                        optionText = res.menu_button.find(
                            item => item.value == optionValue
                        ).name;
                        break;
                    default:
                        break;
                }
                materialHelper.removeChildren(item);
                item.appendChild(materialHelper.listItemRipple());
                item.appendChild(materialHelper.listItemText(
                    data.text + ' [' + optionText + ']'
                ));
                if (data.meta) {
                    item.appendChild(materialHelper.listItemMeta(data.meta));
                }
            }
        });
    }
}
