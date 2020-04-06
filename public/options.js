import {CacheManager} from '/cache_manager.js';
import {DialogSelectFile} from '/dialog_select_file.js';
import {FileHelper} from '/file_helper.js';

export class Options {

    constructor() {
        this.oed = this.getDefaultOedOptions();
    }

    async initializeA(core) {
        await this.initializeOedOptionsA(core);
        await this.initializeEditorOptionsA(core.editor);
        await this.initializeRendererOptionsA(core.editor);
        await this.initializeSessionOptionsA(core.editor.session);
        await this.initializeExtensionsOptionsA(core.editor);
    }

    getDefaultEditorOptions() {
        return {
            autoScrollEditorIntoView: false,    // true|[false]
            behavioursEnabled: true,            // [true]|false
            copyWithEmptySelection: false,      // true|[false]
            cursorStyle: 'ace',                 // ["ace"]|"slim"|"smooth"|"wide"
            enableLinking: true,                // [true]|false
            enableMultiselect: true,            // [true]|false
            highlightActiveLine: true,          // [true]|false
            highlightSelectedWord: true,        // [true]|false
            mergeUndoDeltas: 'always',          // true|false|["always"]
            navigateWithinSoftTabs: false,      // true|[false]
            selectionStyle: 'line',             // ["line"]|"text"
            wrapBehavioursEnabled: true,        // [true]|false
        };
    }

    getEditorOptions(editor) {
        return {
            autoScrollEditorIntoView: editor.getOption('autoScrollEditorIntoView'),
            behavioursEnabled: editor.getOption('behavioursEnabled'),
            copyWithEmptySelection: editor.getOption('copyWithEmptySelection'),
            cursorStyle: editor.getOption('cursorStyle'),
            enableLinking: editor.getOption('enableLinking'),
            enableMultiselect: editor.getOption('enableMultiselect'),
            highlightActiveLine: editor.getOption('highlightActiveLine'),
            highlightSelectedWord: editor.getOption('highlightSelectedWord'),
            mergeUndoDeltas: editor.getOption('mergeUndoDeltas'),
            navigateWithinSoftTabs: editor.getOption('navigateWithinSoftTabs'),
            selectionStyle: editor.getOption('selectionStyle'),
            wrapBehavioursEnabled: editor.getOption('wrapBehavioursEnabled'),
        };
    }

    async initializeEditorOptionsA(editor) {
        const value = await localforage.getItem('options_editor');
        if (value) {
            editor.setOptions(value);
        } else {
            editor.setOptions(this.getDefaultEditorOptions());
        }
    }

    saveEditorOptions(editor) {
        const options = this.getEditorOptions(editor);
        localforage.setItem('options_editor', options);
    }

    getDefaultRendererOptions() {
        return {
            animatedScroll: false,          // true|[false]
            displayIndentGuides: true,      // [true]|false
            fadeFoldWidgets: false,         // true|[false]
            fixedWidthGutter: true,         // [true]|false
            fontFamily: undefined,          // css font-family value [undefined]
            fontSize: '16px',               // number or css font-size string [16]
            hScrollBarAlwaysVisible: false, // true|[false]
            highlightGutterLine: true,      // [true]|false
            printMarginColumn: 80,          // number [80]
            scrollPastEnd: 0,               // number|true|false [0]
            showFoldWidgets: true,          // [true]|false
            showGutter: true,               // [true]|false
            showInvisibles: false,          // true|[false]
            showLineNumbers: true,          // [true]|false
            showPrintMargin: true,          // [true]|false
            theme: 'ace/theme/chrome',      // path to a theme e.g "ace/theme/textmate"
            vScrollBarAlwaysVisible: false, // true|[false]
        };
    }

    getRendererOptions(editor) {
        return {
            animatedScroll: editor.getOption('animatedScroll'),
            displayIndentGuides: editor.getOption('displayIndentGuides'),
            fadeFoldWidgets: editor.getOption('fadeFoldWidgets'),
            fixedWidthGutter: editor.getOption('fixedWidthGutter'),
            fontFamily: editor.getOption('fontFamily'),
            fontSize: editor.getOption('fontSize'),
            hScrollBarAlwaysVisible: editor.getOption('hScrollBarAlwaysVisible'),
            highlightGutterLine: editor.getOption('highlightGutterLine'),
            printMarginColumn: editor.getOption('printMarginColumn'),
            scrollPastEnd: editor.getOption('scrollPastEnd'),
            showFoldWidgets: editor.getOption('showFoldWidgets'),
            showGutter: editor.getOption('showGutter'),
            showInvisibles: editor.getOption('showInvisibles'),
            showLineNumbers: editor.getOption('showLineNumbers'),
            showPrintMargin: editor.getOption('showPrintMargin'),
            theme: editor.getOption('theme'),
            vScrollBarAlwaysVisible: editor.getOption('vScrollBarAlwaysVisible'),
        };
    }

    async initializeRendererOptionsA(editor) {
        const value = await localforage.getItem('options_renderer');
        if (value) {
            editor.setOptions(value);
        } else {
            editor.setOptions(this.getDefaultRendererOptions());
        }
        document.getElementById('editor').style.fontSize
            = editor.getOption('fontSize');
    }

    saveRendererOptions(editor) {
        localforage.setItem('options_renderer', this.getRendererOptions(editor));
    }

    getDefaultMouseHandlerOptions() {
        return {
            dragDelay: 0,               // number [0]
            dragEnabled: true,          // [true]|false
            focusTimeout: 0,            // number [0]
            scrollSpeed: 2,             // number [2]
            tooltipFollowsMouse: true,  // [true]|false
        };
    }

