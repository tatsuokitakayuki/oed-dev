import {DESCRIPTIONS} from '/res/descriptions.js';
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
                    text: DESCRIPTIONS.NEW_FILE,
                    meta: 'Ctrl+N',
                    update: false
                },
                {
                    id: 'menu-file-oed-open-file',
                    text: DESCRIPTIONS.OPEN_FILE + '...',
                    meta: 'Ctrl+O',
                    update: false
                },
                {
                    id: 'menu-file-oed-download-file',
                    text: DESCRIPTIONS.DOWNLOAD_FILE,
                    meta: 'Ctrl+S',
                    update: false
                },
                {
                    id: 'menu-file-oed-rename-file',
                    text: DESCRIPTIONS.RENAME_FILE + '...',
                    meta: 'Alt+R',
                    update: false
                },
                {
                    id: 'menu-file-oed-read-only', // Editor
                    text: DESCRIPTIONS.READ_ONLY,
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-toggle-file-list',
                    text: DESCRIPTIONS.TOGGLE_FILE_LIST,
                    meta: 'Ctrl+Shift+F',
                    update: false
                },
                {
                    id: 'menu-file-oed-next-file',
                    text: DESCRIPTIONS.NEXT_FILE,
                    meta: 'Ctrl+Tab',
                },
                {
                    id: 'menu-file-oed-previous-file',
                    text: DESCRIPTIONS.PREVIOUS_FILE,
                    meta: 'Ctrl+Shift+Tab',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-file-decoding', // OED
                    text: DESCRIPTIONS.FILE_DECODING + '...',
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-first-line-number', // EditSession
                    text: DESCRIPTIONS.FIRST_LINE_NUMBER + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-fold-style', // EditSession
                    text: DESCRIPTIONS.FOLD_STYLE + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-indented-soft-wrap', // EditSession
                    text: DESCRIPTIONS.INDENTED_SOFT_WRAP,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-mode', // EditSession
                    text: DESCRIPTIONS.LANGUAGE_MODE + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-new-line-mode', // EditSession
                    text: DESCRIPTIONS.NEW_LINE_MODE + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-wrap', // EditSession
                    text: DESCRIPTIONS.WRAP + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-tab-size', // EditSession
                    text: DESCRIPTIONS.TAB_SIZE + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-use-soft-tabs', // EditSession
                    text: DESCRIPTIONS.USE_SOFT_TABS,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-file-oed-save-edit-session-options',
                    text: DESCRIPTIONS.SAVE_EDIT_SESSION_OPTIONS,
                    meta: '',
                    update: false
                },
                {id: '-', text: '', meta: ''},
                {
                    id: 'menu-file-oed-close-file',
                    text: DESCRIPTIONS.CLOSE_FILE + '...',
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
