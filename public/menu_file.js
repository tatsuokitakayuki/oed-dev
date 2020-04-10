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
                    meta: 'Ctrl+N',
                    update: false
                },
                {
                    id: 'menu-file-oed-open-file',
                    text: 'Open file...',
                    meta: 'Ctrl+O',
                    update: false
                },
                {
                    id: 'menu-file-oed-download-file',
                    text: 'Download file',
                    meta: 'Ctrl+S',
                    update: false
                },
                {
                    id: 'menu-file-oed-rename-file',
                    text: 'Rename file...',
                    meta: 'Alt+R',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-toggle-file-list',
                    text: 'Toggle file list',
                    meta: 'Ctrl+Shift+F',
                    update: false
                },
                {
                    id: 'menu-file-oed-next-file',
                    text: 'Next file',
                    meta: 'Ctrl+Tab',
                },
                {
                    id: 'menu-file-oed-previous-file',
                    text: 'Previous file',
                    meta: 'Ctrl+Shift+Tab',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-file-decoding', // OED
                    text: 'File decoding...',
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-first-line-number', // EditSession
                    text: 'First line number...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-fold-style', // EditSession
                    text: 'Fold style...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-mode', // EditSession
                    text: 'Language mode...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-new-line-mode', // EditSession
                    text: 'New line mode...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-wrap', // EditSession
                    text: 'Soft wrap...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-tab-size', // EditSession
                    text: 'Tab size...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-use-soft-tabs', // EditSession
                    text: 'Use soft tabs',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-save-edit-session-options',
                    text: 'Save edit session options',
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-close-file',
                    text: 'Close file...',
                    meta: 'Alt+W',
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
                    case 'menu-file-oed-file-decoding':
                        optionText = res.encoding_names.find(
                            item => item.value == String(optionValue)
                        ).name;
                        break;
                    case 'menu-file-oed-fold-style':
                        optionText = res.fold_style.find(
                            item => item.value == optionValue
                        ).name;
                        break;
                    case 'menu-file-oed-mode':
                        const modeList = ace.require('ace/ext/modelist');
                        optionText = modeList.modes.find(
                            item => item.mode == optionValue
                        ).caption;
                        break;
                    case 'menu-file-oed-new-line-mode':
                        optionText = res.new_line_mode.find(
                            item => item.value == optionValue
                        ).name;
                        break;
                    case 'menu-file-oed-wrap':
                        optionText = res.wrap.find(
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
