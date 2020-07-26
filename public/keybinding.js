import {ChangeSnackbarEvent} from '/change_snackbar_event.js';
import {ChangeViewEvent} from '/change_view_event.js';
import {Res} from '/res.js';
import {SaveOptionsEvent} from '/save_options_event.js';
import {ToggleDrawerEvent} from '/toggle_drawer_event.js';

export class Keybinding {
    constructor(core) {
        this.core = core;
    }

    initializeFileList(editor) {
        const res = new Res();
        const commands = [
            {
                name: 'oedNextFile',
                description: res.descriptions.next_file,
                bindKey: {win: 'Ctrl-Tab', mac: 'Command-Tab'},
                exec: editor => this.core.nextFile(),
                readOnly: true
            },
            {
                name: 'oedPreviousFile',
                description: res.descriptions.previous_file,
                bindKey: {win: 'Ctrl-Shift-Tab', mac: 'Command-Shift-Tab'},
                exec: editor => this.core.previousFile(),
                readOnly: true
            },
            {
                name: 'oedSelectFile1',
                description: res.descriptions.first_file,
                bindKey: {win: 'Ctrl-1', mac: 'Command-1'},
                exec: editor => this.core.selectFile(0),
                readOnly: true
            },
            {
                name: 'oedSelectFile2',
                description: res.descriptions.second_file,
                bindKey: {win: 'Ctrl-2', mac: 'Command-2'},
                exec: editor => this.core.selectFile(1),
                readOnly: true
            },
            {
                name: 'oedSelectFile3',
                description: res.descriptions.third_file,
                bindKey: {win: 'Ctrl-3', mac: 'Command-3'},
                exec: editor => this.core.selectFile(2),
                readOnly: true
            },
            {
                name: 'oedSelectFile4',
                description: res.descriptions.fourth_file,
                bindKey: {win: 'Ctrl-4', mac: 'Command-4'},
                exec: editor => this.core.selectFile(3),
                readOnly: true
            },
            {
                name: 'oedSelectFile5',
                description: res.descriptions.fifth_file,
                bindKey: {win: 'Ctrl-5', mac: 'Command-5'},
                exec: editor => this.core.selectFile(4),
                readOnly: true
            },
            {
                name: 'oedSelectFile6',
                description: res.descriptions.sixth_file,
                bindKey: {win: 'Ctrl-6', mac: 'Command-6'},
                exec: editor => this.core.selectFile(5),
                readOnly: true
            },
            {
                name: 'oedSelectFile7',
                description: res.descriptions.seventh_file,
                bindKey: {win: 'Ctrl-7', mac: 'Command-7'},
                exec: editor => this.core.selectFile(6),
                readOnly: true
            },
            {
                name: 'oedSelectFile8',
                description: res.descriptions.eighth_file,
                bindKey: {win: 'Ctrl-8', mac: 'Command-8'},
                exec: editor => this.core.selectFile(7),
                readOnly: true
            },
            {
                name: 'oedSelectFileLast',
                description: res.descriptions.last_file,
                bindKey: {win: 'Ctrl-9', mac: 'Command-9'},
                exec: editor => this.core.lastFile(),
                readOnly: true
            },
        ];
        this.addCommands(editor, commands);
    }

