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
                    meta: 'Ctrl+Z'
                },
                {
                    id: 'menu-edit-redo',
                    text: 'Redo',
                    meta: 'Ctrl+Shift+Z'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-cut',
                    text: 'Cut',
                    meta: 'Ctrl+X'
                },
                {
                    id: 'menu-edit-copy',
                    text: 'Copy',
                    meta: 'Ctrl+C'
                },
                /*
                {
                    id: 'menu-edit-paste',
                    text: 'Paste',
                    meta: 'Ctrl+V'
                },
                */
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-overwrite',
                    text: 'Overwrite',
                    meta: 'Ins'
                },
                {
                    id: 'menu-edit-delete',
                    text: 'Delete',
                    meta: 'Del'
                },
                {
                    id: 'menu-edit-backspace',
                    text: 'Backspace',
                    meta: 'Bs'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-selectall',
                    text: 'Select all',
                    meta: 'Ctrl+A'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-indent',
                    text: 'Indent',
                    meta: 'Tab'
                },
                {
                    id: 'menu-edit-outdent',
                    text: 'Outdent',
                    meta: 'Shift+Tab'
                },
                {
                    id: 'menu-edit-blockindent',
                    text: 'Block indent',
                    meta: 'Ctrl+]'
                },
                {
                    id: 'menu-edit-blockoutdent',
                    text: 'Block outdent',
                    meta: 'Ctrl+['
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-touppercase',
                    text: 'To upper case',
                    meta: 'Ctrl+U'
                },
                {
                    id: 'menu-edit-tolowercase',
                    text: 'To lower case',
                    meta: 'Ctrl+Shift+U'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-sortlines',
                    text: 'Sort lines',
                    meta: 'Ctrl+Alt+S'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-edit-togglerecording',
                    text: 'Toggle recording macro',
                    meta: 'Ctrl+Alt+E'
                },
                {
                    id: 'menu-edit-replaymacro',
                    text: 'Replay macro',
                    meta: 'Ctrl+Shift+E'
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
