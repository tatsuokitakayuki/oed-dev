import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';

export class MenuExtensions extends Menu {

    constructor(core) {
        super(core, 'menu-extensions');
        this.itemData = {
            id: 'menu-list-extensions',
            items: [
                {
                    id: 'menu-extensions-toed-enable-basic-autocompletion',
                    text: 'Enable basic autocompletion',
                    meta: ''
                },
                {
                    id: 'menu-extensions-toed-enable-live-autocompletion',
                    text: 'Enable live autocompletion',
                    meta: ''
                },
                {
                    id: 'menu-extensions-toed-enable-snippets',
                    text: 'Enable snippets',
                    meta: ''
                },
                {
                    id: 'menu-extensions-toed-enable-emmet',
                    text: 'Enable emmet',
                    meta: ''
                },
                {
                    id: 'menu-extensions-toed-use-elastic-tabstops',
                    text: 'Use elastic tabstops',
                    meta: ''
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
            const originalText = this.itemData.items.find(
                data => item.id == data.id
            ).text;
            item.textContent = originalText + ' [' + String(
                this.core.getEditor().getOption(
                    this.core.idToName(
                        item.id.slice((this.menuId + '-toed-').length)
                    )
                )
            ) + ']';
        });
    }
}
