import {DESCRIPTIONS} from '/res/descriptions.js';
import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';

export class MenuExtensions extends Menu {
    constructor(core) {
        super(core, 'menu-extensions');
        this.itemData = {
            id: 'menu-list-extensions',
            items: [
                {
                    id: 'menu-extensions-oed-enable-basic-autocompletion',
                    text: DESCRIPTIONS.ENABLE_BASIC_AUTOCOMPLETION,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-enable-live-autocompletion',
                    text: DESCRIPTIONS.ENABLE_LIVE_AUTOCOMPLETION,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-enable-snippets',
                    text: DESCRIPTIONS.ENABLE_SNIPPETS,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-enable-emmet',
                    text: DESCRIPTIONS.ENABLE_EMMET,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-use-elastic-tabstops',
                    text: DESCRIPTIONS.USE_ELASTIC_TABSTOPS,
                    meta: '',
                    update: true
                }
            ]
        };
    }

    updateMenuItems() {
        const materialHelper = new MaterialHelper();
        this.menu.items.forEach(item => {
            const data = this.itemData.items.find(
                data => item.id == data.id
            );
            if (data.update) {
                let optionValue = String(this.core.getOption(
                    this.core.idToName(
                        item.id.slice((this.id + '-oed-').length)
                    )
                ));
                let optionText = optionValue;
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
