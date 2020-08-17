import {ChangeSnackbarEvent} from '/change_snackbar_event.js';
import {ChangeViewEvent} from '/change_view_event.js';
import {DESCRIPTIONS} from '/res/descriptions.js';
import {SaveOptionsEvent} from '/save_options_event.js';
import {MoveDrawerEvent} from '/move_drawer_event.js';

export class Keybinding {
    constructor(core) {
        this.core = core;
        this.oedSourceCode = null;
    }

    initializeFileList(editor) {
        const commands = [
            {
                name: 'oedNextFile',
                description: DESCRIPTIONS.NEXT_FILE,
                bindKey: {win: 'Ctrl-Tab', mac: 'Command-Tab'},
                exec: editor => this.core.nextFile(),
                readOnly: true
            },
            {
                name: 'oedPreviousFile',
                description: DESCRIPTIONS.PREVIOUS_FILE,
                bindKey: {win: 'Ctrl-Shift-Tab', mac: 'Command-Shift-Tab'},
                exec: editor => this.core.previousFile(),
                readOnly: true
            },
            {
                name: 'oedSelectFile1',
                description: DESCRIPTIONS.FIRST_FILE,
                bindKey: {win: 'Ctrl-1', mac: 'Command-1'},
                exec: editor => this.core.selectFile(0),
                readOnly: true
            },
            {
                name: 'oedSelectFile2',
                description: DESCRIPTIONS.SECOND_FILE,
                bindKey: {win: 'Ctrl-2', mac: 'Command-2'},
                exec: editor => this.core.selectFile(1),
                readOnly: true
            },
            {
                name: 'oedSelectFile3',
                description: DESCRIPTIONS.THIRD_FILE,
                bindKey: {win: 'Ctrl-3', mac: 'Command-3'},
                exec: editor => this.core.selectFile(2),
                readOnly: true
            },
            {
                name: 'oedSelectFile4',
                description: DESCRIPTIONS.FOURTH_FILE,
                bindKey: {win: 'Ctrl-4', mac: 'Command-4'},
                exec: editor => this.core.selectFile(3),
                readOnly: true
            },
            {
                name: 'oedSelectFile5',
                description: DESCRIPTIONS.FIFTH_FILE,
                bindKey: {win: 'Ctrl-5', mac: 'Command-5'},
                exec: editor => this.core.selectFile(4),
                readOnly: true
            },
            {
                name: 'oedSelectFile6',
                description: DESCRIPTIONS.SIXTH_FILE,
                bindKey: {win: 'Ctrl-6', mac: 'Command-6'},
                exec: editor => this.core.selectFile(5),
                readOnly: true
            },
            {
                name: 'oedSelectFile7',
                description: DESCRIPTIONS.SEVENTH_FILE,
                bindKey: {win: 'Ctrl-7', mac: 'Command-7'},
                exec: editor => this.core.selectFile(6),
                readOnly: true
            },
            {
                name: 'oedSelectFile8',
                description: DESCRIPTIONS.EIGHTH_FILE,
                bindKey: {win: 'Ctrl-8', mac: 'Command-8'},
                exec: editor => this.core.selectFile(7),
                readOnly: true
            },
            {
                name: 'oedSelectFileLast',
                description: DESCRIPTIONS.LAST_FILE,
                bindKey: {win: 'Ctrl-9', mac: 'Command-9'},
                exec: editor => this.core.lastFile(),
                readOnly: true
            },
        ];
        this.addCommands(editor, commands);
    }

