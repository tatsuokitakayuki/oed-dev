import {descriptions} from '/res/descriptions.js';
import {Menu} from '/menu.js';

export class MenuSearch extends Menu {
    constructor(core) {
        super(core, 'menu-search');
        this.itemData = {
            id: 'menu-list-search',
            items: [
                {
                    id: 'menu-search-find',
                    text: descriptions.FIND + '...',
                    meta: 'Ctrl+F',
                    update: false
                },
                {
                    id: 'menu-search-find-next',
                    text: descriptions.FIND_NEXT,
                    meta: 'Ctrl+K',
                    update: false
                },
                {
                    id: 'menu-search-find-previous',
                    text: descriptions.FIND_PREVIOUS,
                    meta: 'Ctrl+Shift+K',
                    update: false
                },
                {
                    id: 'menu-search-select-or-find-next',
                    text: descriptions.SELECT_OR_FIND_NEXT,
                    meta: 'Alt+K',
                    update: false
                },
                {
                    id: 'menu-search-select-or-find-previous',
                    text: descriptions.SELECT_OR_FIND_PREVIOUS,
                    meta: 'Alt+Shift+K',
                    update: false
                },
                {
                    id: 'menu-search-find-all',
                    text: descriptions.FIND_ALL,
                    meta: 'Ctrl+Alt+K',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-search-replace',
                    text: descriptions.REPLACE + '...',
                    meta: 'Ctrl+H',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-search-gotoline',
                    text: descriptions.GO_TO_LINE + '...',
                    meta: 'Ctrl+L',
                    update: false
                }
            ]
        };
    }
}
