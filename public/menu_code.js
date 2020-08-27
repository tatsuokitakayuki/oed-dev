import {DESCRIPTIONS} from '/res/descriptions.js';
import {Menu} from '/menu.js';

export class MenuCode extends Menu {
    constructor(core) {
        super(core, 'menu-code');
        this.itemData = {
            id: 'menu-list-code',
            items: [
                {
                    id: 'menu-code-go-to-next-error',
                    text: DESCRIPTIONS.NEXT_ERROR,
                    meta: 'Alt+E',
                    update: false
                },
                {
                    id: 'menu-code-go-to-previous-error',
                    text: DESCRIPTIONS.PREVIOUS_ERROR,
                    meta: 'Alt+Shift+E',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-togglecomment',
                    text: DESCRIPTIONS.TOGGLE_COMMENT,
                    meta: 'Ctrl+/',
                    update: false
                },
                {
                    id: 'menu-code-toggle-block-comment',
                    text: DESCRIPTIONS.TOGGLE_BLOCK_COMMENT,
                    meta: 'Ctrl+Shift+/',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-modify-number-up',
                    text: DESCRIPTIONS.MODIFY_NUMBER_UP,
                    meta: 'Ctrl+Shift+Up',
                    update: false
                },
                {
                    id: 'menu-code-modify-number-down',
                    text: DESCRIPTIONS.MODIFY_NUMBER_DOWN,
                    meta: 'Ctrl+Shift+Down',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-fold',
                    text: DESCRIPTIONS.FOLD,
                    meta: 'Alt+L',
                    update: false
                },
                {
                    id: 'menu-code-unfold',
                    text: DESCRIPTIONS.UNFOLD,
                    meta: 'Alt+Shift+L',
                    update: false
                },
                {
                    id: 'menu-code-toggle-fold-widget',
                    text: DESCRIPTIONS.TOGGLE_FOLD_WIDGET,
                    meta: 'F2',
                    update: false
                },
                {
                    id: 'menu-code-toggle-parent-fold-widget',
                    text: DESCRIPTIONS.TOGGLE_PARENT_FOLD_WIDGET,
                    meta: 'Alt+F2',
                    update: false
                },
                {
                    id: 'menu-code-foldall',
                    text: DESCRIPTIONS.FOLD_ALL,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-code-fold-all-comments',
                    text: DESCRIPTIONS.FOLD_ALL_COMMENTS,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-code-fold-other',
                    text: DESCRIPTIONS.FOLD_OTHER,
                    meta: 'Alt+0',
                    update: false
                },
                {
                    id: 'menu-code-unfoldall',
                    text: DESCRIPTIONS.UNFOLD_ALL,
                    meta: 'Alt+Shift+0',
                    update: false
                }
            ]
        };
    }
}
