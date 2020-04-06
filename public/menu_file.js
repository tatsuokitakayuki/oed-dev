import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';
import {Res} from '/res.js';

export class MenuFile extends Menu {

    constructor(core) {
        super(core, 'menu-file');
        this.itemData = {
            id: 'menu-list-file',
            items: [
                {
                    id: 'menu-file-oed-new-file',
                    text: 'New file',
                    meta: 'Ctrl+N'
                },
                {
                    id: 'menu-file-oed-open-file',
                    text: 'Open file...',
                    meta: 'Ctrl+O'
                },
                {
                    id: 'menu-file-oed-download-file',
                    text: 'Download file',
                    meta: 'Ctrl+S'
                },
                {
                    id: 'menu-file-oed-rename-file',
                    text: 'Rename file...',
                    meta: 'Alt+R'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-toggle-file-list',
                    text: 'Toggle file list',
                    meta: 'Ctrl+Shift+F'
                },
                {
                    id: 'menu-file-oed-next-file',
                    text: 'Next file',
                    meta: 'Ctrl+Tab'
                },
                {
                    id: 'menu-file-oed-previous-file',
                    text: 'Previous file',
                    meta: 'Ctrl+Shift+Tab'
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-file-decoding',
                    text: 'File decoding...',
                    meta: ''
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-close-file',
                    text: 'Close file...',
                    meta: 'Alt+W'
                }
            ]
        };
    }

    initialize() {
        super.initialize();
        const materialHelper = new MaterialHelper();
        materialHelper.menuItems(document.getElementById(this.itemData.id), this.itemData.items);
    }

    updateMenuItems() {
        const res = new Res();
        this.menu.items.forEach(item => {
            const originalText = this.itemData.items.find(
                data => item.id == data.id
            ).text;
            switch (item.id) {
                case 'menu-file-oed-file-decoding':
                    item.textContent = originalText + ' [' +
                        res.encoding_names.find(
                            item => item.value == String(this.core.getFileDecoding())
                        ).name + ']';
                    break;
                default:
                    break;
            }
        });
    }
}
