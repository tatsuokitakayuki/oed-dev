import {Menu} from '/menu.js';
import {Res} from '/res.js';

export class MenuCode extends Menu {
    constructor(core) {
        super(core, 'menu-code');
        const res = new Res();
        this.itemData = {
            id: 'menu-list-code',
            items: [
                {
                    id: 'menu-code-go-to-next-error',
                    text: res.descriptions.next_error,
                    meta: 'Alt+E',
                    update: false
                },
                {
                    id: 'menu-code-go-to-previous-error',
                    text: res.descriptions.previous_error,
                    meta: 'Alt+Shift+E',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-togglecomment',
                    text: res.descriptions.toggle_comment,
                    meta: 'Ctrl+/',
                    update: false
                },
                {
                    id: 'menu-code-toggle-block-comment',
                    text: res.descriptions.toggle_block_comment,
                    meta: 'Ctrl+Shift+/',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-modify-number-up',
                    text: res.descriptions.modify_number_up,
                    meta: 'Ctrl+Shift+Up',
                    update: false
                },
                {
                    id: 'menu-code-modify-number-down',
                    text: res.descriptions.modify_number_down,
                    meta: 'Ctrl+Shift+Down',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-code-fold',
                    text: res.descriptions.fold,
                    meta: 'Alt+L',
                    update: false
                },
                {
                    id: 'menu-code-unfold',
                    text: res.descriptions.unfold,
                    meta: 'Alt+Shift+L',
                    update: false
                },
                {
                    id: 'menu-code-toggle-fold-widget',
                    text: res.descriptions.toggle_fold_widget,
                    meta: 'F2',
                    update: false
                },
                {
                    id: 'menu-code-toggle-parent-fold-widget',
                    text: res.descriptions.toggle_parent_fold_widget,
                    meta: 'Alt+F2',
                    update: false
                },
                {
                    id: 'menu-code-fold-other',
                    text: res.descriptions.fold_other,
                    meta: 'Alt+0',
                    update: false
                },
                {
                    id: 'menu-code-unfoldall',
                    text: res.descriptions.unfold_all,
                    meta: 'Alt+Shift+0',
                    update: false
                }
            ]
        };
    }
}
