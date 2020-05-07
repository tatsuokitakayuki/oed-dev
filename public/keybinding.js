import {ChangeSnackbarEvent} from '/change_snackbar_event.js';
import {ChangeViewEvent} from '/change_view_event.js';
import {SaveOptionsEvent} from '/save_options_event.js';
import {Res} from '/res.js';

export class Keybinding {
    constructor(core) {
        this.core = core;
    }

    initializeFileList() {
        const res = new Res();
        this.core.getEditor().commands.addCommand({
            name: 'oedNextFile',
            description: res.descriptions.next_file,
            bindKey: {win: 'Ctrl-Tab', mac: 'Command-Tab'},
            exec: editor => this.core.nextFile(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedPreviousFile',
            description: res.descriptions.previous_file,
            bindKey: {win: 'Ctrl-Shift-Tab', mac: 'Command-Shift-Tab'},
            exec: editor => this.core.previousFile(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile1',
            description: res.descriptions.first_file,
            bindKey: {win: 'Ctrl-1', mac: 'Command-1'},
            exec: editor => this.core.selectFile(0),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile2',
            description: res.descriptions.second_file,
            bindKey: {win: 'Ctrl-2', mac: 'Command-2'},
            exec: editor => this.core.selectFile(1),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile3',
            description: res.descriptions.third_file,
            bindKey: {win: 'Ctrl-3', mac: 'Command-3'},
            exec: editor => this.core.selectFile(2),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile4',
            description: res.descriptions.fourth_file,
            bindKey: {win: 'Ctrl-4', mac: 'Command-4'},
            exec: editor => this.core.selectFile(3),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile5',
            description: res.descriptions.fifth_file,
            bindKey: {win: 'Ctrl-5', mac: 'Command-5'},
            exec: editor => this.core.selectFile(4),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile6',
            description: res.descriptions.sixth_file,
            bindKey: {win: 'Ctrl-6', mac: 'Command-6'},
            exec: editor => this.core.selectFile(5),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile7',
            description: res.descriptions.seventh_file,
            bindKey: {win: 'Ctrl-7', mac: 'Command-7'},
            exec: editor => this.core.selectFile(6),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile8',
            description: res.descriptions.eighth_file,
            bindKey: {win: 'Ctrl-8', mac: 'Command-8'},
            exec: editor => this.core.selectFile(7),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFileLast',
            description: res.descriptions.last_file,
            bindKey: {win: 'Ctrl-9', mac: 'Command-9'},
            exec: editor => this.core.lastFile(),
            readOnly: true
        });
    }

    initializeFileMenu() {
        const res = new Res();
        this.core.getEditor().commands.addCommand({
            name: 'oedNewFile',
            description: res.descriptions.new_file,
            bindKey: {win: 'Ctrl-N', mac: 'Command-N'},
            exec: editor => this.core.newFileA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedOpenFile',
            description: res.descriptions.open_file + '...',
            bindKey: {win: 'Ctrl-O', mac: 'Command-O'},
            exec: editor => this.core.openSelectFileA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedDownloadFile',
            description: res.descriptions.download_file,
            bindKey: {win: 'Ctrl-S', mac: 'Command-S'},
            exec: editor => this.core.downloadFile(this.core.getActive()),
            readOnly: false
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedRenameFile',
            description: res.descriptions.rename_file + '...',
            bindKey: {win: 'Alt-R', mac: 'Option-R'},
            exec: editor => this.core.renameFile(this.core.getActive(), null, null),
            readOnly: false
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFileDecoding',
            description: res.descriptions.file_decoding + '...',
            exec: editor => this.core.selectFileDecoding(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFirstLineNumber',
            description: res.descriptions.first_line_number + '...',
            exec: editor => this.core.promptFirstLineNumber(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFoldStyle',
            description: res.descriptions.fold_style + '...',
            exec: editor => this.core.selectFoldStyle(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedIndentedSoftWrap',
            description: res.descriptions.indented_soft_wrap,
            exec: editor =>
                editor.setOption('indentedSoftWrap', !editor.getOption('indentedSoftWrap')),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedMode',
            description: res.descriptions.language_mode + '...',
            exec: editor => this.core.selectLanguageMode(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedNewLineMode',
            description: res.descriptions.new_line_mode + '...',
            exec: editor => this.core.selectNewLineMode(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedWrap',
            description: res.descriptions.wrap + '...',
            exec: editor => this.core.selectWrap(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedTabSize',
            description: res.descriptions.tab_size + '...',
            exec: editor => this.core.promptTabSize(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedUseSoftTabs',
            description: res.descriptions.use_soft_tabs,
            exec: editor =>
                editor.setOption('useSoftTabs', !editor.getOption('useSoftTabs')),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSaveEditSessionOptions',
            description: res.descriptions.save_edit_session_options,
            exec: editor => {
                this.dispatchSaveOptionsEvent(editor, {session: true, oed: true});
                document.dispatchEvent(
                    new ChangeSnackbarEvent('Saved edit session options.', true, null)
                );
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedCloseFile',
            description: res.descriptions.close_file + '...',
            bindKey: {win: 'Alt-W', mac: 'Option-W'},
            exec: editor => this.core.closeFileA(this.core.getActive()),
            readOnly: true
        });
    }
    
    initializeEditMenu() {
    }

    initializeSearchMenu() {
    }

    initializeCodeMenu() {
    }

    initializeViewMenu() {
        const res = new Res();
        this.core.getEditor().commands.addCommand({
            name: 'oedAutoScrollEditorIntoView',
            description: res.descriptions.auto_scroll_editor_into_view,
            exec: editor => {
                editor.setOption(
                    'autoScrollEditorIntoView',
                    !editor.getOption('autoScrollEditorIntoView')
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedBehavioursEnabled',
            description: res.descriptions.behaviours_enabled,
            exec: editor => {
                editor.setOption(
                    'behavioursEnabled', !editor.getOption('behavioursEnabled')
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedCopyWithEmptySelection',
            description: res.descriptions.copy_with_empty_selection,
            exec: editor => {
                editor.setOption(
                    'copyWithEmptySelection',
                    !editor.getOption('copyWithEmptySelection')
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedCursorStyle',
            description: res.descriptions.cursor_style + '...',
            exec: editor => this.core.selectCursorStyle(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableAutoIndent',
            description: res.descriptions.enable_auto_indent,
            exec: editor => {
                editor.setOption(
                    'enableAutoIndent', !editor.getOption('enableAutoIndent')
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableLinking',
            description: res.descriptions.enable_linking,
            exec: editor => {
                editor.setOption(
                    'enableLinking', !editor.getOption('enableLinking')
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableMultiselect',
            description: res.descriptions.enable_multiselect,
            exec: editor => {
                editor.setOption(
                    'enableMultiselect', !editor.getOption('enableMultiselect')
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedHighlightActiveLine',
            description: res.descriptions.highlight_active_line,
            exec: editor => {
                editor.setOption(
                    'highlightActiveLine',
                    !editor.getOption('highlightActiveLine')
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedHighlightSelectedWord',
            description: res.descriptions.highlight_selected_word,
            exec: editor => {
                editor.setOption(
                    'highlightSelectedWord',
                    !editor.getOption('highlightSelectedWord')
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedMergeUndoDeltas',
            description: res.descriptions.merge_undo_deltas + '...',
            exec: editor => this.core.selectMergeUndoDeltas(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedNavigateWithinSoftTabs',
            description: res.descriptions.navigate_within_soft_tabs,
            exec: editor => {
                editor.setOption(
                    'navigateWithinSoftTabs',
                    !editor.getOption('navigateWithinSoftTabs')
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedReadOnly',
            description: res.descriptions.read_only,
            exec: editor => {
                const index = this.core.getActive();
                if (!this.core.isCoreFile(index)) {
                    editor.setReadOnly(this.core.flipReadOnly(index));
                    document.dispatchEvent(
                        new ChangeViewEvent(
                            index,
                            index,
                            {editor: true, draweritem: true, appbar: true}
                        )
                    );
                }
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectionStyle',
            description: res.descriptions.selection_style,
            exec: editor => {
                editor.setOption(
                    'selectionStyle',
                    editor.getOption('selectionStyle') === 'line' ? 'text' : 'line'
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedWrapBehavioursEnabled',
            description: res.descriptions.wrap_behaviours_enabled,
            exec: editor => {
                editor.setOption(
                    'wrapBehavioursEnabled',
                    !editor.getOption('wrapBehavioursEnabled')
                );
                this.dispatchSaveOptionsEvent(editor, {editor: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowGutter',
            description: res.descriptions.show_gutter,
            exec: editor => {
                editor.setOption('showGutter', !editor.getOption('showGutter'));
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFixedWidthGutter',
            description: res.descriptions.fixed_width_gutter,
            exec: editor => {
                editor.setOption(
                    'fixedWidthGutter', !editor.getOption('fixedWidthGutter')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedHighlightGutterLine',
            description: res.descriptions.highlight_gutter_line,
            exec: editor => {
                editor.setOption(
                    'highlightGutterLine',
                    !editor.getOption('highlightGutterLine')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowLineNumbers',
            description: res.descriptions.show_line_numbers,
            exec: editor => {
                editor.setOption(
                    'showLineNumbers', !editor.getOption('showLineNumbers')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedDisplayIndentGuides',
            description: res.descriptions.display_indent_guides,
            exec: editor => {
                editor.setOption(
                    'displayIndentGuides',
                    !editor.getOption('displayIndentGuides')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedPrintMarginColumn',
            description: res.descriptions.print_margin_column + '...',
            exec: editor => this.core.promptPrintMarginColumn(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowPrintMargin',
            description: res.descriptions.show_print_margin,
            exec: editor => {
                editor.setOption(
                    'showPrintMargin', !editor.getOption('showPrintMargin')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedAnimatedScroll',
            description: res.descriptions.animated_scroll,
            exec: editor => {
                editor.setOption(
                    'animatedScroll', !editor.getOption('animatedScroll')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFadeFoldWidgets',
            description: res.descriptions.fade_fold_widgets,
            exec: editor => {
                editor.setOption(
                    'fadeFoldWidgets', !editor.getOption('fadeFoldWidgets')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedScrollPastEnd',
            description: res.descriptions.scroll_past_end + '...',
            exec: editor => this.core.selectScrollPastEnd(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowFoldWidgets',
            description: res.descriptions.show_fold_widgets,
            exec: editor => {
                editor.setOption(
                    'showFoldWidgets', !editor.getOption('showFoldWidgets')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowInvisibles',
            description: res.descriptions.show_invisibles,
            exec: editor => {
                editor.setOption(
                    'showInvisibles', !editor.getOption('showInvisibles')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedVScrollBarAlwaysVisible',
            description: res.descriptions.vertical_scroll_bar_always_visible,
            exec: editor => {
                editor.setOption(
                    'vScrollBarAlwaysVisible',
                    !editor.getOption('vScrollBarAlwaysVisible')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedHScrollBarAlwaysVisible',
            description: res.descriptions.holizontal_scroll_bar_always_visible,
            exec: editor => {
                editor.setOption(
                    'hScrollBarAlwaysVisible',
                    !editor.getOption('hScrollBarAlwaysVisible')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedUseTextareaForIME',
            description: res.descriptions.use_textarea_for_ime,
            exec: editor => {
                editor.setOption(
                    'useTextareaForIME', !editor.getOption('useTextareaForIME')
                );
                this.dispatchSaveOptionsEvent(editor, {renderer: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFontFamily',
            description: res.descriptions.font_family + '...',
            exec: editor => this.core.promptFontFamily(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFontSize',
            description: res.descriptions.font_size + '...',
            exec: editor => this.core.promptFontSize(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedTheme',
            description: res.descriptions.theme + '...',
            exec: editor => this.core.selectTheme(),
            readOnly: true
        });
    }

    initializeExtensionsMenu() {
        const res = new Res();
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableBasicAutocompletion',
            description: res.descriptions.enable_basic_autocompletion,
            exec: editor => {
                editor.setOption(
                    'enableBasicAutocompletion',
                    !editor.getOption('enableBasicAutocompletion')
                );
                this.dispatchSaveOptionsEvent(editor, {extensions: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableLiveAutocompletion',
            description: res.descriptions.enable_live_autocompletion,
            exec: editor => {
                editor.setOption(
                    'enableLiveAutocompletion',
                    !editor.getOption('enableLiveAutocompletion')
                );
                this.dispatchSaveOptionsEvent(editor, {extensions: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableSnippets',
            description: res.descriptions.enable_snippets,
            exec: editor => {
                editor.setOption(
                    'enableSnippets', !editor.getOption('enableSnippets')
                );
                this.dispatchSaveOptionsEvent(editor, {extensions: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableEmmet',
            description: res.descriptions.enable_emmet,
            exec: editor => {
                editor.setOption(
                    'enableEmmet', !editor.getOption('enableEmmet')
                );
                this.dispatchSaveOptionsEvent(editor, {extensions: true});
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedUseElasticTabstops',
            description: res.descriptions.use_elastic_tabstops,
            exec: editor => {
                editor.setOption(
                    'useElasticTabstops',
                    !editor.getOption('useElasticTabstops')
                );
                this.dispatchSaveOptionsEvent(editor, {extensions: true});
            },
            readOnly: true
        });
    }

    initializeHelpMenu() {
        const res = new Res();
        this.core.getEditor().commands.addCommand({
            name: 'oedKeyboardHandler',
            description: res.descriptions.keyboard_handler + '...',
            exec: editor => this.core.selectKeyboardHandler(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedMenuButton',
            description: res.descriptions.menu_button + '...',
            exec: editor => this.core.selectMenuButton(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedExportOptions',
            description: res.descriptions.export_options,
            exec: editor => this.core.exportOptionsA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedImportOptions',
            description: res.descriptions.import_options + '...',
            exec: editor => this.core.importOptionsA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedCacheList',
            description: res.descriptions.cache_list,
            exec: editor => this.core.cacheListA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedChangeLog',
            description: res.descriptions.change_log,
            exec: editor => this.core.changeLogA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedAbout',
            description: res.descriptions.about,
            exec: editor => this.core.aboutA(),
            readOnly: true
        });
    }

    initializeTopAppBar() {
        const res = new Res();
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleFileList',
            description: res.descriptions.toggle_file_list,
            bindKey: {win: 'Ctrl-Shift-F', mac: 'Command-Shift-F'},
            exec: editor => this.core.toggleFileList(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleFileMenu',
            description: res.descriptions.toggle_file_menu,
            bindKey: {win: 'Alt-I'},
            exec: editor => this.core.toggleFileMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleEditMenu',
            description: res.descriptions.toggle_edit_menu,
            bindKey: {win: 'Alt-D'},
            exec: editor => this.core.toggleEditMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleSearchMenu',
            description: res.descriptions.toggle_search_menu,
            bindKey: {win: 'Alt-S'},
            exec: editor => this.core.toggleSearchMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleCodeMenu',
            description: res.descriptions.toggle_code_menu,
            bindKey: {win: 'Alt-C'},
            exec: editor => this.core.toggleCodeMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleViewMenu',
            description: res.descriptions.toggle_view_menu,
            bindKey: {win: 'Alt-V'},
            exec: editor => this.core.toggleViewMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleExtensionsMenu',
            description: res.descriptions.toggle_extensions_menu,
            bindKey: {win: 'Alt-X'},
            exec: editor => this.core.toggleExtensionsMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleHelpMenu',
            description: res.descriptions.toggle_help_menu,
            bindKey: {win: 'Alt-H'},
            exec: editor => this.core.toggleHelpMenu(),
            readOnly: true
        });
    }

    dispatchSaveOptionsEvent(editor, options) {
        document.dispatchEvent(new SaveOptionsEvent(editor, options));
    }

    initialize() {
        this.initializeFileList();
        this.initializeFileMenu();
        this.initializeEditMenu();
        this.initializeSearchMenu();
        this.initializeCodeMenu();
        this.initializeViewMenu();
        this.initializeExtensionsMenu();
        this.initializeHelpMenu();
        this.initializeTopAppBar();
    }
}
