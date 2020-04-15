import {Menu} from '/menu.js';
import {Res} from '/res.js';

export class MenuFile extends Menu {

    constructor(core) {
        super(core, 'menu-file');
        const res = new Res();
        this.itemData = {
            id: 'menu-list-file',
            items: [
                {
                    id: 'menu-file-oed-new-file',
                    text: res.descriptions.new_file,
                    meta: 'Ctrl+N',
                    update: false
                },
                {
                    id: 'menu-file-oed-open-file',
                    text: res.descriptions.open_file + '...',
                    meta: 'Ctrl+O',
                    update: false
                },
                {
                    id: 'menu-file-oed-download-file',
                    text: res.descriptions.download_file,
                    meta: 'Ctrl+S',
                    update: false
                },
                {
                    id: 'menu-file-oed-rename-file',
                    text: res.descriptions.rename_file + '...',
                    meta: 'Alt+R',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-toggle-file-list',
                    text: res.descriptions.toggle_file_list,
                    meta: 'Ctrl+Shift+F',
                    update: false
                },
                {
                    id: 'menu-file-oed-next-file',
                    text: res.descriptions.next_file,
                    meta: 'Ctrl+Tab',
                },
                {
                    id: 'menu-file-oed-previous-file',
                    text: res.descriptions.previous_file,
                    meta: 'Ctrl+Shift+Tab',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-file-decoding', // OED
                    text: res.descriptions.file_decoding + '...',
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-first-line-number', // EditSession
                    text: res.descriptions.first_line_number + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-fold-style', // EditSession
                    text: res.descriptions.fold_style + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-mode', // EditSession
                    text: res.descriptions.language_mode + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-new-line-mode', // EditSession
                    text: res.descriptions.new_line_mode + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-wrap', // EditSession
                    text: res.descriptions.wrap + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-tab-size', // EditSession
                    text: res.descriptions.tab_size + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-use-soft-tabs', // EditSession
                    text: res.descriptions.use_soft_tabs,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-save-edit-session-options',
                    text: res.descriptions.save_edit_session_options,
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-close-file',
                    text: res.descriptions.close_file + '...',
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
