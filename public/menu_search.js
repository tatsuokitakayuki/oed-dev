import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';

export class MenuSearch extends Menu {

    constructor(core) {
        super(core, 'menu-search');
        this.itemData = {
            id: 'menu-list-search',
            items: [
                {
                    id: 'menu-search-find',
                    text: 'Find...',
                    meta: 'Ctrl+F'
                },
                {
                    id: 'menu-search-find-next',
                    text: 'Find next',
                    meta: 'Ctrl+K'
                },
                {
                    id: 'menu-search-find-previous',
                    text: 'Find Previous',
                    meta: 'Ctrl+Shift+K'
                },
                {
                    id: 'menu-search-select-or-find-next',
                    text: 'Select or find next',
                    meta: 'Alt+K'
                },
                {
                    id: 'menu-search-select-or-find-previous',
                    text: 'Select or find previous',
                    meta: 'Alt+Shift+K'
                },
                {
                    id: 'menu-search-find-all',
                    text: 'Find all',
                    meta: 'Ctrl+Alt+K'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-search-replace',
                    text: 'Replace...',
                    meta: 'Ctrl+H'
                }
            ]
        };
    }

    initialize() {
        super.initialize();
        const materialHelper = new MaterialHelper();
        materialHelper.menuItems(document.getElementById(this.itemData.id), this.itemData.items);
    }

    onAction(event) {
        super.onAction(event);
        switch(event.detail.index) {
            case 0:
            case 6:
                break;
            default:
                break;
        }
    }
}
