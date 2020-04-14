import {Res} from '/res.js';
import {UIHelper} from '/ui_helper.js';

export class AppBar extends UIHelper {

    constructor(core) {
        super();
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
        this.tabindexList = [
            this.appNavIcon,
            this.buttonFile,
            this.buttonEdit,
            this.buttonSearch,
            this.buttonView,
            this.buttonExtensions,
            this.buttonHelp,
        ];
    }

    initialize() {
        this.topAppBar.setScrollTarget(document.getElementById('editor'));
        const options = {passive: true};
        this.topAppBar.listen('MDCTopAppBar:nav', () => this.onNavIcon(), options);
        this.buttonFile.addEventListener('click', () => this.onClickButton('menu-file'), options);
        this.buttonEdit.addEventListener('click', () => this.onClickButton('menu-edit'), options);
        this.buttonSearch.addEventListener('click', () => this.onClickButton('menu-search'), options);
        this.buttonCode.addEventListener('click', () => this.onClickButton('menu-code'), options);
        this.buttonView.addEventListener('click', () => this.onClickButton('menu-view'), options);
        this.buttonExtensions.addEventListener('click', () => this.onClickButton('menu-extensions'), options);
        this.buttonHelp.addEventListener('click', () => this.onClickButton('menu-help'), options);
        document.addEventListener('AppBar:change', event => this.onChange(event), options);
    }

    onNavIcon() {
        this.core.toggleFileList();
    }

    onClickButton(id) {
        switch (id) {
            case 'menu-file':
                this.core.toggleFileMenu();
                break;
            case 'menu-edit':
                this.core.toggleEditMenu();
                break;
            case 'menu-search':
                this.core.toggleSearchMenu();
                break;
            case 'menu-code':
                this.core.toggleCodeMenu();
                break;
            case 'menu-view':
                this.core.toggleViewMenu();
                break;
            case 'menu-extensions':
                this.core.toggleExtensionsMenu();
                break;
            case 'menu-help':
                this.core.toggleHelpMenu();
                break;
            default:
                break;
        }
        if (!this.core.isOpen(id)) {
            this.core.focusEditor();
        }
    }

    onChange(event) {
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

    getElement() {
        return document.getElementById('app-bar');
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
}