    initializeFileMenu(editor) {
        const commands = [
            {
                name: 'oedNewFile',
                description: DESCRIPTIONS.NEW_FILE,
                bindKey: {win: 'Ctrl-N', mac: 'Command-N'},
                exec: editor => this.core.newFileA(),
                readOnly: true
            },
            {
                name: 'oedOpenFile',
                description: DESCRIPTIONS.OPEN_FILE + '...',
                bindKey: {win: 'Ctrl-O', mac: 'Command-O'},
                exec: editor => this.core.openSelectFileA(),
                readOnly: true
            },
            {
                name: 'oedDownloadFile',
                description: DESCRIPTIONS.DOWNLOAD_FILE,
                bindKey: {win: 'Ctrl-S', mac: 'Command-S'},
                exec: editor => this.core.downloadFile(this.core.getActive()),
                readOnly: false
            },
            {
                name: 'oedRenameFile',
                description: DESCRIPTIONS.RENAME_FILE + '...',
                bindKey: {win: 'Alt-R', mac: 'Option-R'},
                exec: editor => this.core.renameFile(
                    this.core.getActive(), null, null
                ),
                readOnly: false
            },
            {
                name: 'oedFileDecoding',
                description: DESCRIPTIONS.FILE_DECODING + '...',
                exec: editor => this.core.selectFileDecoding(),
                readOnly: true
            },
            {
                name: 'oedFirstLineNumber',
                description: DESCRIPTIONS.FIRST_LINE_NUMBER + '...',
                exec: editor => this.core.promptFirstLineNumber(),
                readOnly: true
            },
            {
                name: 'oedFoldStyle',
                description: DESCRIPTIONS.FOLD_STYLE + '...',
                exec: editor => this.core.selectFoldStyle(),
                readOnly: true
            },
            {
                name: 'oedIndentedSoftWrap',
                description: DESCRIPTIONS.INDENTED_SOFT_WRAP,
                exec: editor => editor.setOption(
                    'indentedSoftWrap', !editor.getOption('indentedSoftWrap')
                ),
                readOnly: true
            },
            {
                name: 'oedMode',
                description: DESCRIPTIONS.LANGUAGE_MODE + '...',
                exec: editor => this.core.selectLanguageMode(),
                readOnly: true
            },
            {
                name: 'oedNewLineMode',
                description: DESCRIPTIONS.NEW_LINE_MODE + '...',
                exec: editor => this.core.selectNewLineMode(),
                readOnly: true
            },
            {
                name: 'oedWrap',
                description: DESCRIPTIONS.WRAP + '...',
                exec: editor => this.core.selectWrap(),
                readOnly: true
            },
            {
                name: 'oedTabSize',
                description: DESCRIPTIONS.TAB_SIZE + '...',
                exec: editor => this.core.promptTabSize(),
                readOnly: true
            },
            {
                name: 'oedUseSoftTabs',
                description: DESCRIPTIONS.USE_SOFT_TABS,
                exec: editor => editor.setOption(
                    'useSoftTabs', !editor.getOption('useSoftTabs')
                ),
                readOnly: true
            },
            {
                name: 'oedSaveEditSessionOptions',
                description: DESCRIPTIONS.SAVE_EDIT_SESSION_OPTIONS,
                exec: editor => {
                    this.dispatchSaveOptionsEvent(
                        editor, {session: true, oed: true}
                    );
                    document.dispatchEvent(
                        new ChangeSnackbarEvent(
                            'Saved edit session options.', true, null
                        )
                    );
                },
                readOnly: true
            },
            {
                name: 'oedCloseFile',
                description: DESCRIPTIONS.CLOSE_FILE + '...',
                bindKey: {win: 'Alt-W', mac: 'Option-W'},
                exec: editor => this.core.closeFileA(this.core.getActive()),
                readOnly: true
            },
        ];
        this.addCommands(editor, commands);
    }
    
    initializeEditMenu(editor) {
    }

    initializeSearchMenu(editor) {
    }

    initializeCodeMenu(editor) {
    }

