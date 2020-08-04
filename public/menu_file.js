import {descriptions} from '/res/descriptions.js';
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
                    text: descriptions.NEW_FILE,
                    meta: 'Ctrl+N',
                    update: false
                },
                {
                    id: 'menu-file-oed-open-file',
                    text: descriptions.OPEN_FILE + '...',
                    meta: 'Ctrl+O',
                    update: false
                },
                {
                    id: 'menu-file-oed-download-file',
                    text: descriptions.DOWNLOAD_FILE,
                    meta: 'Ctrl+S',
                    update: false
                },
                {
                    id: 'menu-file-oed-rename-file',
                    text: descriptions.RENAME_FILE + '...',
                    meta: 'Alt+R',
                    update: false
                },
                {
                    id: 'menu-file-oed-read-only', // Editor
                    text: descriptions.READ_ONLY,
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-toggle-file-list',
                    text: descriptions.TOGGLE_FILE_LIST,
                    meta: 'Ctrl+Shift+F',
                    update: false
                },
                {
                    id: 'menu-file-oed-next-file',
                    text: descriptions.NEXT_FILE,
                    meta: 'Ctrl+Tab',
                },
                {
                    id: 'menu-file-oed-previous-file',
                    text: descriptions.PREVIOUS_FILE,
                    meta: 'Ctrl+Shift+Tab',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-file-decoding', // OED
                    text: descriptions.FILE_DECODING + '...',
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-first-line-number', // EditSession
                    text: descriptions.FIRST_LINE_NUMBER + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-fold-style', // EditSession
                    text: descriptions.FOLD_STYLE + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-indented-soft-wrap', // EditSession
                    text: descriptions.INDENTED_SOFT_WRAP,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-mode', // EditSession
                    text: descriptions.LANGUAGE_MODE + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-new-line-mode', // EditSession
                    text: descriptions.NEW_LINE_MODE + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-wrap', // EditSession
                    text: descriptions.WRAP + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-tab-size', // EditSession
                    text: descriptions.TAB_SIZE + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-use-soft-tabs', // EditSession
                    text: descriptions.USE_SOFT_TABS,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-save-edit-session-options',
                    text: descriptions.SAVE_EDIT_SESSION_OPTIONS,
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-close-file',
                    text: descriptions.CLOSE_FILE + '...',
                    meta: 'Alt+W',
                    update: false
                }
            ]
        };
    }

    updateMenuItems() {
        const res = new Res();
        const materialHelper = new MaterialHelper();
        this.menu.items.forEach(item => {
            const data = this.itemData.items.find(
                data => item.id == data.id
            );
            if (data.update) {
                const optionValue = String(
                    this.core.getOption(
                        this.core.idToName(
                            item.id.slice((this.id + '-oed-').length)
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
                materialHelper.removeChildren(item);
                item.appendChild(materialHelper.listItemRipple());
                item.appendChild(materialHelper.listItemText(
                    data.text + ' [' + optionText + ']'
                ));
                if (data.meta) {
                    item.appendChild(materialHelper.listItemMeta(data.meta));
                }
            }
        });
    }
}
