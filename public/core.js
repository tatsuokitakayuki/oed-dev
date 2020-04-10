import {AppBar} from '/app_bar.js';
import {AppView} from '/app_view.js';
import {ChangeDrawerItemEvent} from '/change_drawer_item_event.js';
import {ChangeViewEvent} from '/change_view_event.js';
import {DialogConfirm} from '/dialog_confirm.js';
import {DialogCursorStyle} from '/dialog_cursor_style.js';
import {DialogFileDecoding} from '/dialog_file_decoding.js';
import {DialogFirstLineNumber} from '/dialog_first_line_number.js';
import {DialogFoldStyle} from '/dialog_fold_style.js';
import {DialogFontFamily} from '/dialog_font_family.js';
import {DialogFontSize} from '/dialog_font_size.js';
import {DialogKeybinding} from '/dialog_keybinding.js';
import {DialogMergeUndoDeltas} from '/dialog_merge_undo_deltas.js';
import {DialogLanguageMode} from '/dialog_language_mode.js';
import {DialogNewLineMode} from '/dialog_new_line_mode.js';
import {DialogPrintMarginColumn} from '/dialog_print_margin_column.js';
import {DialogScrollPastEnd} from '/dialog_scroll_past_end.js';
import {DialogSelectFile} from '/dialog_select_file.js';
import {DialogTabSize} from '/dialog_tab_size.js';
import {DialogTheme} from '/dialog_theme.js';
import {DialogWrap} from '/dialog_wrap.js';
import {Drawer} from '/drawer.js';
import {FileManager} from '/file_manager.js';
import {Keybinding} from '/keybinding.js';
import {MenuCode} from '/menu_code.js'; 
import {MenuEdit} from '/menu_edit.js'; 
import {MenuExtensions} from '/menu_extensions.js'; 
import {MenuFile} from '/menu_file.js'; 
import {MenuHelp} from '/menu_help.js'; 
import {MenuSearch} from '/menu_search.js'; 
import {MenuView} from '/menu_view.js'; 
import {Options} from '/options.js';
import {Res} from '/res.js';
import {Snackbar} from '/snackbar.js';

export class Core {

    constructor() {
        this.editor = ace.edit('editor');
        this.appView = new AppView(this);
        this.appBar = new AppBar(this);
        this.drawer = new Drawer(this);
        this.menuFile = new MenuFile(this);
        this.menuEdit = new MenuEdit(this);
        this.menuSearch = new MenuSearch(this);
        this.menuCode = new MenuCode(this);
        this.menuView = new MenuView(this);
        this.menuExtensions = new MenuExtensions(this);
        this.menuHelp = new MenuHelp(this);
        this.options = new Options(this);
        this.snackbar = new Snackbar(this);
        this.fileManager = new FileManager(this);
        this.keybinding = new Keybinding(this);
        this.menuList = [
            {id: 'menu-file', exec: () => this.toggleFileMenu()},
            {id: 'menu-edit', exec: () => this.toggleEditMenu()},
            {id: 'menu-search', exec: () => this.toggleSearchMenu()},
            {id: 'menu-code', exec: () => this.toggleCodeMenu()},
            {id: 'menu-view', exec: () => this.toggleViewMenu()},
            {id: 'menu-extensions', exec: () => this.toggleExtensionsMenu()},
            {id: 'menu-help', exec: () => this.toggleHelpMenu()},
        ];
    }

