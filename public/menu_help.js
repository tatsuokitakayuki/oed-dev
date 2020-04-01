import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';
import {Res} from '/res.js';

export class MenuHelp extends Menu {

    constructor(core) {
        super(core, 'menu-help');
        this.itemData = {
            id: 'menu-list-help',
            items: [
                {
                    id: 'menu-help-open-command-pallete',
                    text: 'Command pallete...',
                    meta: 'F1'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-toed-keybinding',
                    text: 'Keybinding...',
                    meta: ''
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-toed-export-options',
                    text: 'Export Options',
                    meta: ''
                },
                {
                    id: 'menu-help-toed-import-options',
                    text: 'Import Options...',
                    meta: ''
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-toed-cache-list',
                    text: 'Cache list',
                    meta: ''
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-toed-change-log',
                    text: 'Change log',
                    meta: ''
                },
                {
                    id: 'menu-help-toed-about',
                    text: 'About',
                    meta: ''
                }
            ]
        };
    }

    initialize() {
        super.initialize();
        const materialHelper = new MaterialHelper();
        materialHelper.menuItems(
            document.getElementById(this.itemData.id), this.itemData.items
        );
    }

    updateMenuItems() {
        const res = new Res();
        this.menu.items.forEach(item => {
            const originalText = this.itemData.items.find(
                data => item.id == data.id
            ).text;
            switch (item.id) {
                case 'menu-help-toed-keybinding':
                    item.textContent = originalText + ' [' +
                        res.keybindings.find(
                            item => item.value == String(this.core.getKeybinding())
                        ).name + ']';
                    break;
                default:
                    break;
            }
        });
    }
}