    initializeViewMenu(editor) {
        const commands = [
            {
                name: 'oedAutoScrollEditorIntoView',
                description: DESCRIPTIONS.AUTO_SCROLL_EDITOR_INTO_VIEW,
                exec: editor => {
                    editor.setOption(
                        'autoScrollEditorIntoView',
                        !editor.getOption('autoScrollEditorIntoView')
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedBehavioursEnabled',
                description: DESCRIPTIONS.BEHAVIOURS_ENABLED,
                exec: editor => {
                    editor.setOption(
                        'behavioursEnabled', !editor.getOption('behavioursEnabled')
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedCopyWithEmptySelection',
                description: DESCRIPTIONS.COPY_WITH_EMPTY_SELECTION,
                exec: editor => {
                    editor.setOption(
                        'copyWithEmptySelection',
                        !editor.getOption('copyWithEmptySelection')
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedCursorStyle',
                description: DESCRIPTIONS.CURSOR_STYLE + '...',
                exec: editor => this.core.selectCursorStyle(),
                readOnly: true
            },
            {
                name: 'oedEnableAutoIndent',
                description: DESCRIPTIONS.ENABLE_AUTO_INDENT,
                exec: editor => {
                    editor.setOption(
                        'enableAutoIndent', !editor.getOption('enableAutoIndent')
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedEnableLinking',
                description: DESCRIPTIONS.ENABLE_LINKING,
                exec: editor => {
                    editor.setOption(
                        'enableLinking', !editor.getOption('enableLinking')
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedEnableMultiselect',
                description: DESCRIPTIONS.ENABLE_MULTISELECT,
                exec: editor => {
                    editor.setOption(
                        'enableMultiselect', !editor.getOption('enableMultiselect')
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedHighlightActiveLine',
                description: DESCRIPTIONS.HIGHLIGHT_ACTIVE_LINE,
                exec: editor => {
                    editor.setOption(
                        'highlightActiveLine',
                        !editor.getOption('highlightActiveLine')
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedHighlightSelectedWord',
                description: DESCRIPTIONS.HIGHLIGHT_SELECTED_WORD,
                exec: editor => {
                    editor.setOption(
                        'highlightSelectedWord',
                        !editor.getOption('highlightSelectedWord')
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedMergeUndoDeltas',
                description: DESCRIPTIONS.MERGE_UNDO_DELTAS + '...',
                exec: editor => this.core.selectMergeUndoDeltas(),
                readOnly: true
            },
            {
                name: 'oedNavigateWithinSoftTabs',
                description: DESCRIPTIONS.NAVIGATE_WITHIN_SOFT_TABS,
                exec: editor => {
                    editor.setOption(
                        'navigateWithinSoftTabs',
                        !editor.getOption('navigateWithinSoftTabs')
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedReadOnly',
                description: DESCRIPTIONS.READ_ONLY,
                exec: editor => {
                    const index = this.core.getActive();
                    if (!this.core.isCoreFile(index)) {
                        editor.setReadOnly(this.core.flipReadOnly(index));
                        document.dispatchEvent(
                            new ChangeViewEvent(index, index, {all: true})
                        );
                    }
                },
                readOnly: true
            },
            {
                name: 'oedSelectionStyle',
                description: DESCRIPTIONS.SELECTION_STYLE,
                exec: editor => {
                    editor.setOption(
                        'selectionStyle',
                        editor.getOption('selectionStyle') === 'line' ?
                            'text' : 'line'
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedWrapBehavioursEnabled',
                description: DESCRIPTIONS.WRAP_BEHAVIOURS_ENABLED,
                exec: editor => {
                    editor.setOption(
                        'wrapBehavioursEnabled',
                        !editor.getOption('wrapBehavioursEnabled')
                    );
                    this.dispatchSaveOptionsEvent(editor, {editor: true});
                },
                readOnly: true
            },
            {
                name: 'oedShowGutter',
                description: DESCRIPTIONS.SHOW_GUTTER,
                exec: editor => {
                    editor.setOption('showGutter', !editor.getOption('showGutter'));
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedFixedWidthGutter',
                description: DESCRIPTIONS.FIXED_WIDTH_GUTTER,
                exec: editor => {
                    editor.setOption(
                        'fixedWidthGutter', !editor.getOption('fixedWidthGutter')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedHighlightGutterLine',
                description: DESCRIPTIONS.HIGHLIGHT_GUTTER_LINE,
                exec: editor => {
                    editor.setOption(
                        'highlightGutterLine',
                        !editor.getOption('highlightGutterLine')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedShowLineNumbers',
                description: DESCRIPTIONS.SHOW_LINE_NUMBERS,
                exec: editor => {
                    editor.setOption(
                        'showLineNumbers', !editor.getOption('showLineNumbers')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedDisplayIndentGuides',
                description: DESCRIPTIONS.DISPLAY_INDENT_GUIDES,
                exec: editor => {
                    editor.setOption(
                        'displayIndentGuides',
                        !editor.getOption('displayIndentGuides')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedPrintMarginColumn',
                description: DESCRIPTIONS.PRINT_MARGIN_COLUMN + '...',
                exec: editor => this.core.promptPrintMarginColumn(),
                readOnly: true
            },
            {
                name: 'oedShowPrintMargin',
                description: DESCRIPTIONS.SHOW_PRINT_MARGIN,
                exec: editor => {
                    editor.setOption(
                        'showPrintMargin', !editor.getOption('showPrintMargin')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedAnimatedScroll',
                description: DESCRIPTIONS.ANIMATED_SCROLL,
                exec: editor => {
                    editor.setOption(
                        'animatedScroll', !editor.getOption('animatedScroll')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedFadeFoldWidgets',
                description: DESCRIPTIONS.FADE_FOLD_WIDGETS,
                exec: editor => {
                    editor.setOption(
                        'fadeFoldWidgets', !editor.getOption('fadeFoldWidgets')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedScrollPastEnd',
                description: DESCRIPTIONS.SCROLL_PAST_END + '...',
                exec: editor => this.core.selectScrollPastEnd(),
                readOnly: true
            },
            {
                name: 'oedShowFoldWidgets',
                description: DESCRIPTIONS.SHOW_FOLD_WIDGETS,
                exec: editor => {
                    editor.setOption(
                        'showFoldWidgets', !editor.getOption('showFoldWidgets')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedShowInvisibles',
                description: DESCRIPTIONS.SHOW_INVISIBLES,
                exec: editor => {
                    editor.setOption(
                        'showInvisibles', !editor.getOption('showInvisibles')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedVScrollBarAlwaysVisible',
                description: DESCRIPTIONS.VERTICAL_SCROLL_BAR_ALWAYS_VISIBLE,
                exec: editor => {
                    editor.setOption(
                        'vScrollBarAlwaysVisible',
                        !editor.getOption('vScrollBarAlwaysVisible')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedHScrollBarAlwaysVisible',
                description: DESCRIPTIONS.HOLIZONTAL_SCROLL_BAR_ALWAYS_VISIBLE,
                exec: editor => {
                    editor.setOption(
                        'hScrollBarAlwaysVisible',
                        !editor.getOption('hScrollBarAlwaysVisible')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedUseTextareaForIME',
                description: DESCRIPTIONS.USE_TEXTAREA_FOR_IME,
                exec: editor => {
                    editor.setOption(
                        'useTextareaForIME', !editor.getOption('useTextareaForIME')
                    );
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedFontFamily',
                description: DESCRIPTIONS.FONT_FAMILY + '...',
                exec: editor => this.core.promptFontFamily(),
                readOnly: true
            },
            {
                name: 'oedFontSize',
                description: DESCRIPTIONS.FONT_SIZE + '...',
                exec: editor => this.core.promptFontSize(),
                readOnly: true
            },
            {
                name: 'oedTheme',
                description: DESCRIPTIONS.THEME + '...',
                exec: editor => this.core.selectTheme(),
                readOnly: true
            },
        ];
        this.addCommands(editor, commands);
    }

    initializeExtensionsMenu(editor) {
        const commands = [
            {
                name: 'oedEnableBasicAutocompletion',
                description: DESCRIPTIONS.ENABLE_BASIC_AUTOCOMPLETION,
                exec: editor => {
                    editor.setOption(
                        'enableBasicAutocompletion',
                        !editor.getOption('enableBasicAutocompletion')
                    );
                    this.dispatchSaveOptionsEvent(editor, {extensions: true});
                },
                readOnly: true
            },
            {
                name: 'oedEnableLiveAutocompletion',
                description: DESCRIPTIONS.ENABLE_LIVE_AUTOCOMPLETION,
                exec: editor => {
                    editor.setOption(
                        'enableLiveAutocompletion',
                        !editor.getOption('enableLiveAutocompletion')
                    );
                    this.dispatchSaveOptionsEvent(editor, {extensions: true});
                },
                readOnly: true
            },
            {
                name: 'oedEnableSnippets',
                description: DESCRIPTIONS.ENABLE_SNIPPETS,
                exec: editor => {
                    editor.setOption(
                        'enableSnippets', !editor.getOption('enableSnippets')
                    );
                    this.dispatchSaveOptionsEvent(editor, {extensions: true});
                },
                readOnly: true
            },
            {
                name: 'oedEnableEmmet',
                description: DESCRIPTIONS.ENABLE_EMMET,
                exec: editor => {
                    editor.setOption(
                        'enableEmmet', !editor.getOption('enableEmmet')
                    );
                    this.dispatchSaveOptionsEvent(editor, {extensions: true});
                },
                readOnly: true
            },
            {
                name: 'oedUseElasticTabstops',
                description: DESCRIPTIONS.USE_ELASTIC_TABSTOPS,
                exec: editor => {
                    editor.setOption(
                        'useElasticTabstops',
                        !editor.getOption('useElasticTabstops')
                    );
                    this.dispatchSaveOptionsEvent(editor, {extensions: true});
                },
                readOnly: true
            },
        ];
        this.addCommands(editor, commands);
    }

    initializeHelpMenu(editor) {
        const commands = [
            {
                name: 'oedKeyboardHandler',
                description: DESCRIPTIONS.KEYBOARD_HANDLER + '...',
                exec: editor => this.core.selectKeyboardHandler(),
                readOnly: true
            },
            {
                name: 'oedMenuButton',
                description: DESCRIPTIONS.MENU_BUTTON + '...',
                exec: editor => this.core.selectMenuButton(),
                readOnly: true
            },
            {
                name: 'oedExportOptions',
                description: DESCRIPTIONS.EXPORT_OPTIONS,
                exec: editor => this.core.exportOptionsA(),
                readOnly: true
            },
            {
                name: 'oedImportOptions',
                description: DESCRIPTIONS.IMPORT_OPTIONS + '...',
                exec: editor => this.core.importOptionsA(),
                readOnly: true
            },
            {
                name: 'oedCacheList',
                description: DESCRIPTIONS.CACHE_LIST,
                exec: editor => this.core.cacheListA(),
                readOnly: true
            },
            {
                name: 'oedInsertWelcome',
                description: DESCRIPTIONS.INSERT_WELCOME,
                exec: editor => this.core.insertWelcome(editor),
                readOnly: true
            },
            {
                name: 'oedSourceCode',
                description: DESCRIPTIONS.SOURCE_CODE,
                exec: editor => {
                    if (this.oedSourceCode == null || this.oedSourceCode.closed) {
                        this.oedSourceCode = window.open(
                            'https://github.com/tatsuokitakayuki/oed-dev',
                            'OEDSourceCode'
                        );
                    } else {
                        this.oedSourceCode.focus();
                    }
                },
                readOnly: true
            },
            {
                name: 'oedChangeLog',
                description: DESCRIPTIONS.CHANGE_LOG,
                exec: editor => this.core.changeLogA(),
                readOnly: true
            },
            {
                name: 'oedOpenSourceLisence',
                description: DESCRIPTIONS.OPEN_SOURCE_LISENCE,
                exec: editor => this.core.openSourceLisenceA(),
                readOnly: true
            },
            {
                name: 'oedAbout',
                description: DESCRIPTIONS.ABOUT,
                exec: editor => this.core.aboutA(),
                readOnly: true
            },
        ];
        this.addCommands(editor, commands);
    }

    initializeTopAppBar(editor) {
        const commands = [
            {
                name: 'oedToggleFileList',
                description: DESCRIPTIONS.TOGGLE_FILE_LIST,
                bindKey: {win: 'Ctrl-Shift-F', mac: 'Command-Shift-F'},
                exec: editor => document.dispatchEvent(new MoveDrawerEvent('toggle')),
                readOnly: true
            },
            {
                name: 'oedToggleFileMenu',
                description: DESCRIPTIONS.TOGGLE_FILE_MENU,
                bindKey: {win: 'Alt-I'},
                exec: editor => document.getElementById('button-file').click(),
                readOnly: true
            },
            {
                name: 'oedToggleEditMenu',
                description: DESCRIPTIONS.TOGGLE_EDIT_MENU,
                bindKey: {win: 'Alt-D'},
                exec: editor => document.getElementById('button-edit').click(),
                readOnly: true
            },
            {
                name: 'oedToggleSearchMenu',
                description: DESCRIPTIONS.TOGGLE_SEARCH_MENU,
                bindKey: {win: 'Alt-S'},
                exec: editor => document.getElementById('button-search').click(),
                readOnly: true
            },
            {
                name: 'oedToggleCodeMenu',
                description: DESCRIPTIONS.TOGGLE_CODE_MENU,
                bindKey: {win: 'Alt-C'},
                exec: editor => document.getElementById('button-code').click(),
                readOnly: true
            },
            {
                name: 'oedToggleViewMenu',
                description: DESCRIPTIONS.TOGGLE_VIEW_MENU,
                bindKey: {win: 'Alt-V'},
                exec: editor => document.getElementById('button-view').click(),
                readOnly: true
            },
            {
                name: 'oedToggleExtensionsMenu',
                description: DESCRIPTIONS.TOGGLE_EXTENSIONS_MENU,
                bindKey: {win: 'Alt-X'},
                exec: editor => document.getElementById('button-extensions').click(),
                readOnly: true
            },
            {
                name: 'oedToggleHelpMenu',
                description: DESCRIPTIONS.TOGGLE_HELP_MENU,
                bindKey: {win: 'Alt-H'},
                exec: editor => document.getElementById('button-help').click(),
                readOnly: true
            },
        ];
        this.addCommands(editor, commands);
    }

    addCommands(editor, commands) {
        commands.forEach(command => editor.commands.addCommand(command));
    }

    dispatchSaveOptionsEvent(editor, options) {
        document.dispatchEvent(new SaveOptionsEvent(editor, options));
    }

    initialize(editor) {
        this.initializeFileList(editor);
        this.initializeFileMenu(editor);
        this.initializeEditMenu(editor);
        this.initializeSearchMenu(editor);
        this.initializeCodeMenu(editor);
        this.initializeViewMenu(editor);
        this.initializeExtensionsMenu(editor);
        this.initializeHelpMenu(editor);
        this.initializeTopAppBar(editor);
    }
}
