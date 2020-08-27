import {DESCRIPTIONS} from '/res/descriptions.js';
import {Menu} from '/menu.js';

export class MenuSearch extends Menu {
    constructor(core) {
        super(core, 'menu-search');
        this.itemData = {
            id: 'menu-list-search',
            items: [
                {
                    id: 'menu-search-find',
                    text: DESCRIPTIONS.FIND + '...',
                    meta: 'Ctrl+F',
                    update: false
                },
                {
                    id: 'menu-search-findnext',
                    text: DESCRIPTIONS.FIND_NEXT,
                    meta: 'Ctrl+K',
                    update: false
                },
                {
                    id: 'menu-search-findprevious',
                    text: DESCRIPTIONS.FIND_PREVIOUS,
                    meta: 'Ctrl+Shift+K',
                    update: false
                },
                {
                    id: 'menu-search-select-or-find-next',
                    text: DESCRIPTIONS.SELECT_OR_FIND_NEXT,
                    meta: 'Alt+K',
                    update: false
                },
                {
                    id: 'menu-search-select-or-find-previous',
                    text: DESCRIPTIONS.SELECT_OR_FIND_PREVIOUS,
                    meta: 'Alt+Shift+K',
                    update: false
                },
                {
                    id: 'menu-search-find-all',
                    text: DESCRIPTIONS.FIND_ALL,
                    meta: 'Ctrl+Alt+K',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-search-replace',
                    text: DESCRIPTIONS.REPLACE + '...',
                    meta: 'Ctrl+H',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-search-gotoline',
                    text: DESCRIPTIONS.GO_TO_LINE + '...',
                    meta: 'Ctrl+L',
                    update: false
                }
            ]
        };
    }
}
