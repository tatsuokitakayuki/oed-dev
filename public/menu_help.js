import {DESCRIPTIONS} from '/res/descriptions.js';
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
                    text: DESCRIPTIONS.COMMAND_PALLETE + '...',
                    meta: 'F1',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-keyboard-handler',
                    text: DESCRIPTIONS.KEYBOARD_HANDLER + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-help-oed-menu-button',
                    text: DESCRIPTIONS.MENU_BUTTON + '...',
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-export-options',
                    text: DESCRIPTIONS.EXPORT_OPTIONS,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-import-options',
                    text: DESCRIPTIONS.IMPORT_OPTIONS + '...',
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-cache-list',
                    text: DESCRIPTIONS.CACHE_LIST,
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-insert-welcome',
                    text: DESCRIPTIONS.INSERT_WELCOME,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-source-code',
                    text: DESCRIPTIONS.SOURCE_CODE,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-change-log',
                    text: DESCRIPTIONS.CHANGE_LOG,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-open-source-lisence',
                    text: DESCRIPTIONS.OPEN_SOURCE_LISENCE,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-about',
                    text: DESCRIPTIONS.ABOUT,
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
