import {ChangeViewEvent} from '/change_view_event.js';

export class Keybinding {
    
    constructor(core) {
        this.core = core;
    }

    initializeFileList() {
        this.core.getEditor().commands.addCommand({
            name: 'toedNextFile',
            bindKey: {win: 'Ctrl-Tab', mac: 'Command-Tab'},
            exec: editor => this.core.nextFile(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedPreviousFile',
            bindKey: {win: 'Ctrl-Shift-Tab', mac: 'Command-Shift-Tab'},
            exec: editor => this.core.previousFile(),
            readOnly: true
        });
    }

    initializeFileMenu() {
        this.core.getEditor().commands.addCommand({
            name: 'toedNewFile',
            bindKey: {win: 'Ctrl-N', mac: 'Command-N'},
            exec: editor => this.core.newFileA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedOpenFile',
            bindKey: {win: 'Ctrl-O', mac: 'Command-O'},
            exec: editor => this.core.openSelectFileA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedDownloadFile',
            bindKey: {win: 'Ctrl-S', mac: 'Command-S'},
            exec: editor => this.core.downloadFile(this.core.getActive()),
            readOnly: false
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedRenameFile',
            bindKey: {win: 'Alt-R', mac: 'Option-R'},
            exec: editor => this.core.renameFile(this.core.getActive(), null, null),
            readOnly: false
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedCloseFile',
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
            name: 'toedAutoScrollEditorIntoView',
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
            name: 'toedBehavioursEnabled',
            exec: editor => {
                editor.setOption(
                    'behavioursEnabled', !editor.getOption('behavioursEnabled')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedCopyWithEmptySelection',
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
            name: 'toedCursorStyle',
            exec: editor => this.core.selectCursorStyle(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedEnableLinking',
            exec: editor => {
                editor.setOption(
                    'enableLinking', !editor.getOption('enableLinking')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedEnableMultiselect',
            exec: editor => {
                editor.setOption(
                    'enableMultiselect', !editor.getOption('enableMultiselect')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedHighlightActiveLine',
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
            name: 'toedHighlightSelectedWord',
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
            name: 'toedMergeUndoDeltas',
            exec: editor => this.core.selectMergeUndoDeltas(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedNavigateWithinSoftTabs',
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
            name: 'toedReadOnly',
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
            name: 'toedSelectionStyle',
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
            name: 'toedUseSoftTabs',
            exec: editor => {
                editor.setOption(
                    'useSoftTabs', !editor.getOption('useSoftTabs')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedWrapBehavioursEnabled',
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
            name: 'toedShowGutter',
            exec: editor => {
                editor.setOption('showGutter', !editor.getOption('showGutter'));
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedFixedWidthGutter',
            exec: editor => {
                editor.setOption(
                    'fixedWidthGutter', !editor.getOption('fixedWidthGutter')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedHighlightGutterLine',
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
            name: 'toedShowLineNumbers',
            exec: editor => {
                editor.setOption(
                    'showLineNumbers', !editor.getOption('showLineNumbers')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedDisplayIndentGuides',
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
            name: 'toedPrintMarginColumn',
            exec: editor => this.core.promptPrintMarginColumn(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedShowPrintMargin',
            exec: editor => {
                editor.setOption(
                    'showPrintMargin', !editor.getOption('showPrintMargin')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedAnimatedScroll',
            exec: editor => {
                editor.setOption(
                    'animatedScroll', !editor.getOption('animatedScroll')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedFadeFoldWidgets',
            exec: editor => {
                editor.setOption(
                    'fadeFoldWidgets', !editor.getOption('fadeFoldWidgets')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedScrollPastEnd',
            exec: editor => this.core.selectScrollPastEnd(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedShowFoldWidgets',
            exec: editor => {
                editor.setOption(
                    'showFoldWidgets', !editor.getOption('showFoldWidgets')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedShowInvisibles',
            exec: editor => {
                editor.setOption(
                    'showInvisibles', !editor.getOption('showInvisibles')
                );
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedVScrollBarAlwaysVisible',
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
            name: 'toedHScrollBarAlwaysVisible',
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
            name: 'toedFontSize',
            exec: editor => this.core.promptFontSize(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedFontFamily',
            exec: editor => this.core.promptFontFamily(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedTheme',
            exec: editor => this.core.selectTheme(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedWrap',
            exec: editor => this.core.selectWrap(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedTabSize',
            exec: editor => this.core.promptTabSize(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedFirstLineNumber',
            exec: editor => this.core.promptFirstLineNumber(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedMode',
            exec: editor => this.core.selectMode(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedFoldStyle',
            exec: editor => this.core.selectFoldStyle(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedNewLineMode',
            exec: editor => this.core.selectNewLineMode(),
            readOnly: true
        });
    }

    initializeExtensionsMenu() {
        this.core.getEditor().commands.addCommand({
            name: 'toedEnableBasicAutocompletion',
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
            name: 'toedEnableLiveAutocompletion',
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
            name: 'toedEnableSnippets',
            exec: editor => {
                editor.setOption(
                    'enableSnippets', !editor.getOption('enableSnippets')
                );
                this.core.saveExtensionsOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedEnableEmmet',
            exec: editor => {
                editor.setOption(
                    'enableEmmet', !editor.getOption('enableEmmet')
                );
                this.core.saveExtensionsOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedUseElasticTabstops',
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
            name: 'toedKeybinding',
            exec: editor => this.core.selectKeybinding(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedExportOptions',
            exec: editor => this.core.exportOptionsA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedImportOptions',
            exec: editor => this.core.importOptionsA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedCacheList',
            exec: editor => this.core.cacheListA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedChangeLog',
            exec: editor => this.core.changeLogA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedAbout',
            exec: editor => this.core.aboutA(),
            readOnly: true
        });
    }

    initializeTopAppBar() {
        this.core.getEditor().commands.addCommand({
            name: 'toedToggleFileList',
            bindKey: {win: 'Ctrl-Shift-F', mac: 'Command-Shift-F'},
            exec: editor => this.core.toggleFileList(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedToggleFileMenu',
            bindKey: {win: 'Alt-I'},
            exec: editor => this.core.toggleFileMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedToggleEditMenu',
            bindKey: {win: 'Alt-D'},
            exec: editor => this.core.toggleEditMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedToggleSearchMenu',
            bindKey: {win: 'Alt-S'},
            exec: editor => this.core.toggleSearchMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedToggleCodeMenu',
            bindKey: {win: 'Alt-C'},
            exec: editor => this.core.toggleCodeMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedToggleViewMenu',
            bindKey: {win: 'Alt-V'},
            exec: editor => this.core.toggleViewMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedToggleExtensionsMenu',
            bindKey: {win: 'Alt-X'},
            exec: editor => this.core.toggleExtensionsMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'toedToggleHelpMenu',
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
