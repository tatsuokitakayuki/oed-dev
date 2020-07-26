import {FocusEditorEvent} from '/focus_editor_event.js';
import {MaterialHelper} from '/material_helper.js';
import {Res} from '/res.js';
import {StatusHelper} from '/status_helper.js';
import {ToggleDrawerEvent} from '/toggle_drawer_event.js';

export class AppBar {
    constructor(core) {
        this.core = core;
        this.topAppBar = new mdc.topAppBar.MDCTopAppBar(this.getElement());
        this.appBarTitle = document.getElementById('app-bar-title');
        this.appNavIcon = document.getElementById('app-nav-icon');
        const res = new Res();
        this.menuButtons = [
            {
                label: res.buttons.file,
                button: document.getElementById('button-file'),
                icon: 'folder'
            },
            {
                label: res.buttons.edit,
                button: document.getElementById('button-edit'),
                icon: 'edit'
            },
            {
                label: res.buttons.search,
                button: document.getElementById('button-search'),
                icon: 'search'
            },
            {
                label: res.buttons.code,
                button: document.getElementById('button-code'),
                icon: 'code'
            },
            {
                label: res.buttons.view,
                button: document.getElementById('button-view'),
                icon: 'pageview'
            },
            {
                label: res.buttons.extensions,
                button: document.getElementById('button-extensions'),
                icon: 'extension'
            },
            {
                label: res.buttons.help,
                button: document.getElementById('button-help'),
                icon: 'help'
            },
        ];
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
        this.menuButtons[0].button.addEventListener(
            'click',
            () => this.openMenu('file'),
            options
        );
        this.menuButtons[1].button.addEventListener(
            'click',
            () => this.openMenu('edit'),
            options
        );
        this.menuButtons[2].button.addEventListener(
            'click',
            () => this.openMenu('search'),
            options
        );
        this.menuButtons[3].button.addEventListener(
            'click',
            () => this.openMenu('code'),
            options
        );
        this.menuButtons[4].button.addEventListener(
            'click',
            () => this.openMenu('view'),
            options
        );
        this.menuButtons[5].button.addEventListener(
            'click',
            () => this.openMenu('extensions'),
            options
        );
        this.menuButtons[6].button.addEventListener(
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
            this.setTitle(this.buildTitle(event.detail.index));
        }
        if (event.detail.style) {
            this.updateButtons(event.detail.style);
        }
        if (event.detail.name && event.detail.enabled != undefined) {
            this.enableButton(event.detail.name, event.detail.enabled);
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

    buildTitle(index) {
        const res = new Res();
        let textContent = this.core.getDisplayName(index);
        const statusHelper = new StatusHelper();
        textContent += ' ' + statusHelper.buildTitleAdditionalText(this.core.getEditor());
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
        this.menuButtons.forEach(item => {
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

    enableButton(name, enabled) {
        const button = document.getElementById('button-' + name);
        if (enabled) {
            button.removeAttribute('disabled');
        } else {
            button.setAttribute('disabled', 'disabled');
        }
    }
}
