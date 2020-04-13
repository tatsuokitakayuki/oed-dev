import {ChangeSnackbarEvent} from '/change_snackbar_event.js';
import {ChangeViewEvent} from '/change_view_event.js';

export class Keybinding {
    
    constructor(core) {
        this.core = core;
    }

    initializeFileList() {
        this.core.getEditor().commands.addCommand({
            name: 'oedNextFile',
            description: 'Next file',
            bindKey: {win: 'Ctrl-Tab', mac: 'Command-Tab'},
            exec: editor => this.core.nextFile(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedPreviousFile',
            description: 'Previous file',
            bindKey: {win: 'Ctrl-Shift-Tab', mac: 'Command-Shift-Tab'},
            exec: editor => this.core.previousFile(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile1',
            description: 'Select file 1',
            bindKey: {win: 'Ctrl-1', mac: 'Command-1'},
            exec: editor => this.core.selectFile(0),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile2',
            description: 'Select file 2',
            bindKey: {win: 'Ctrl-2', mac: 'Command-2'},
            exec: editor => this.core.selectFile(1),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile3',
            description: 'Select file 3',
            bindKey: {win: 'Ctrl-3', mac: 'Command-3'},
            exec: editor => this.core.selectFile(2),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile4',
            description: 'Select file 4',
            bindKey: {win: 'Ctrl-4', mac: 'Command-4'},
            exec: editor => this.core.selectFile(3),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile5',
            description: 'Select file 5',
            bindKey: {win: 'Ctrl-5', mac: 'Command-5'},
            exec: editor => this.core.selectFile(4),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile6',
            description: 'Select file 6',
            bindKey: {win: 'Ctrl-6', mac: 'Command-6'},
            exec: editor => this.core.selectFile(5),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile7',
            description: 'Select file 7',
            bindKey: {win: 'Ctrl-7', mac: 'Command-7'},
            exec: editor => this.core.selectFile(6),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFile8',
            description: 'Select file 8',
            bindKey: {win: 'Ctrl-8', mac: 'Command-8'},
            exec: editor => this.core.selectFile(7),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSelectFileLast',
            description: 'Select file last',
            bindKey: {win: 'Ctrl-9', mac: 'Command-9'},
            exec: editor => this.core.lastFile(),
            readOnly: true
        });
    }

    initializeFileMenu() {
        this.core.getEditor().commands.addCommand({
            name: 'oedNewFile',
            description: 'New file',
            bindKey: {win: 'Ctrl-N', mac: 'Command-N'},
            exec: editor => this.core.newFileA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedOpenFile',
            description: 'Open file...',
            bindKey: {win: 'Ctrl-O', mac: 'Command-O'},
            exec: editor => this.core.openSelectFileA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedDownloadFile',
            description: 'Download file',
            bindKey: {win: 'Ctrl-S', mac: 'Command-S'},
            exec: editor => this.core.downloadFile(this.core.getActive()),
            readOnly: false
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedRenameFile',
            description: 'Rename file...',
            bindKey: {win: 'Alt-R', mac: 'Option-R'},
            exec: editor => this.core.renameFile(this.core.getActive(), null, null),
            readOnly: false
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFileDecoding',
            description: 'File decoding...',
            exec: editor => this.core.selectFileDecoding(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFirstLineNumber',
            description: 'First line number...',
            exec: editor => this.core.promptFirstLineNumber(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFoldStyle',
            description: 'Fold style...',
            exec: editor => this.core.selectFoldStyle(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedMode',
            description: 'Language mode...',
            exec: editor => this.core.selectLanguageMode(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedNewLineMode',
            description: 'New line mode...',
            exec: editor => this.core.selectNewLineMode(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedWrap',
            description: 'Soft wrap...',
            exec: editor => this.core.selectWrap(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedTabSize',
            description: 'Tab size...',
            exec: editor => this.core.promptTabSize(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedUseSoftTabs',
            description: 'Use soft tabs',
            exec: editor =>
                editor.setOption('useSoftTabs', !editor.getOption('useSoftTabs')),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedSaveEditSessionOptions',
            description: 'Save edit session options',
            exec: editor => {
                this.core.saveSessionOptions();
                this.core.saveOedOptions();
                document.dispatchEvent(
                    new ChangeSnackbarEvent('Saved edit session options.', null)
                );
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedCloseFile',
            description: 'Close file...',
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
        this.core.getEditor().commands.addCommand({
            name: 'oedAutoScrollEditorIntoView',
            description: 'Auto scroll editor into view',
            exec: editor => {
                editor.setOption(
                    'autoScrollEditorIntoView',
                    !editor.getOption('autoScrollEditorIntoView')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedBehavioursEnabled',
            description: 'Behaviours enabled',
            exec: editor => {
                editor.setOption(
                    'behavioursEnabled', !editor.getOption('behavioursEnabled')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedCopyWithEmptySelection',
            description: 'Copy with empty selection',
            exec: editor => {
                editor.setOption(
                    'copyWithEmptySelection',
                    !editor.getOption('copyWithEmptySelection')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedCursorStyle',
            description: 'Cursor style...',
            exec: editor => this.core.selectCursorStyle(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableLinking',
            description: 'Enable linking',
            exec: editor => {
                editor.setOption(
                    'enableLinking', !editor.getOption('enableLinking')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableMultiselect',
            description: 'Enable multiselect',
            exec: editor => {
                editor.setOption(
                    'enableMultiselect', !editor.getOption('enableMultiselect')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedHighlightActiveLine',
            description: 'Highlight active line',
            exec: editor => {
                editor.setOption(
                    'highlightActiveLine',
                    !editor.getOption('highlightActiveLine')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedHighlightSelectedWord',
            description: 'Highlight selected word',
            exec: editor => {
                editor.setOption(
                    'highlightSelectedWord',
                    !editor.getOption('highlightSelectedWord')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedMergeUndoDeltas',
            description: 'Merge undo deltas...',
            exec: editor => this.core.selectMergeUndoDeltas(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedNavigateWithinSoftTabs',
            description: 'Navigate within soft tabs',
            exec: editor => {
                editor.setOption(
                    'navigateWithinSoftTabs',
                    !editor.getOption('navigateWithinSoftTabs')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedReadOnly',
            description: 'Read only',
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
            description: 'Selection style',
            exec: editor => {
                editor.setOption(
                    'selectionStyle',
                    editor.getOption('selectionStyle') === 'line' ? 'text' : 'line'
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedWrapBehavioursEnabled',
            description: 'Wrap behaviours enabled',
            exec: editor => {
                editor.setOption(
                    'wrapBehavioursEnabled',
                    !editor.getOption('wrapBehavioursEnabled')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowGutter',
            description: 'Show gutter',
            exec: editor => {
                editor.setOption('showGutter', !editor.getOption('showGutter'));
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFixedWidthGutter',
            description: 'Fixed width gutter',
            exec: editor => {
                editor.setOption(
                    'fixedWidthGutter', !editor.getOption('fixedWidthGutter')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedHighlightGutterLine',
            description: 'Highlight gutter line',
            exec: editor => {
                editor.setOption(
                    'highlightGutterLine',
                    !editor.getOption('highlightGutterLine')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowLineNumbers',
            description: 'Show line numbers',
            exec: editor => {
                editor.setOption(
                    'showLineNumbers', !editor.getOption('showLineNumbers')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedDisplayIndentGuides',
            description: 'Display indent guides',
            exec: editor => {
                editor.setOption(
                    'displayIndentGuides',
                    !editor.getOption('displayIndentGuides')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedPrintMarginColumn',
            description: 'Print margin column...',
            exec: editor => this.core.promptPrintMarginColumn(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowPrintMargin',
            description: 'Show print margin',
            exec: editor => {
                editor.setOption(
                    'showPrintMargin', !editor.getOption('showPrintMargin')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedAnimatedScroll',
            description: 'Animated scroll',
            exec: editor => {
                editor.setOption(
                    'animatedScroll', !editor.getOption('animatedScroll')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFadeFoldWidgets',
            description: 'Fade fold widgets',
            exec: editor => {
                editor.setOption(
                    'fadeFoldWidgets', !editor.getOption('fadeFoldWidgets')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedScrollPastEnd',
            description: 'Scroll past end...',
            exec: editor => this.core.selectScrollPastEnd(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowFoldWidgets',
            description: 'Show fold widgets',
            exec: editor => {
                editor.setOption(
                    'showFoldWidgets', !editor.getOption('showFoldWidgets')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowInvisibles',
            description: 'Show invisibles',
            exec: editor => {
                editor.setOption(
                    'showInvisibles', !editor.getOption('showInvisibles')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedVScrollBarAlwaysVisible',
            description: 'Vertical scroll bar always visible',
            exec: editor => {
                editor.setOption(
                    'vScrollBarAlwaysVisible',
                    !editor.getOption('vScrollBarAlwaysVisible')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedHScrollBarAlwaysVisible',
            description: 'Holizontal scroll bar always visible',
            exec: editor => {
                editor.setOption(
                    'hScrollBarAlwaysVisible',
                    !editor.getOption('hScrollBarAlwaysVisible')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFontSize',
            description: 'Font size...',
            exec: editor => this.core.promptFontSize(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFontFamily',
            description: 'Font family...',
            exec: editor => this.core.promptFontFamily(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedTheme',
            description: 'Theme...',
            exec: editor => this.core.selectTheme(),
            readOnly: true
        });
    }

    initializeExtensionsMenu() {
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableBasicAutocompletion',
            description: 'Enable basic autocompletion',
            exec: editor => {
                editor.setOption(
                    'enableBasicAutocompletion',
                    !editor.getOption('enableBasicAutocompletion')
                );
                this.core.saveExtensionsOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableLiveAutocompletion',
            description: 'Enable live autocompletion',
            exec: editor => {
                editor.setOption(
                    'enableLiveAutocompletion',
                    !editor.getOption('enableLiveAutocompletion')
                );
                this.core.saveExtensionsOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableSnippets',
            description: 'Enable snippets',
            exec: editor => {
                editor.setOption(
                    'enableSnippets', !editor.getOption('enableSnippets')
                );
                this.core.saveExtensionsOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableEmmet',
            description: 'Enable emmet',
            exec: editor => {
                editor.setOption(
                    'enableEmmet', !editor.getOption('enableEmmet')
                );
                this.core.saveExtensionsOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedUseElasticTabstops',
            description: 'Use elastic tabstops',
            exec: editor => {
                editor.setOption(
                    'useElasticTabstops',
                    !editor.getOption('useElasticTabstops')
                );
                this.core.saveExtensionsOptions();
            },
            readOnly: true
        });
    }

    initializeHelpMenu() {
        this.core.getEditor().commands.addCommand({
            name: 'oedKeybinding',
            description: 'keybinding...',
            exec: editor => this.core.selectKeybinding(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedExportOptions',
            description: 'Export options',
            exec: editor => this.core.exportOptionsA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedImportOptions',
            description: 'Import options...',
            exec: editor => this.core.importOptionsA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedCacheList',
            description: 'Cache list',
            exec: editor => this.core.cacheListA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedChangeLog',
            description: 'Change log',
            exec: editor => this.core.changeLogA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedAbout',
            description: 'About',
            exec: editor => this.core.aboutA(),
            readOnly: true
        });
    }

    initializeTopAppBar() {
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleFileList',
            description: 'Toggle file list',
            bindKey: {win: 'Ctrl-Shift-F', mac: 'Command-Shift-F'},
            exec: editor => this.core.toggleFileList(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleFileMenu',
            description: 'Toggle file menu',
            bindKey: {win: 'Alt-I'},
            exec: editor => this.core.toggleFileMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleEditMenu',
            description: 'Toggle edit menu',
            bindKey: {win: 'Alt-D'},
            exec: editor => this.core.toggleEditMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleSearchMenu',
            description: 'Toggle search menu',
            bindKey: {win: 'Alt-S'},
            exec: editor => this.core.toggleSearchMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleCodeMenu',
            description: 'Toggle code menu',
            bindKey: {win: 'Alt-C'},
            exec: editor => this.core.toggleCodeMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleViewMenu',
            description: 'Toggle view menu',
            bindKey: {win: 'Alt-V'},
            exec: editor => this.core.toggleViewMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleExtensionsMenu',
            description: 'Toggle extensions menu',
            bindKey: {win: 'Alt-X'},
            exec: editor => this.core.toggleExtensionsMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleHelpMenu',
            description: 'Toggle help menu',
            bindKey: {win: 'Alt-H'},
            exec: editor => this.core.toggleHelpMenu(),
            readOnly: true
        });
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
