import {Menu} from '/menu.js';
import {Res} from '/res.js';

export class MenuSearch extends Menu {
    constructor(core) {
        super(core, 'menu-search');
        const res = new Res();
        this.itemData = {
            id: 'menu-list-search',
            items: [
                {
                    id: 'menu-search-find',
                    text: res.descriptions.find + '...',
                    meta: 'Ctrl+F',
                    update: false
                },
                {
                    id: 'menu-search-find-next',
                    text: res.descriptions.find_next,
                    meta: 'Ctrl+K',
                    update: false
                },
                {
                    id: 'menu-search-find-previous',
                    text: res.descriptions.find_previous,
                    meta: 'Ctrl+Shift+K',
                    update: false
                },
                {
                    id: 'menu-search-select-or-find-next',
                    text: res.descriptions.select_or_find_next,
                    meta: 'Alt+K',
                    update: false
                },
                {
                    id: 'menu-search-select-or-find-previous',
                    text: res.descriptions.select_or_find_previous,
                    meta: 'Alt+Shift+K',
                    update: false
                },
                {
                    id: 'menu-search-find-all',
                    text: res.descriptions.find_all,
                    meta: 'Ctrl+Alt+K',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-search-replace',
                    text: res.descriptions.replace + '...',
                    meta: 'Ctrl+H',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-search-gotoline',
                    text: res.descriptions.go_to_line + '...',
                    meta: 'Ctrl+L',
                    update: false
                }
            ]
        };
    }
}