    async initializeA() {
        window.addEventListener('beforeunload', event => {
            if (!this.isSafe()) {
                event.preventDefault();
                event.returnValue = '';
            }
        });
        this.appView.initialize();
        document.addEventListener(
            'Editor:changeoption',
            event => {
                switch (event.detail.name) {
                    case 'fontSize':
                        this.getEditor().setOption(event.detail.name, event.detail.value);
                        document.getElementById('editor').style.fontSize = event.detail.value;
                        break;
                    case 'fileDecoding':
                        this.getOedOptions().fileDecoding = event.detail.value;
                        break;
                    case 'keybinding':
                        this.getOedOptions().keybinding = event.detail.value;
                        this.setKeybinding(event.detail.value);
                        break;
                    default:
                        this.getEditor().setOption(event.detail.name, event.detail.value);
                        break;
                }
            },
            {passive: true}
        );
        await this.newFileA();
        await this.options.initializeA(this);
        this.keybinding.initialize();
        this.editor.on('change', event => this.onChange(event));
        document.getElementById('editor')
            .addEventListener(
                'keyup', event => this.onChange(event), {passive: true}
            );
        this.appBar.initialize();
        this.drawer.initialize();
        this.snackbar.initialize();
        this.menuFile.initialize();
        this.menuEdit.initialize();
        this.menuSearch.initialize();
        this.menuCode.initialize();
        this.menuView.initialize();
        this.menuExtensions.initialize();
        this.menuHelp.initialize();
        const appView = document.getElementById('app-view');
        appView.addEventListener('dragover', event => this.onDragOver(event), false);
        appView.addEventListener('drop', event => this.onDropA(event), false);
        this.focusEditor();
        this.helloOed();
        this.setWindowTitle();
        document.dispatchEvent(
            new ChangeViewEvent(
                0, 0, {editor: true, draweritem: true, appbar: true}
            )
        );
    }

