import {Menu} from '/menu.js';
import {Res} from '/res.js';

export class MenuEdit extends Menu {
    constructor(core) {
        super(core, 'menu-edit');
        const res = new Res();
        this.itemData = {
            id: 'menu-list-edit',
            items: [
                {
                    id: 'menu-edit-undo',
                    text: res.descriptions.undo,
                    meta: 'Ctrl+Z',
                    update: false
                },
                {
                    id: 'menu-edit-redo',
                    text: res.descriptions.redo,
                    meta: 'Ctrl+Shift+Z',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: res.descriptions.cut,
                    text: 'Cut',
                    meta: 'Ctrl+X',
                    update: false
                },
                {
                    id: 'menu-edit-copy',
                    text: res.descriptions.copy,
                    meta: 'Ctrl+C',
                    update: false
                },
                /*
                {
                    id: 'menu-edit-paste',
                    text: res.descriptions.paste,
                    meta: 'Ctrl+V',
                    update: false
                },
                */
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-overwrite',
                    text: res.descriptions.overwrite,
                    meta: 'Ins',
                    update: false
                },
                {
                    id: 'menu-edit-delete',
                    text: res.descriptions.delete,
                    meta: 'Del',
                    update: false
                },
                {
                    id: 'menu-edit-backspace',
                    text: res.descriptions.backspace,
                    meta: 'Bs',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-selectall',
                    text: res.descriptions.select_all,
                    meta: 'Ctrl+A',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-indent',
                    text: res.descriptions.indent,
                    meta: 'Tab',
                    update: false
                },
                {
                    id: 'menu-edit-outdent',
                    text: res.descriptions.outdent,
                    meta: 'Shift+Tab',
                    update: false
                },
                {
                    id: 'menu-edit-blockindent',
                    text: res.descriptions.block_indent,
                    meta: 'Ctrl+]',
                    update: false
                },
                {
                    id: 'menu-edit-blockoutdent',
                    text: res.descriptions.block_outdent,
                    meta: 'Ctrl+[',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-touppercase',
                    text: res.descriptions.to_upper_case,
                    meta: 'Ctrl+U',
                    update: false
                },
                {
                    id: 'menu-edit-tolowercase',
                    text: res.descriptions.to_lower_case,
                    meta: 'Ctrl+Shift+U',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-sortlines',
                    text: res.descriptions.sort_lines,
                    meta: 'Ctrl+Alt+S',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-togglerecording',
                    text: res.descriptions.toggle_recording_macro,
                    meta: 'Ctrl+Alt+E',
                    update: false
                },
                {
                    id: 'menu-edit-replaymacro',
                    text: res.descriptions.replay_macro,
                    meta: 'Ctrl+Shift+E',
                    update: false
                }
            ]
        };
    }
}