    getMouseHandlerOptions(editor) {
        return {
            dragDelay: editor.getOption('dragDelay'),
            dragEnabled: editor.getOption('dragEnabled'),
            focusTimeout: editor.getOption('focusTimeout'),
            scrollSpeed: editor.getOption('scrollSpeed'),
            tooltipFollowsMouse: editor.getOption('tooltipFollowsMouse'),
        };
    }

    saveMouseHandlerOptions(editor) {
        localforage
            .setItem('options_mouse_handler', this.getMouseHandlerOptions(editor));
    }

    getDefaultSessionOptions() {
        return {
            firstLineNumber: 1,     // number [1]
            foldStyle: 'markbegin', // ["markbegin"]|"markbeginend"|"manual"
            newLineMode: 'auto',    // ["auto"]|"unix"|"windows"
            tabSize: 4,             // number [4]
            useSoftTabs: true,      // [true]|false
            useWorker: true,        // [true]|false
            wrap: false,            // ["off"]|"free"|"printMargin"|number
        };
    }

    getSessionOptions(session) {
        return {
            firstLineNumber: session.getOption('firstLineNumber'),
            foldStyle: session.getOption('foldStyle'),
            newLineMode: session.getOption('newLineMode'),
            tabSize: session.getOption('tabSize'),
            useSoftTabs: session.getOption('useSoftTabs'),
            useWorker: session.getOption('useWorker'),
            wrap: session.getOption('wrap'),
        };
    }

    async initializeSessionOptionsA(session) {
        const value = await localforage.getItem('options_session');
        if (value) {
            session.setOptions(value);
        } else {
            session.setOptions(this.getDefaultSessionOptions());
        }
    }

    saveSessionOptions(session) {
        const options = this.getSessionOptions(session);
        localforage.setItem('options_session', options);
    }

    getDefaultExtensionsOptions() {
        return {
            enableBasicAutocompletion: false,   // true|[false] (Language Tools)
            enableLiveAutocompletion: false,    // true|[false] (Language Tools)
            enableSnippets: false,              // true|[false] (Language Tools)
            enableEmmet: false,                 // true|[false] (Emmet)
            useElasticTabstops: false           // true|[false] (Elastic Tabstops)
        };
    }

    getExtensionsOptions(editor) {
        return {
            enableBasicAutocompletion: editor.getOption('enableBasicAutocompletion'),
            enableLiveAutocompletion: editor.getOption('enableLiveAutocompletion'),
            enableSnippets: editor.getOption('enableSnippets'),
            enableEmmet: editor.getOption('enableEmmet'),
            useElasticTabstops: editor.getOption('useElasticTabstops'),
        };
    }

    async initializeExtensionsOptionsA(editor) {
        const value = await localforage.getItem('options_extensions');
        if (value) {
            editor.setOptions(value);
        } else {
            editor.setOptions(this.getDefaultExtensionsOptions());
        }
    }

    saveExtensionsOptions(editor) {
        localforage
            .setItem('options_extensions', this.getExtensionsOptions(editor));
    }

    getDefaultOedOptions() {
        return {
            fileDecoding: 'utf-8',      // string ["utf-8"]
            hello: false,               // true|[false]
            keybinding: 'Ace',          // ["Ace"]|"Vim"|"Emacs"|"Sublime"|"VSCode"
            theme: 'Dark',              // ["Dark"]|"Light"|"Ace"|"AceReverse"
        };
    }

    getOedOptions() {
        return this.oed;
    }

    async initializeOedOptionsA(core) {
        const value = await localforage.getItem('options_oed');
        if (value) {
            this.oed = value;
        } else {
            this.oed = this.getDefaultOedOptions();
        }
        core.setKeybinding(this.oed.keybinding);
    }

    saveOedOptions() {
        localforage.setItem('options_oed', this.getOedOptions());
    }

    async exportOptionsA(core) {
        const oedOptions = this.getOedOptions(core.getEditor());
        const editorOptions = this.getEditorOptions(core.getEditor());
        const rendererOptions = this.getRendererOptions(core.getEditor());
        const sessionOptions = this.getSessionOptions(core.getEditorSession());
        const extensionsOptions = this.getExtensionsOptions(core.getEditor());
        const cacheManager = new CacheManager(core);
        const appVersion = await cacheManager.getVersionA('OED', 0);
        const options = {
            info_options: {
                exportVersion: '1',
                exportDate: new Date().toString(),
                appName: 'OED',
                appVersion: appVersion,
            },
            options: {
                oed: oedOptions,
                editor: editorOptions,
                renderer: rendererOptions,
                session: sessionOptions,
                extensions: extensionsOptions
            }
        };
        const json = JSON.stringify(options);
        const fileHelper = new FileHelper();
        const blob = fileHelper.buildBlob(json, 'application/json');
        fileHelper.writeBlob(blob, 'export_options.json');
    }

    async importOptionsA(core) {
        const dialogSelectFile = new DialogSelectFile();
        const files = await dialogSelectFile.openA(false);
        if (files) {
            const fileHelper = new FileHelper();
            const json = await fileHelper.fetchTextFileA(files[0]);
            const options = JSON.parse(json);
            core.getEditor().setOptions(options.options.editor);
            core.getEditor().setOptions(options.options.renderer);
            core.getEditor().setOptions(options.options.session);
            core.getEditor().setOptions(options.options.extensions);
            this.oed = options.options.oed;
        }
    }
}
