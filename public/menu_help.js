import {Menu} from '/menu.js';
import {Res} from '/res.js';

export class MenuHelp extends Menu {

    constructor(core) {
        super(core, 'menu-help');
        const res = new Res();
        this.itemData = {
            id: 'menu-list-help',
            items: [
                {
                    id: 'menu-help-open-command-pallete',
                    text: res.descriptions.command_pallete + '...',
                    meta: 'F1',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-keybinding',
                    text: res.descriptions.keybinding + '...',
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-export-options',
                    text: res.descriptions.export_options,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-import-options',
                    text: res.descriptions.import_options + '...',
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-cache-list',
                    text: res.descriptions.cache_list,
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-help-oed-change-log',
                    text: res.descriptions.change_log,
                    meta: '',
                    update: false
                },
                {
                    id: 'menu-help-oed-about',
                    text: res.descriptions.about,
                    meta: '',
                    update: false
                }
            ]
        };
    }

    updateMenuItems() {
        const res = new Res();
        this.menu.items.forEach(item => {
            const data = this.itemData.items.find(
                data => item.id == data.id
            );
            if (data.update) {
                const optionValue = String(
                    this.core.getOption(
                        this.core.idToName(
                            item.id.slice((this.menuId + '-oed-').length)
                        )
                    )
                );
                let optionText = optionValue;
                switch (item.id) {
                    case 'menu-help-oed-keybinding':
                        optionText = res.keybinding.find(
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
