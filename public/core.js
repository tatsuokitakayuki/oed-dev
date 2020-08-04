import {AppBar} from '/app_bar.js';
import {AppView} from '/app_view.js';
import {ChangeDrawerItemEvent} from '/change_drawer_item_event.js';
import {ChangeMenuButtonEvent} from '/change_menu_button_event.js';
import {ChangeViewEvent} from '/change_view_event.js';
import {descriptions} from '/res/descriptions.js';
import {DialogConfirm} from '/dialog_confirm.js';
import {DialogCursorStyle} from '/dialog_cursor_style.js';
import {DialogFileDecoding} from '/dialog_file_decoding.js';
import {DialogFirstLineNumber} from '/dialog_first_line_number.js';
import {DialogFoldStyle} from '/dialog_fold_style.js';
import {DialogFontFamily} from '/dialog_font_family.js';
import {DialogFontSize} from '/dialog_font_size.js';
import {DialogKeyboardHandler} from '/dialog_keyboard_handler.js';
import {DialogLanguageMode} from '/dialog_language_mode.js';
import {DialogMenuButton} from '/dialog_menu_button.js';
import {DialogMergeUndoDeltas} from '/dialog_merge_undo_deltas.js';
import {DialogNewLineMode} from '/dialog_new_line_mode.js';
import {DialogPrintMarginColumn} from '/dialog_print_margin_column.js';
import {DialogRenameFile} from '/dialog_rename_file.js';
import {DialogScrollPastEnd} from '/dialog_scroll_past_end.js';
import {DialogSelectFile} from '/dialog_select_file.js';
import {DialogTabSize} from '/dialog_tab_size.js';
import {DialogTheme} from '/dialog_theme.js';
import {DialogWrap} from '/dialog_wrap.js';
import {Drawer} from '/drawer.js';
import {FileManager} from '/file_manager.js';
import {FocusEditorEvent} from '/focus_editor_event.js';
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
import {Statusbar} from '/statusbar.js';

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
        this.statusbar = new Statusbar();
        this.fileManager = new FileManager(this);
        this.keybinding = new Keybinding(this);
        this.menuList = [
            {
                id: 'menu-file',
                exec: () => document.getElementById('button-file').click()
            },
            {
                id: 'menu-edit',
                exec: () => document.getElementById('button-edit').click()
            },
            {
                id: 'menu-search',
                exec: () => document.getElementById('button-search').click()
            },
            {
                id: 'menu-code',
                exec: () => document.getElementById('button-code').click()
            },
            {
                id: 'menu-view',
                exec: () => document.getElementById('button-view').click()
            },
            {
                id: 'menu-extensions',
                exec: () => document.getElementById('button-extensions').click()
            },
            {
                id: 'menu-help',
                exec: () => document.getElementById('button-help').click()
            },
        ];
    }

    async initializeA() {
        window.addEventListener(
            'beforeunload', event => this.onBeforeUnload(event)
        );
        this.appView.initialize();
        document.addEventListener(
            'OED:focuseditor',
            event => this.onFocusEditor(event),
            {passive: true}
        );
        document.addEventListener(
            'Editor:changeoption',
            event => this.onChangeOption(event),
            {passive: true}
        );
        await this.newFileA();
        await this.options.initializeA(this);
        this.keybinding.initialize(this.getEditor());
        this.getEditor().on('focus', editor => this.onChangeEditor(editor));
        this.getEditor().on(
            'changeStatus', editor => this.onChangeEditor(editor)
        );
        this.getEditor().on(
            'changeSelection', editor => this.onChangeEditor(editor)
        );
        this.getEditor().on(
            'keyboardActivity', editor => this.onChangeEditor(editor)
        );
        this.appBar.initialize();
        this.drawer.initialize();
        this.snackbar.initialize();
        this.statusbar.initialize();
        this.menuFile.initialize();
        this.menuEdit.initialize();
        this.menuSearch.initialize();
        this.menuCode.initialize();
        this.menuView.initialize();
        this.menuExtensions.initialize();
        this.menuHelp.initialize();
        const appView = document.getElementById('app-view');
        appView.addEventListener(
            'dragover', event => this.onDragOver(event), false
        );
        appView.addEventListener('drop', event => this.onDropA(event), false);
        document.dispatchEvent(new FocusEditorEvent(this.getEditor()));
        this.helloOed();
        this.setWindowTitle();
        document.dispatchEvent(new ChangeViewEvent(0, 0, {all: true}));
        document.dispatchEvent(
            new ChangeMenuButtonEvent({style: this.getOption('menuButton')})
        );
    }

    onBeforeUnload(event) {
        if (!this.isSafe()) {
            event.preventDefault();
            event.returnValue = '';
        }
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

    onChangeEditor(editor) {
        const index = this.getActive();
        if (index != -1) {
            document.dispatchEvent(
                new ChangeViewEvent(
                    index, index,
                    {draweritem: true, appbar: true, statusbar: true}
                )
            );
        }
    }

    onChangeOption(event) {
        let name = event.detail.name;
        let value = event.detail.value;
        switch (name) {
            case 'fontSize':
                this.getEditor().setOption(name, value);
                document.getElementById('editor').style.fontSize = value;
                break;
            case 'fontFamily':
                if (!value) {
                    value = 'monospace';
                }
                this.getEditor().setOption(name, value);
                break;
            case 'fileDecoding':
                this.getOedOptions().fileDecoding = value;
                break;
            case 'keyboardHandler':
                this.getOedOptions().keyboardHandler = value;
                this.setKeyboardHandler(value);
                break;
            case 'menuButton':
                this.getOedOptions().menuButton = value;
                document.dispatchEvent(
                    new ChangeMenuButtonEvent({style: value})
                );
                break;
            case 'theme':
                this.getEditor().setOption(name, value);
                document.dispatchEvent(
                    new ChangeViewEvent(-1, -1, {theme:true})
                );
                break;
            default:
                this.getEditor().setOption(name, value);
                break;
        }
    }

    onFocusEditor(event) {
        if (!event.detail.editor) {
            event.detail.editor = this.getEditor();
        }
        event.detail.editor.focus();
    }

    getMenu(name) {
        switch (name) {
            case 'file':
                return this.menuFile;
            case 'edit':
                return this.menuEdit;
            case 'search':
                return this.menuSearch;
            case 'code':
                return this.menuCode;
            case 'view':
                return this.menuView;
            case 'extensions':
                return this.menuExtensions;
            case 'help':
                return this.menuHelp;
            default:
                return null;
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
            case 'keyboardHandler':
                optionValue = this.getOedOptions().keyboardHandler;
                break;
            case 'menuButton':
                optionValue = this.getOedOptions().menuButton;
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

    setUrl(index, url) {
        this.fileManager.setUrl(index, url);
    }

    setReadOnly(index, readOnly) {
        this.fileManager.setReadOnly(index, readOnly);
    }

    setUntitledName(index) {
        this.fileManager.setUntitledName(index);
    }

    setKeyboardHandler(name) {
        let value = null;
        if (name && name !== 'Ace') {
            value = 'ace/keyboard/' + name.toLowerCase();
        }
        this.getEditor().setKeyboardHandler(value);
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
        this.getEditor().insert(res.strings.hello);
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

    updateEditSession(index) {
        this.fileManager.updateEditSession(index, this.getEditorSession());
    }

    async createFileDataA() {
        let index = this.getActive();
        if (index == -1 || !this.isEmptyFile(index)) {
            index = this.fileManager.createFileData();
        }
        await this.options.initializeSessionOptionsA(
            this.getEditSession(index)
        );
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
        document.dispatchEvent(new ChangeViewEvent(index, index, {all: true}));
    }

    async openFileA(files) {
        const oldIndex = this.getActive();
        let index = oldIndex;
        document.dispatchEvent(new ChangeDrawerItemEvent(index, -1));
        for (let i = 0; i < files.length; i++) {
            index = await this.createFileDataA();
            const result = await this.fileManager.openFileA(index, files[i]);
            if (result.success) {
                this.updateEditSession(index);
                if (oldIndex != index) {
                    this.drawer.addItem(index, -1);
                } else {
                    document.dispatchEvent(
                        new ChangeDrawerItemEvent(index, -1)
                    );
                }
            } else {
                this.dropFileData(index);
            }
            document.dispatchEvent(new ChangeViewEvent(index, -1, {all: true}));
        }
        document.dispatchEvent(new ChangeDrawerItemEvent(index, index));
    }

    async openSelectFileA() {
        document.dispatchEvent(new FocusEditorEvent(this.getEditor()));
        const dialogSelectFile = new DialogSelectFile();
        const files = await dialogSelectFile.openA(true);
        if (files) {
            await this.openFileA(files);
        }
    }

    downloadFile(index) {
        const url = this.getUrl(index);
        const res = new Res();
        if (url.pathname.includes('/' + res.dirs.res + '/')) {
            this.renameFile(
                index, () => this.getEditor().execCommand('oedDownloadFile'), {}
            );
            return;
        }
        this.fileManager.downloadFile(index);
        this.fileManager.markClean(index);
        document.dispatchEvent(new ChangeViewEvent(index, index, {all: true}));
    }

    renameFile(index, callback, args) {
        if (this.isCoreFile(index)) {
            return;
        }
        this.fileManager.addEventListener();
        const dialogRenameFile = new DialogRenameFile(
            this.getName(index), callback, args
        );
        dialogRenameFile.open();
    }

    async closeFileA(index) {
        if (!this.isCoreFile(index) && !this.isClean(index)) {
            const res = new Res();
            const dialogConfirm = new DialogConfirm();
            dialogConfirm.open(
                descriptions.CLOSE_FILE,
                res.strings.confirm_close_file
                    .replace('$filename$', this.getName(index)),
                args => this.closeFileCallbackA(args),
                {index: index}
            );
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
        document.dispatchEvent(new ChangeViewEvent(index, index, {all: true}));
        document.dispatchEvent(new FocusEditorEvent(this.getEditor()));
    }

    async openUrlA(index, url) {
        return await this.fileManager.openUrlA(index, url);
    }

    async openCoreFileA(coreName) {
        let index = this.getActive();
        document.dispatchEvent(new ChangeDrawerItemEvent(index, -1));
        const res = new Res();
        const coreFileUrl = new URL(res.protocols.oed + '//' +
            res.hosts.edit_session + '/' +
            res.dirs.res + '/' + coreName
        );
        index = this.findIndex(coreFileUrl.href);
        if (index != -1) {
            this.updateEditSession(index);
            document.dispatchEvent(new ChangeDrawerItemEvent(index, index));
        } else {
            index = await this.createFileDataA();
            const filename = coreName + '.md';
            const url = new URL('/res/' + filename, window.location.href);
            const result = await this.openUrlA(index, url);
            if (result.success) {
                this.setName(index, filename);
                this.setDisplayName(index, coreName);
                this.setUrl(index, coreFileUrl);
                this.setReadOnly(index, true);
                this.updateEditSession(index);
                if (this.drawer.hasItem(index)) {
                    document.dispatchEvent(
                        new ChangeDrawerItemEvent(index, index)
                    );
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
        document.dispatchEvent(new ChangeViewEvent(index, index, {all: true}));
    }

    async changeLogA() {
        const res = new Res();
        await this.openCoreFileA(res.files.change_log);
        const index = this.getActive();
        document.dispatchEvent(new ChangeViewEvent(index, index, {all: true}));
    }

    async openSourceLisenceA() {
        const res = new Res();
        await this.openCoreFileA(res.files.open_source_lisence);
        const index = this.getActive();
        document.dispatchEvent(new ChangeViewEvent(index, index, {all: true}));
    }

    async aboutA() {
        const res = new Res();
        await this.openCoreFileA(res.files.about);
        const index = this.getActive();
        document.dispatchEvent(new ChangeViewEvent(index, index, {all: true}));
    }

    flipReadOnly(index) {
        const readOnly = !this.isReadOnly(index);
        this.setReadOnly(index, readOnly);
        return readOnly;
    }

    promptTabSize() {
        const dialogTabSize = new DialogTabSize(this.getOption('tabSize'));
        dialogTabSize.open();
    }

    selectTheme() {
        const dialogTheme = new DialogTheme(this.getOption('theme'));
        dialogTheme.open();
    }

    selectKeyboardHandler() {
        const dialogKeyboardHandler = new DialogKeyboardHandler(
            this.getOption('keyboardHandler')
        );
        dialogKeyboardHandler.open();
    }

    selectMenuButton() {
        const dialogMenuButton = new DialogMenuButton(
            this.getOption('menuButton')
        );
        dialogMenuButton.open();
    }

    promptFontSize() {
        const dialogFontSize = new DialogFontSize(
            this.getOption('fontSize')
        );
        dialogFontSize.open();
    }

    selectCursorStyle() {
        const dialogCursorStyle = new DialogCursorStyle(
            this.getOption('cursorStyle')
        );
        dialogCursorStyle.open();
    }

    selectMergeUndoDeltas() {
        const dialogMergeUndoDeltas = new DialogMergeUndoDeltas(
            this.getOption('mergeUndoDeltas')
        );
        dialogMergeUndoDeltas.open();
    }

    promptPrintMarginColumn() {
        const dialogPrintMarginColumn = new DialogPrintMarginColumn(
            this.getOption('printMarginColumn')
        );
        dialogPrintMarginColumn.open();
    }

    selectScrollPastEnd() {
        const dialogScrollPastEnd = new DialogScrollPastEnd(
            this.getOption('scrollPastEnd')
        );
        dialogScrollPastEnd.open();
    }

    promptFontFamily() {
        const dialogFontFamily = new DialogFontFamily(
            this.getOption('fontFamily')
        );
        dialogFontFamily.open();
    }

    selectWrap() {
        const dialogWrap = new DialogWrap(this.getOption('wrap'));
        dialogWrap.open();
    }

    selectLanguageMode() {
        const dialogLanguageMode = new DialogLanguageMode(
            this.getOption('mode')
        );
        dialogLanguageMode.open();
    }

    selectFoldStyle() {
        const dialogFoldStyle = new DialogFoldStyle(
            this.getOption('foldStyle')
        );
        dialogFoldStyle.open();
    }

    selectNewLineMode() {
        const dialogNewLineMode = new DialogNewLineMode(
            this.getOption('newLineMode')
        );
        dialogNewLineMode.open();
    }

    promptFirstLineNumber() {
        const dialogFirstLineNumber = new DialogFirstLineNumber(
            this.getOption('firstLineNumber')
        );
        dialogFirstLineNumber.open();
    }

    selectFileDecoding() {
        const dialogFileDecoding = new DialogFileDecoding(
            this.getOption('fileDecoding')
        );
        dialogFileDecoding.open();
    }

    idToName(id) {
        return id.replace(
            /-./gi, match => match.slice(1).toUpperCase()
        ).replace('Ime', 'IME');
    }

    selectFile(index) {
        if (index >= this.getLength() || index < 0) {
            return;
        }
        document.dispatchEvent(
            new ChangeViewEvent(
                this.getActive(), -1, {draweritem: true}
            )
        );
        this.updateEditSession(index);
        document.dispatchEvent(new ChangeViewEvent(index, index, {all: true}));
    }

    nextFile() {
        let index = this.getActive() + 1;
        if (index >= this.getLength()) {
            index = 0;
        }
        this.selectFile(index);
    }

    previousFile() {
        let index = this.getActive() - 1;
        if (index < 0) {
            index = this.getLength() - 1;
        }
        this.selectFile(index);
    }

    lastFile() {
        this.selectFile(this.getLength() - 1);
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

    async exportOptionsA() {
        await this.options.exportOptionsA(this);
    }

    async importOptionsA() {
        document.dispatchEvent(new FocusEditorEvent(this.getEditor()));
        await this.options.importOptionsA(this);
    }
}
