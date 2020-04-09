import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';

export class MenuEdit extends Menu {

    constructor(core) {
        super(core, 'menu-edit');
        this.itemData = {
            id: 'menu-list-edit',
            items: [
                {
                    id: 'menu-edit-undo',
                    text: 'Undo',
                    meta: 'Ctrl+Z',
                    update: false
                },
                {
                    id: 'menu-edit-redo',
                    text: 'Redo',
                    meta: 'Ctrl+Shift+Z',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-cut',
                    text: 'Cut',
                    meta: 'Ctrl+X',
                    update: false
                },
                {
                    id: 'menu-edit-copy',
                    text: 'Copy',
                    meta: 'Ctrl+C',
                    update: false
                },
                /*
                {
                    id: 'menu-edit-paste',
                    text: 'Paste',
                    meta: 'Ctrl+V',
                    update: false
                },
                */
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-overwrite',
                    text: 'Overwrite',
                    meta: 'Ins',
                    update: false
                },
                {
                    id: 'menu-edit-delete',
                    text: 'Delete',
                    meta: 'Del',
                    update: false
                },
                {
                    id: 'menu-edit-backspace',
                    text: 'Backspace',
                    meta: 'Bs',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-selectall',
                    text: 'Select all',
                    meta: 'Ctrl+A',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-indent',
                    text: 'Indent',
                    meta: 'Tab',
                    update: false
                },
                {
                    id: 'menu-edit-outdent',
                    text: 'Outdent',
                    meta: 'Shift+Tab',
                    update: false
                },
                {
                    id: 'menu-edit-blockindent',
                    text: 'Block indent',
                    meta: 'Ctrl+]',
                    update: false
                },
                {
                    id: 'menu-edit-blockoutdent',
                    text: 'Block outdent',
                    meta: 'Ctrl+[',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-touppercase',
                    text: 'To upper case',
                    meta: 'Ctrl+U',
                    update: false
                },
                {
                    id: 'menu-edit-tolowercase',
                    text: 'To lower case',
                    meta: 'Ctrl+Shift+U',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-sortlines',
                    text: 'Sort lines',
                    meta: 'Ctrl+Alt+S',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-togglerecording',
                    text: 'Toggle recording macro',
                    meta: 'Ctrl+Alt+E',
                    update: false
                },
                {
                    id: 'menu-edit-replaymacro',
                    text: 'Replay macro',
                    meta: 'Ctrl+Shift+E',
                    update: false
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
