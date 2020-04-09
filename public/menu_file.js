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
                    id: 'menu-file-oed-file-decoding', // OED
                    text: 'File decoding...',
                    meta: ''
                },
                {
                    id: 'menu-file-oed-first-line-number', // EditSession
                    text: 'First line number...',
                    meta: ''
                },
                {
                    id: 'menu-file-oed-fold-style', // EditSession
                    text: 'Fold style...',
                    meta: ''
                },
                {
                    id: 'menu-file-oed-mode', // EditSession
                    text: 'Mode...',
                    meta: ''
                },
                {
                    id: 'menu-file-oed-new-line-mode', // EditSession
                    text: 'New line mode...',
                    meta: ''
                },
                {
                    id: 'menu-file-oed-wrap', // EditSession
                    text: 'Soft wrap...',
                    meta: ''
                },
                {
                    id: 'menu-file-oed-tab-size', // EditSession
                    text: 'Tab size...',
                    meta: ''
                },
                {
                    id: 'menu-file-oed-use-soft-tabs', // EditSession
                    text: 'Use soft tabs',
                    meta: ''
                },
                {
                    id: 'menu-file-oed-save-edit-session-options',
                    text: 'Save edit session options',
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
        const noOptions = [
            'menu-file-oed-new-file',
            'menu-file-oed-open-file',
            'menu-file-oed-download-file',
            'menu-file-oed-rename-file',
            'menu-file-oed-toggle-file-list',
            'menu-file-oed-next-file',
            'menu-file-oed-previous-file',
            'menu-file-oed-save-edit-session-options',
            'menu-file-oed-close-file',
        ];
        const res = new Res();
        this.menu.items.forEach(item => {
            const data = this.itemData.items.find(
                data => item.id == data.id
            );
            if (!noOptions.includes(data.id)) {
                const originalText = data.text;
                let optionValue = '';
                if (item.id != 'menu-file-oed-file-decoding') {
                    optionValue = String(
                        this.core.getOption(
                            this.core.idToName(
                                item.id.slice((this.menuId + '-oed-').length)
                            )
                        )
                    );
                } else {
                    optionValue = this.core.getFileDecoding();
                }
                switch (item.id) {
                    case 'menu-file-oed-file-decoding':
                        item.textContent = originalText + ' [' +
                            res.encoding_names.find(
                                item => item.value == String(optionValue)
                            ).name + ']';
                        break;
                    case 'menu-file-oed-first-line-number':
                    case 'menu-file-oed-tab-size':
                    case 'menu-file-oed-use-soft-tabs':
                        item.textContent = originalText + ' [' + optionValue + ']';
                        break;
                    case 'menu-file-oed-fold-style':
                        item.textContent = originalText + ' [' +
                            res.fold_style.find(
                                item => item.value == optionValue
                            ).name + ']';
                        break;
                    case 'menu-file-oed-mode':
                        const modeList = ace.require('ace/ext/modelist');
                        item.textContent = originalText + ' [' +
                            modeList.modes.find(
                                item => item.mode == optionValue
                            ).caption + ']';
                        break;
                    case 'menu-file-oed-new-line-mode':
                        item.textContent = originalText + ' [' +
                            res.new_line_mode.find(
                                item => item.value == optionValue
                            ).name + ']';
                        break;
                    case 'menu-file-oed-wrap':
                        item.textContent = originalText + ' [' +
                            res.wrap.find(
                                item => item.value == optionValue
                            ).name + ']';
                        break;
                    default:
                        break;
                }
            }
        });
    }
}
