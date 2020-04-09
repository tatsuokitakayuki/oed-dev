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
                    text: 'Enable basic autocompletion',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-enable-live-autocompletion',
                    text: 'Enable live autocompletion',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-enable-snippets',
                    text: 'Enable snippets',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-enable-emmet',
                    text: 'Enable emmet',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-extensions-oed-use-elastic-tabstops',
                    text: 'Use elastic tabstops',
                    meta: '',
                    update: true
                }
            ]
        };
    }

    initialize() {
        super.initialize();
        const materialHelper = new MaterialHelper();
        materialHelper.menuItems(document.getElementById(this.itemData.id), this.itemData.items);
    }

    updateMenuItems() {
        this.menu.items.forEach(item => {
            const data = this.itemData.items.find(
                data => item.id == data.id
            );
            if (data.update) {
                let optionValue = String(
                    this.core.getOption(
                        this.core.idToName(
                            item.id.slice((this.menuId + '-oed-').length)
                        )
                    )
                );
                let optionText = optionValue;
                item.textContent = data.text + ' [' + optionText + ']';
            }
        });
    }
}
