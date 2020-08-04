import {descriptions} from '/res/descriptions.js';
import {Menu} from '/menu.js';

export class MenuCode extends Menu {
    constructor(core) {
        super(core, 'menu-code');
        this.itemData = {
            id: 'menu-list-code',
            items: [
                {
                    id: 'menu-code-go-to-next-error',
                    text: descriptions.NEXT_ERROR,
                    meta: 'Alt+E',
                    update: false
                },
                {
                    id: 'menu-code-go-to-previous-error',
                    text: descriptions.PREVIOUS_ERROR,
                    meta: 'Alt+Shift+E',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-togglecomment',
                    text: descriptions.TOGGLE_COMMENT,
                    meta: 'Ctrl+/',
                    update: false
                },
                {
                    id: 'menu-code-toggle-block-comment',
                    text: descriptions.TOGGLE_BLOCK_COMMENT,
                    meta: 'Ctrl+Shift+/',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-modify-number-up',
                    text: descriptions.MODIFY_NUMBER_UP,
                    meta: 'Ctrl+Shift+Up',
                    update: false
                },
                {
                    id: 'menu-code-modify-number-down',
                    text: descriptions.MODIFY_NUMBER_DOWN,
                    meta: 'Ctrl+Shift+Down',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-fold',
                    text: descriptions.FOLD,
                    meta: 'Alt+L',
                    update: false
                },
                {
                    id: 'menu-code-unfold',
                    text: descriptions.UNFOLD,
                    meta: 'Alt+Shift+L',
                    update: false
                },
                {
                    id: 'menu-code-toggle-fold-widget',
                    text: descriptions.TOGGLE_FOLD_WIDGET,
                    meta: 'F2',
                    update: false
                },
                {
                    id: 'menu-code-toggle-parent-fold-widget',
                    text: descriptions.TOGGLE_PARENT_FOLD_WIDGET,
                    meta: 'Alt+F2',
                    update: false
                },
                {
                    id: 'menu-code-fold-other',
                    text: descriptions.FOLD_OTHER,
                    meta: 'Alt+0',
                    update: false
                },
                {
                    id: 'menu-code-unfoldall',
                    text: descriptions.UNFOLD_ALL,
                    meta: 'Alt+Shift+0',
                    update: false
                }
            ]
        };
    }
}
