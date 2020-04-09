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
                    meta: 'F1',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-keybinding',
                    text: 'Keybinding...',
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-export-options',
                    text: 'Export Options',
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-import-options',
                    text: 'Import Options...',
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-cache-list',
                    text: 'Cache list',
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-change-log',
                    text: 'Change log',
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-about',
                    text: 'About',
                    meta: '',
                    update: false
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
            const data = this.itemData.items.find(
                data => item.id == data.id
            );
            if (data.update) {
                let optionValue = '';
                if (item.id != 'menu-help-oed-keybinding') {
                    optionValue = String(
                        this.core.getOption(
                            this.core.idToName(
                                item.id.slice((this.menuId + '-oed-').length)
                            )
                        )
                    );
                } else {
                    optionValue = String(this.core.getKeybinding());
                }
                let optionText = optionValue;
                switch (item.id) {
                    case 'menu-help-oed-keybinding':
                        optionText = res.keybindings.find(
                            item => item.value == optionValue
                        ).name;
                        break;
                    default:
                        break;
                }
                item.textContent = data.text + ' [' + optionText + ']';
            }
        });
    }
}
