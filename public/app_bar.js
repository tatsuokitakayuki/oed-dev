import {FocusEditorEvent} from '/focus_editor_event.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';
import {ToggleDrawerEvent} from '/toggle_drawer_event.js';

export class AppBar {
    constructor(core) {
        this.core = core;
        this.topAppBar = new mdc.topAppBar.MDCTopAppBar(this.getElement());
        this.appBarTitle = document.getElementById('app-bar-title');
        this.appNavIcon = document.getElementById('app-nav-icon');
        this.buttonFile = document.getElementById('button-file');
        this.buttonEdit = document.getElementById('button-edit');
        this.buttonSearch = document.getElementById('button-search');
        this.buttonCode = document.getElementById('button-code');
        this.buttonView = document.getElementById('button-view');
        this.buttonExtensions = document.getElementById('button-extensions');
        this.buttonHelp = document.getElementById('button-help');
    }

    initialize() {
        this.topAppBar.setScrollTarget(
            document.getElementById('editor-container')
        );
        const options = {passive: true};
        this.topAppBar.listen(
            'MDCTopAppBar:nav',
            () => document.dispatchEvent(new ToggleDrawerEvent()),
            options
        );
        this.buttonFile.addEventListener(
            'click',
            () => this.openMenu('file'),
            options
        );
        this.buttonEdit.addEventListener(
            'click',
            () => this.openMenu('edit'),
            options
        );
        this.buttonSearch.addEventListener(
            'click',
            () => this.openMenu('search'),
            options
        );
        this.buttonCode.addEventListener(
            'click',
            () => this.openMenu('code'),
            options
        );
        this.buttonView.addEventListener(
            'click',
            () => this.openMenu('view'),
            options
        );
        this.buttonExtensions.addEventListener(
            'click',
            () => this.openMenu('extensions'),
            options
        );
        this.buttonHelp.addEventListener(
            'click',
            () => this.openMenu('help'),
            options
        );
        document.addEventListener(
            'AppBar:change', event => this.onChange(event), options
        );
        document.addEventListener(
            'MenuButton:change', event => this.onChange(event), options
        );
    }

    onChange(event) {
        if (event.detail.index !== undefined) {
            const index = event.detail.index;
            const titleData = {
                title: this.core.getDisplayName(index),
                options: {
                    modified: !this.core.isClean(index),
                    read_only: this.core.isReadOnly(index),
                }
            };
            this.setTitle(this.buildTitle(titleData));
        }
        if (event.detail.style) {
            this.updateButtons(event.detail.style);
        }
    }

    getElement() {
        return document.getElementById('app-bar');
    }

    openMenu(name) {
        let menu = this.core.getMenu(name);
        if (menu && !menu.isOpen()) {
            menu.toggle();
        }
    }

    buildTitle(titleData) {
        const res = new Res();
        let textContent = titleData.title;
        if (true) {
            let status = [];
            if (titleData.options.modified) {
                status.push(res.strings.modified);
            }
            if (titleData.options.read_only) {
                status.push(res.strings.read_only);
            }
            const s = status.join(', ');
            if (s) {
                textContent += ` (${s})`;
            }
        }
        return textContent;
    }

    setTitle(title) {
        this.appBarTitle.textContent = title;
    }

    blur() {
        this.getElement().blur();
    }

    updateButtons(style) {
        const res = new Res();
        const materialHelper = new MaterialHelper();
        [
            {
                label: res.buttons.file,
                button: this.buttonFile,
                icon: 'folder'
            },
            {
                label: res.buttons.edit,
                button: this.buttonEdit,
                icon: 'edit'
            },
            {
                label: res.buttons.search,
                button: this.buttonSearch,
                icon: 'search'
            },
            {
                label: res.buttons.code,
                button: this.buttonCode,
                icon: 'code'
            },
            {
                label: res.buttons.view,
                button: this.buttonView,
                icon: 'pageview'
            },
            {
                label: res.buttons.extensions,
                button: this.buttonExtensions,
                icon: 'extension'
            },
            {
                label: res.buttons.help,
                button: this.buttonHelp,
                icon: 'help'
            },
        ]
        .forEach(item => {
            materialHelper.removeChildren(item.button);
            item.button.appendChild(materialHelper.buttonRipple());
            switch (style) {
                case res.menu_button[0].value:
                    item.button.appendChild(
                        materialHelper.buttonIcon(item.icon)
                    );
                    item.button.appendChild(
                        materialHelper.buttonLabel(item.label)
                    );
                    break;
                case res.menu_button[1].value:
                    item.button.appendChild(
                        materialHelper.buttonLabel(item.label)
                    );
                    break;
                case res.menu_button[2].value:
                    item.button.appendChild(materialHelper.icon(item.icon));
                    break;
                default:
                    break;
            }
            item.button.appendChild(materialHelper.buttonTouch());
        });
    }
}
