import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';
import {Res} from '/res.js';

export class MenuExtensions extends Menu {
    constructor(core) {
        super(core, 'menu-extensions');
        const res = new Res();
        this.itemData = {
            id: 'menu-list-extensions',
            items: [
                {
                    id: 'menu-extensions-oed-enable-basic-autocompletion',
                    text: res.descriptions.enable_basic_autocompletion,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-enable-live-autocompletion',
                    text: res.descriptions.enable_live_autocompletion,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-enable-snippets',
                    text: res.descriptions.enable_snippets,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-enable-emmet',
                    text: res.descriptions.enable_emmet,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-use-elastic-tabstops',
                    text: res.descriptions.use_elastic_tabstops,
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
