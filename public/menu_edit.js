import {DESCRIPTIONS} from '/res/descriptions.js';
import {Menu} from '/menu.js';

export class MenuEdit extends Menu {
    constructor(core) {
        super(core, 'menu-edit');
        this.itemData = {
            id: 'menu-list-edit',
            items: [
                {
                    id: 'menu-edit-undo',
                    text: DESCRIPTIONS.UNDO,
                    meta: 'Ctrl+Z',
                    update: false
                },
                {
                    id: 'menu-edit-redo',
                    text: DESCRIPTIONS.REDO,
                    meta: 'Ctrl+Shift+Z',
                    update: false
                },
                /*
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-cut',
                    text: DESCRIPTIONS.CUT,
                    meta: 'Ctrl+X',
                    update: false
                },
                {
                    id: 'menu-edit-copy',
                    text: DESCRIPTIONS.COPY,
                    meta: 'Ctrl+C',
                    update: false
                },
                {
                    id: 'menu-edit-paste',
                    text: DESCRIPTIONS.PASTE,
                    meta: 'Ctrl+V',
                    update: false
                },
                */
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-overwrite',
                    text: DESCRIPTIONS.OVERWRITE,
                    meta: 'Ins',
                    update: false
                },
                {
                    id: 'menu-edit-delete',
                    text: DESCRIPTIONS.DELETE,
                    meta: 'Del',
                    update: false
                },
                {
                    id: 'menu-edit-backspace',
                    text: DESCRIPTIONS.BACKSPACE,
                    meta: 'Bs',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-selectall',
                    text: DESCRIPTIONS.SELECT_ALL,
                    meta: 'Ctrl+A',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-indent',
                    text: DESCRIPTIONS.INDENT,
                    meta: 'Tab',
                    update: false
                },
                {
                    id: 'menu-edit-outdent',
                    text: DESCRIPTIONS.OUTDENT,
                    meta: 'Shift+Tab',
                    update: false
                },
                {
                    id: 'menu-edit-blockindent',
                    text: DESCRIPTIONS.BLOCK_INDENT,
                    meta: 'Ctrl+]',
                    update: false
                },
                {
                    id: 'menu-edit-blockoutdent',
                    text: DESCRIPTIONS.BLOCK_OUTDENT,
                    meta: 'Ctrl+[',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-touppercase',
                    text: DESCRIPTIONS.TO_UPPER_CASE,
                    meta: 'Ctrl+U',
                    update: false
                },
                {
                    id: 'menu-edit-tolowercase',
                    text: DESCRIPTIONS.TO_LOWER_CASE,
                    meta: 'Ctrl+Shift+U',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-sortlines',
                    text: DESCRIPTIONS.SORT_LINES,
                    meta: 'Ctrl+Alt+S',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-togglerecording',
                    text: DESCRIPTIONS.TOGGLE_RECORDING_MACRO,
                    meta: 'Ctrl+Alt+E',
                    update: false
                },
                {
                    id: 'menu-edit-replaymacro',
                    text: DESCRIPTIONS.REPLAY_MACRO,
                    meta: 'Ctrl+Shift+E',
                    update: false
                }
            ]
        };
    }
}