    initializeFileMenu(editor) {
        const res = new Res();
        const commands = [
            {
                name: 'oedNewFile',
                description: res.descriptions.new_file,
                bindKey: {win: 'Ctrl-N', mac: 'Command-N'},
                exec: editor => this.core.newFileA(),
                readOnly: true
            },
            {
                name: 'oedOpenFile',
                description: res.descriptions.open_file + '...',
                bindKey: {win: 'Ctrl-O', mac: 'Command-O'},
                exec: editor => this.core.openSelectFileA(),
                readOnly: true
            },
            {
                name: 'oedDownloadFile',
                description: res.descriptions.download_file,
                bindKey: {win: 'Ctrl-S', mac: 'Command-S'},
                exec: editor => this.core.downloadFile(this.core.getActive()),
                readOnly: false
            },
            {
                name: 'oedRenameFile',
                description: res.descriptions.rename_file + '...',
                bindKey: {win: 'Alt-R', mac: 'Option-R'},
                exec: editor => this.core.renameFile(
                    this.core.getActive(), null, null
                ),
                readOnly: false
            },
            {
                name: 'oedFileDecoding',
                description: res.descriptions.file_decoding + '...',
                exec: editor => this.core.selectFileDecoding(),
                readOnly: true
            },
            {
                name: 'oedFirstLineNumber',
                description: res.descriptions.first_line_number + '...',
                exec: editor => this.core.promptFirstLineNumber(),
                readOnly: true
            },
            {
                name: 'oedFoldStyle',
                description: res.descriptions.fold_style + '...',
                exec: editor => this.core.selectFoldStyle(),
                readOnly: true
            },
            {
                name: 'oedIndentedSoftWrap',
                description: res.descriptions.indented_soft_wrap,
                exec: editor => editor.setOption(
                    'indentedSoftWrap', !editor.getOption('indentedSoftWrap')
                ),
                readOnly: true
            },
            {
                name: 'oedMode',
                description: res.descriptions.language_mode + '...',
                exec: editor => this.core.selectLanguageMode(),
                readOnly: true
            },
            {
                name: 'oedNewLineMode',
                description: res.descriptions.new_line_mode + '...',
                exec: editor => this.core.selectNewLineMode(),
                readOnly: true
            },
            {
                name: 'oedWrap',
                description: res.descriptions.wrap + '...',
                exec: editor => this.core.selectWrap(),
                readOnly: true
            },
            {
                name: 'oedTabSize',
                description: res.descriptions.tab_size + '...',
                exec: editor => this.core.promptTabSize(),
                readOnly: true
            },
            {
                name: 'oedUseSoftTabs',
                description: res.descriptions.use_soft_tabs,
                exec: editor => editor.setOption(
                    'useSoftTabs', !editor.getOption('useSoftTabs')
                ),
                readOnly: true
            },
            {
                name: 'oedSaveEditSessionOptions',
                description: res.descriptions.save_edit_session_options,
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
                description: res.descriptions.close_file + '...',
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
        const res = new Res();
        const commands = [
            {
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
            },
            {
                name: 'oedBehavioursEnabled',
                description: res.descriptions.behaviours_enabled,
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
                description: res.descriptions.copy_with_empty_selection,
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
                description: res.descriptions.cursor_style + '...',
                exec: editor => this.core.selectCursorStyle(),
                readOnly: true
            },
            {
                name: 'oedEnableAutoIndent',
                description: res.descriptions.enable_auto_indent,
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
                description: res.descriptions.enable_linking,
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
                description: res.descriptions.enable_multiselect,
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
                description: res.descriptions.highlight_active_line,
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
                description: res.descriptions.highlight_selected_word,
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
                description: res.descriptions.merge_undo_deltas + '...',
                exec: editor => this.core.selectMergeUndoDeltas(),
                readOnly: true
            },
            {
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
            },
            {
                name: 'oedReadOnly',
                description: res.descriptions.read_only,
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
                description: res.descriptions.selection_style,
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
                description: res.descriptions.wrap_behaviours_enabled,
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
                description: res.descriptions.show_gutter,
                exec: editor => {
                    editor.setOption('showGutter', !editor.getOption('showGutter'));
                    this.dispatchSaveOptionsEvent(editor, {renderer: true});
                },
                readOnly: true
            },
            {
                name: 'oedFixedWidthGutter',
                description: res.descriptions.fixed_width_gutter,
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
                description: res.descriptions.highlight_gutter_line,
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
                description: res.descriptions.show_line_numbers,
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
                description: res.descriptions.display_indent_guides,
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
                description: res.descriptions.print_margin_column + '...',
                exec: editor => this.core.promptPrintMarginColumn(),
                readOnly: true
            },
            {
                name: 'oedShowPrintMargin',
                description: res.descriptions.show_print_margin,
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
                description: res.descriptions.animated_scroll,
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
                description: res.descriptions.fade_fold_widgets,
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
                description: res.descriptions.scroll_past_end + '...',
                exec: editor => this.core.selectScrollPastEnd(),
                readOnly: true
            },
            {
                name: 'oedShowFoldWidgets',
                description: res.descriptions.show_fold_widgets,
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
                description: res.descriptions.show_invisibles,
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
                description: res.descriptions.vertical_scroll_bar_always_visible,
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
                description: res.descriptions.holizontal_scroll_bar_always_visible,
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
                description: res.descriptions.use_textarea_for_ime,
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
                description: res.descriptions.font_family + '...',
                exec: editor => this.core.promptFontFamily(),
                readOnly: true
            },
            {
                name: 'oedFontSize',
                description: res.descriptions.font_size + '...',
                exec: editor => this.core.promptFontSize(),
                readOnly: true
            },
            {
                name: 'oedTheme',
                description: res.descriptions.theme + '...',
                exec: editor => this.core.selectTheme(),
                readOnly: true
            },
        ];
        this.addCommands(editor, commands);
    }

    initializeExtensionsMenu(editor) {
        const res = new Res();
        const commands = [
            {
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
            },
            {
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
            },
            {
                name: 'oedEnableSnippets',
                description: res.descriptions.enable_snippets,
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
                description: res.descriptions.enable_emmet,
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
                description: res.descriptions.use_elastic_tabstops,
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
        const res = new Res();
        const commands = [
            {
                name: 'oedKeyboardHandler',
                description: res.descriptions.keyboard_handler + '...',
                exec: editor => this.core.selectKeyboardHandler(),
                readOnly: true
            },
            {
                name: 'oedMenuButton',
                description: res.descriptions.menu_button + '...',
                exec: editor => this.core.selectMenuButton(),
                readOnly: true
            },
            {
                name: 'oedExportOptions',
                description: res.descriptions.export_options,
                exec: editor => this.core.exportOptionsA(),
                readOnly: true
            },
            {
                name: 'oedImportOptions',
                description: res.descriptions.import_options + '...',
                exec: editor => this.core.importOptionsA(),
                readOnly: true
            },
            {
                name: 'oedCacheList',
                description: res.descriptions.cache_list,
                exec: editor => this.core.cacheListA(),
                readOnly: true
            },
            {
                name: 'oedChangeLog',
                description: res.descriptions.change_log,
                exec: editor => this.core.changeLogA(),
                readOnly: true
            },
            {
                name: 'oedOpenSourceLisence',
                description: res.descriptions.open_source_lisence,
                exec: editor => this.core.openSourceLisenceA(),
                readOnly: true
            },
            {
                name: 'oedAbout',
                description: res.descriptions.about,
                exec: editor => this.core.aboutA(),
                readOnly: true
            },
        ];
        this.addCommands(editor, commands);
    }

    initializeTopAppBar(editor) {
        const res = new Res();
        const commands = [
            {
                name: 'oedToggleFileList',
                description: res.descriptions.toggle_file_list,
                bindKey: {win: 'Ctrl-Shift-F', mac: 'Command-Shift-F'},
                exec: editor => document.dispatchEvent(new ToggleDrawerEvent()),
                readOnly: true
            },
            {
                name: 'oedToggleFileMenu',
                description: res.descriptions.toggle_file_menu,
                bindKey: {win: 'Alt-I'},
                exec: editor => document.getElementById('button-file').click(),
                readOnly: true
            },
            {
                name: 'oedToggleEditMenu',
                description: res.descriptions.toggle_edit_menu,
                bindKey: {win: 'Alt-D'},
                exec: editor => document.getElementById('button-edit').click(),
                readOnly: true
            },
            {
                name: 'oedToggleSearchMenu',
                description: res.descriptions.toggle_search_menu,
                bindKey: {win: 'Alt-S'},
                exec: editor => document.getElementById('button-search').click(),
                readOnly: true
            },
            {
                name: 'oedToggleCodeMenu',
                description: res.descriptions.toggle_code_menu,
                bindKey: {win: 'Alt-C'},
                exec: editor => document.getElementById('button-code').click(),
                readOnly: true
            },
            {
                name: 'oedToggleViewMenu',
                description: res.descriptions.toggle_view_menu,
                bindKey: {win: 'Alt-V'},
                exec: editor => document.getElementById('button-view').click(),
                readOnly: true
            },
            {
                name: 'oedToggleExtensionsMenu',
                description: res.descriptions.toggle_extensions_menu,
                bindKey: {win: 'Alt-X'},
                exec: editor => document.getElementById('button-extensions').click(),
                readOnly: true
            },
            {
                name: 'oedToggleHelpMenu',
                description: res.descriptions.toggle_help_menu,
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
