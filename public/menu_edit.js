import {descriptions} from '/res/descriptions.js';
import {Menu} from '/menu.js';

export class MenuEdit extends Menu {
    constructor(core) {
        super(core, 'menu-edit');
        this.itemData = {
            id: 'menu-list-edit',
            items: [
                {
                    id: 'menu-edit-undo',
                    text: descriptions.UNDO,
                    meta: 'Ctrl+Z',
                    update: false
                },
                {
                    id: 'menu-edit-redo',
                    text: descriptions.REDO,
                    meta: 'Ctrl+Shift+Z',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-cut',
                    text: descriptions.CUT,
                    meta: 'Ctrl+X',
                    update: false
                },
                {
                    id: 'menu-edit-copy',
                    text: descriptions.COPY,
                    meta: 'Ctrl+C',
                    update: false
                },
                /*
                {
                    id: 'menu-edit-paste',
                    text: descriptions.PASTE,
                    meta: 'Ctrl+V',
                    update: false
                },
                */
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-overwrite',
                    text: descriptions.OVERWRITE,
                    meta: 'Ins',
                    update: false
                },
                {
                    id: 'menu-edit-delete',
                    text: descriptions.DELETE,
                    meta: 'Del',
                    update: false
                },
                {
                    id: 'menu-edit-backspace',
                    text: descriptions.BACKSPACE,
                    meta: 'Bs',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-selectall',
                    text: descriptions.SELECT_ALL,
                    meta: 'Ctrl+A',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-indent',
                    text: descriptions.INDENT,
                    meta: 'Tab',
                    update: false
                },
                {
                    id: 'menu-edit-outdent',
                    text: descriptions.OUTDENT,
                    meta: 'Shift+Tab',
                    update: false
                },
                {
                    id: 'menu-edit-blockindent',
                    text: descriptions.BLOCK_INDENT,
                    meta: 'Ctrl+]',
                    update: false
                },
                {
                    id: 'menu-edit-blockoutdent',
                    text: descriptions.BLOCK_OUTDENT,
                    meta: 'Ctrl+[',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-touppercase',
                    text: descriptions.TO_UPPER_CASE,
                    meta: 'Ctrl+U',
                    update: false
                },
                {
                    id: 'menu-edit-tolowercase',
                    text: descriptions.TO_LOWER_CASE,
                    meta: 'Ctrl+Shift+U',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-sortlines',
                    text: descriptions.SORT_LINES,
                    meta: 'Ctrl+Alt+S',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-togglerecording',
                    text: descriptions.TOGGLE_RECORDING_MACRO,
                    meta: 'Ctrl+Alt+E',
                    update: false
                },
                {
                    id: 'menu-edit-replaymacro',
                    text: descriptions.REPLAY_MACRO,
                    meta: 'Ctrl+Shift+E',
                    update: false
                }
            ]
        };
    }
}
