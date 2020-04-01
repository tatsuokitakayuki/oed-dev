import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';

export class MenuCode extends Menu {

    constructor(core) {
        super(core, 'menu-code');
        this.itemData = {
            id: 'menu-list-code',
            items: [
                {
                    id: 'menu-code-go-to-next-error',
                    text: 'Next error',
                    meta: 'Alt+E'
                },
                {
                    id: 'menu-code-go-to-previous-error',
                    text: 'Previous error',
                    meta: 'Alt+Shift+E'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-togglecomment',
                    text: 'Toggle comment',
                    meta: 'Ctrl+/'
                },
                {
                    id: 'menu-code-toggle-block-comment',
                    text: 'Toggle block comment',
                    meta: 'Ctrl+Shift+/'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-modify-number-up',
                    text: 'Modify number up',
                    meta: 'Ctrl+Shift+Up'
                },
                {
                    id: 'menu-code-modify-number-down',
                    text: 'Modify number down',
                    meta: 'Ctrl+Shift+Down'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-fold',
                    text: 'Fold',
                    meta: 'Alt+L'
                },
                {
                    id: 'menu-code-unfold',
                    text: 'Unfold',
                    meta: 'Alt+Shift+L'
                },
                {
                    id: 'menu-code-toggle-fold-widget',
                    text: 'Toggle fold widget',
                    meta: 'F2'
                },
                {
                    id: 'menu-code-toggle-parent-fold-widget',
                    text: 'Toggle parent fold widget',
                    meta: 'Alt+F2'
                },
                {
                    id: 'menu-code-fold-other',
                    text: 'Fold other',
                    meta: 'Alt+0'
                },
                {
                    id: 'menu-code-unfoldall',
                    text: 'Unfold all',
                    meta: 'Alt+Shift+0'
                }
            ]
        };
    }

    initialize() {
        super.initialize();
        const materialHelper = new MaterialHelper();
        materialHelper.menuItems(document.getElementById(this.itemData.id), this.itemData.items);
    }
}