    onChange(event) {
        const index = this.getActive();
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: false, draweritem: true, appbar: true}
            )
        );
    }

    onDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    }

    async onDropA(event) {
        event.stopPropagation();
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files) {
            await this.openFileA(files);
        }
    }

    getEditor() {
        return this.editor;
    }

    getEditorSession() {
        return this.getEditor().session;
    }

    getOption(name) {
        let optionValue = '';
        switch (name) {
            case 'fileDecoding':
                optionValue = this.getOedOptions().fileDecoding;
                break;
            case 'keybinding':
                optionValue = this.getOedOptions().keybinding;
                break;
            default:
                optionValue = this.getEditor().getOption(name);
                break;
        }
        return optionValue;
    }

    getActive() {
        return this.fileManager.active;
    }

    getLength() {
        return this.fileManager.list.length;
    }

    getEditSession(index) {
        return this.fileManager.getEditSession(index);
    }

    getName(index) {
        return this.fileManager.getName(index);
    }

    getDisplayName(index) {
        return this.fileManager.getDisplayName(index);
    }

    getUrl(index) {
        return this.fileManager.getUrl(index);
    }

    getTime(index) {
        return this.fileManager.getTime(index);
    }

    findIndex(href) {
        return this.fileManager.findIndex(href);
    }

    isReadOnly(index) {
        return this.fileManager.isReadOnly(index);
    }

    isEmptyFile(index) {
        return this.fileManager.isEmptyFile(index);
    }

    isCoreFile(index) {
        return this.fileManager.isCoreFile(index);
    }

    isSafe() {
        return this.fileManager.list.every(item => item.isClean());
    }

    hasUndo(index) {
        return this.fileManager.hasUndo(index);
    }

    isClean(index) {
        return this.fileManager.isClean(index);
    }

    getOedOptions() {
        return this.options.getOedOptions();
    }

    isHello() {
        return this.getOedOptions().hello;
    }

    getDrawer() {
        return this.drawer.drawer;
    }

    isOpen(id) {
        switch (id) {
            case 'drawer-file-list':
                return this.drawer.isOpen();
            case 'menu-file':
                return this.menuFile.isOpen();
            case 'menu-edit':
                return this.menuEdit.isOpen();
            case 'menu-search':
                return this.menuSearch.isOpen();
            case 'menu-code':
                return this.menuCode.isOpen();
            case 'menu-view':
                return this.menuView.isOpen();
            case 'menu-extensions':
                return this.menuExtensions.isOpen();
            case 'menu-help':
                return this.menuHelp.isOpen();
            default:
                return false;
        }
    }

    setName(index, name) {
        this.fileManager.setName(index, name);
    }

    setDisplayName(index, displayName) {
        this.fileManager.setDisplayName(index, displayName);
    }

    setUrl(url, index) {
        this.fileManager.setUrl(url, index);
    }

    setReadOnly(readOnly, index) {
        this.fileManager.setReadOnly(readOnly, index);
    }

    setUntitledName(index) {
        this.fileManager.setUntitledName(index);
    }

    setKeybinding(name) {
        let value = null;
        if (name && name !== 'Ace') {
            value = 'ace/keyboard/' + name.toLowerCase();
        }
        this.editor.setKeyboardHandler(value);
    }

    setHello(hello) {
        this.getOedOptions().hello = hello;
    }

    saveEditorOptions() {
        this.options.saveEditorOptions(this.getEditor());
    }

    saveRendererOptions() {
        this.options.saveRendererOptions(this.getEditor());
    }

    saveSessionOptions() {
        this.options.saveSessionOptions(this.getEditorSession());
    }

    saveExtensionsOptions() {
        this.options.saveExtensionsOptions(this.getEditor());
    }

    saveOedOptions() {
        this.options.saveOedOptions();
    }

    dropFileData(index) {
        this.fileManager.dropFileData(index);
    }

    helloOed() {
        if (this.isHello()) {
            return;
        }
        const res = new Res();
        this.editor.insert(res.strings.hello);
        this.setHello(true);
        this.saveOedOptions();
    }

    setWindowTitle() {
        let channel = document.domain;
        if (document.domain == 'oed-dev.web.app') {
            channel = 'official dev channel';
        }
        if (document.domain == 'oed-stable.web.app') {
            channel = 'official stable channel';
        }
        document.title = `OED [${channel}]`;
    }

    buildTitle(titleData) {
        const res = new Res();
        let textContent = titleData.title;
        if (titleData.modified) {
            textContent += ' ' + res.titles.modified;
        }
        if (titleData.readOnly) {
            textContent += ' ' + res.titles.readOnly;
        }
        return textContent;
    }

    updateEditSession(index) {
        this.fileManager.updateEditSession(index, this.getEditorSession());
    }

    async createFileDataA() {
        let index = this.getActive();
        if (index == -1 || !this.isEmptyFile(index)) {
            index = this.fileManager.createFileData();
        }
        await this.options.initializeSessionOptionsA(this.getEditSession(index));
        return index;
    }

    async newFileA() {
        if (this.getLength()) {
            document.dispatchEvent(
                new ChangeDrawerItemEvent(this.getActive(), -1)
            );
        }
        const index = await this.createFileDataA();
        this.setUntitledName(index);
        this.updateEditSession(index);
        if (!this.drawer.hasItem(index)) {
            this.drawer.addItem(index, index);
        }
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: true, draweritem: true, appbar: true}
            )
        );
    }

    async openFileA(files) {
        const oldIndex = this.getActive();
        let index = oldIndex;
        document.dispatchEvent(new ChangeDrawerItemEvent(index, -1));
        for (let i = 0; i < files.length; i++) {
            index = await this.createFileDataA();
            const result = await this.fileManager.openFileA(files[i], index);
            if (result.success) {
                this.updateEditSession(index);
                if (oldIndex != index) {
                    this.drawer.addItem(index, -1);
                } else {
                    document.dispatchEvent(new ChangeDrawerItemEvent(index, -1));
                }
            } else {
                this.dropFileData(index);
            }
            document.dispatchEvent(
                new ChangeViewEvent(
                    index, -1, {editor: true, draweritem: true, appbar: true}
                )
            );
        }
        document.dispatchEvent(new ChangeDrawerItemEvent(index, index));
    }

    async openSelectFileA() {
        const dialogSelectFile = new DialogSelectFile();
        const files = await dialogSelectFile.openA(true);
        this.focusEditor();
        if (files) {
            await this.openFileA(files);
        }
    }

    downloadFile(index) {
        const url = this.getUrl(index);
        const res = new Res();
        if (url.pathname.includes('/' + res.dirs.res + '/')) {
            this.renameFile(index, () => this.getEditor().execCommand('oedDownloadFile'), null);
            return;
        }
        this.fileManager.downloadFile(index);
        this.fileManager.markClean(index);
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: true, draweritem: true, appbar: true}
            )
        );
    }

    renameFile(index, callback, args) {
        if (this.isCoreFile(index)) {
            return;
        }
        const result = this.fileManager.renameFile(index, callback);
        this.focusEditor();
        if (result) {
            document.dispatchEvent(
                new ChangeViewEvent(
                    index, index, {editor: true, draweritem: true, appbar: true}
                )
            );
        }
    }

    async closeFileA(index) {
        if (!this.isCoreFile(index) && !this.isClean(index)) {
            const res = new Res();
            const dialogConfirm = new DialogConfirm();
            dialogConfirm.open(
                res.titles.close_file,
                res.strings.confirm_close_file
                    .replace('$filename$', this.getName(index)),
                args => this.closeFileCallbackA(args),
                {index: index}
            );
            this.focusEditor();
        } else {
            await this.closeFileCallbackA({index: index});
        }
    }

    async closeFileCallbackA(args) {
        this.updateEditSession(args.index);
        this.dropFileData(args.index);
        this.drawer.removeItem(args.index);
        if (!this.getLength()) {
            await this.newFileA();
        }
        const index = this.getActive();
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: true, draweritem: true, appbar: true}
            )
        );
    }

    async openUrlA(url, index) {
        return await this.fileManager.openUrlA(url, index);
    }

    async openCoreFileA(coreName) {
        let index = this.getActive();
        document.dispatchEvent(new ChangeDrawerItemEvent(index, -1));
        const res = new Res();
        index = this.findIndex(
            new URL(res.protocols.oed + '//' +
                res.hosts.edit_session + '/' +
                res.dirs.res + '/' + coreName
            ).href
        );
        if (index != -1) {
            this.updateEditSession(index);
            document.dispatchEvent(new ChangeDrawerItemEvent(index, index));
        } else {
            index = await this.createFileDataA();
            const filename = coreName + '.md';
            const url = new URL('/res/' + filename, window.location.href);
            const result = await this.openUrlA(url, index);
            if (result.success) {
                this.setName(index, filename);
                this.setDisplayName(index, coreName);
                this.setUrl(
                    new URL(
                        res.protocols.oed + '//' +
                        res.hosts.edit_session + '/' +
                        res.dirs.res + '/' + coreName
                    ),
                    index
                );
                this.setReadOnly(true, index);
                this.updateEditSession(index);
                if (this.drawer.hasItem(index)) {
                    document.dispatchEvent(new ChangeDrawerItemEvent(index, index));
                } else {
                    this.drawer.addItem(index, index);
                }
            } else {
                this.dropFileData(index);
                index = -1;
            }
        }
    }

    async cacheListA() {
        const res = new Res();
        await this.openCoreFileA(res.files.cache_list);
        const index = this.getActive();
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: true, draweritem: true, appbar: true}
            )
        );
    }

    async changeLogA() {
        const res = new Res();
        await this.openCoreFileA(res.files.change_log);
        const index = this.getActive();
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: true, draweritem: true, appbar: true}
            )
        );
    }

    async aboutA() {
        const res = new Res();
        await this.openCoreFileA(res.files.about);
        const index = this.getActive();
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: true, draweritem: true, appbar: true}
            )
        );
    }

    flipReadOnly(index) {
        const readOnly = !this.isReadOnly(index);
        this.setReadOnly(readOnly, index);
        return readOnly;
    }

    promptTabSize() {
        const dialogTabSize = new DialogTabSize(this);
        dialogTabSize.open();
    }

    selectTheme() {
        const dialogTheme = new DialogTheme(this);
        dialogTheme.open();
    }

    selectKeybinding() {
        const dialogKeybinding = new DialogKeybinding(this);
        dialogKeybinding.open();
    }

    promptFontSize() {
        const dialogFontSize = new DialogFontSize(this);
        dialogFontSize.open();
    }

    selectCursorStyle() {
        const dialogCursorStyle = new DialogCursorStyle(this);
        dialogCursorStyle.open();
    }

    selectMergeUndoDeltas() {
        const dialogMergeUndoDeltas = new DialogMergeUndoDeltas(this);
        dialogMergeUndoDeltas.open();
    }

    promptPrintMarginColumn() {
        const dialogPrintMarginColumn = new DialogPrintMarginColumn(this);
        dialogPrintMarginColumn.open();
    }

    selectScrollPastEnd() {
        const dialogScrollPastEnd = new DialogScrollPastEnd(this);
        dialogScrollPastEnd.open();
    }

    promptFontFamily() {
        const dialogFontFamily = new DialogFontFamily(this);
        dialogFontFamily.open();
    }

    selectWrap() {
        const dialogWrap = new DialogWrap(this);
        dialogWrap.open();
    }

    selectLanguageMode() {
        const dialogLanguageMode = new DialogLanguageMode(this);
        dialogLanguageMode.open();
    }

    selectFoldStyle() {
        const dialogFoldStyle = new DialogFoldStyle(this);
        dialogFoldStyle.open();
    }

    selectNewLineMode() {
        const dialogNewLineMode = new DialogNewLineMode(this);
        dialogNewLineMode.open();
    }

    promptFirstLineNumber() {
        const dialogFirstLineNumber = new DialogFirstLineNumber(this);
        dialogFirstLineNumber.open();
    }

    selectFileDecoding() {
        const dialogFileDecoding = new DialogFileDecoding(this);
        dialogFileDecoding.open();
    }

    idToName(id) {
        return id.replace(/-./gi, match => match.slice(1).toUpperCase());
    }

    nextFile() {
        let index = this.getActive();
        document.dispatchEvent(
            new ChangeViewEvent(
                index, -1, {editor: false, draweritem: true, appbar: false}
            )
        );
        index++;
        if (index >= this.getLength()) {
            index = 0;
        }
        this.updateEditSession(index);
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: true, draweritem: true, appbar: true}
            )
        );
    }

    previousFile() {
        let index = this.getActive();
        document.dispatchEvent(
            new ChangeViewEvent(
                index, -1, {editor: false, draweritem: true, appbar: false}
            )
        );
        index--;
        if (index < 0) {
            index = this.getLength() - 1;
        }
        this.updateEditSession(index);
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: true, draweritem: true, appbar: true}
            )
        );
    }

    toggleFileList() {
        this.drawer.toggle();
    }

    toggleFileMenu() {
        this.menuFile.updateMenuItems();
        this.menuFile.toggle();
        this.blurTopAppBer();
    }

    toggleEditMenu() {
        this.menuEdit.updateMenuItems();
        this.menuEdit.toggle();
        this.blurTopAppBer();
    }

    toggleSearchMenu() {
        this.menuSearch.updateMenuItems();
        this.menuSearch.toggle();
        this.blurTopAppBer();
    }

    toggleCodeMenu() {
        this.menuCode.updateMenuItems();
        this.menuCode.toggle();
        this.blurTopAppBer();
    }

    toggleViewMenu() {
        this.menuView.updateMenuItems();
        this.menuView.toggle();
        this.blurTopAppBer();
    }

    toggleExtensionsMenu() {
        this.menuExtensions.updateMenuItems();
        this.menuExtensions.toggle();
        this.blurTopAppBer();
    }

    toggleHelpMenu() {
        this.menuHelp.updateMenuItems();
        this.menuHelp.toggle();
        this.blurTopAppBer();
    }

    blurTopAppBer() {
        this.appBar.blur();
    }

    nextMenu(menuId) {
        let menuIndex = this.menuList
            .findIndex(toggleMenu => toggleMenu.id == menuId);
        menuIndex++;
        if (menuIndex >= this.menuList.length) {
            menuIndex = 0;
        }
        this.menuList[menuIndex].exec();
    }

    previousMenu(menuId) {
        let menuIndex = this.menuList
            .findIndex(toggleMenu => toggleMenu.id == menuId);
        menuIndex--;
        if (menuIndex < 0) {
            menuIndex = this.menuList.length - 1;
        }
        this.menuList[menuIndex].exec();
    }

    focusEditor() {
        this.editor.focus();
    }

    async exportOptionsA() {
        await this.options.exportOptionsA(this);
    }

    async importOptionsA() {
        await this.options.importOptionsA(this);
    }
}
