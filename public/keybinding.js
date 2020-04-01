import {ChangeViewEvent} from '/change_view_event.js';

export class Keybinding {
    
    constructor(core) {
        this.core = core;
    }

    initializeFileList() {
        this.core.getEditor().commands.addCommand({
            name: 'oedNextFile',
            bindKey: {win: 'Ctrl-Tab', mac: 'Command-Tab'},
            exec: editor => this.core.nextFile(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedPreviousFile',
            bindKey: {win: 'Ctrl-Shift-Tab', mac: 'Command-Shift-Tab'},
            exec: editor => this.core.previousFile(),
            readOnly: true
        });
    }

    initializeFileMenu() {
        this.core.getEditor().commands.addCommand({
            name: 'oedNewFile',
            bindKey: {win: 'Ctrl-N', mac: 'Command-N'},
            exec: editor => this.core.newFileA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedOpenFile',
            bindKey: {win: 'Ctrl-O', mac: 'Command-O'},
            exec: editor => this.core.openSelectFileA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedDownloadFile',
            bindKey: {win: 'Ctrl-S', mac: 'Command-S'},
            exec: editor => this.core.downloadFile(this.core.getActive()),
            readOnly: false
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedRenameFile',
            bindKey: {win: 'Alt-R', mac: 'Option-R'},
            exec: editor => this.core.renameFile(this.core.getActive(), null, null),
            readOnly: false
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedCloseFile',
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
            exec: editor => this.core.selectCursorStyle(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableLinking',
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
            exec: editor => this.core.selectMergeUndoDeltas(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedNavigateWithinSoftTabs',
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
            name: 'oedUseSoftTabs',
            exec: editor => {
                editor.setOption(
                    'useSoftTabs', !editor.getOption('useSoftTabs')
                );
                this.core.saveEditorOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedWrapBehavioursEnabled',
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
            exec: editor => {
                editor.setOption('showGutter', !editor.getOption('showGutter'));
                this.core.saveRendererOptions();
            },
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFixedWidthGutter',
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
            exec: editor => this.core.promptPrintMarginColumn(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowPrintMargin',
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
            exec: editor => this.core.selectScrollPastEnd(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedShowFoldWidgets',
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
            exec: editor => this.core.promptFontSize(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFontFamily',
            exec: editor => this.core.promptFontFamily(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedTheme',
            exec: editor => this.core.selectTheme(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedWrap',
            exec: editor => this.core.selectWrap(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedTabSize',
            exec: editor => this.core.promptTabSize(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFirstLineNumber',
            exec: editor => this.core.promptFirstLineNumber(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedMode',
            exec: editor => this.core.selectMode(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedFoldStyle',
            exec: editor => this.core.selectFoldStyle(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedNewLineMode',
            exec: editor => this.core.selectNewLineMode(),
            readOnly: true
        });
    }

    initializeExtensionsMenu() {
        this.core.getEditor().commands.addCommand({
            name: 'oedEnableBasicAutocompletion',
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
            exec: editor => this.core.selectKeybinding(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedExportOptions',
            exec: editor => this.core.exportOptionsA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedImportOptions',
            exec: editor => this.core.importOptionsA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedCacheList',
            exec: editor => this.core.cacheListA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedChangeLog',
            exec: editor => this.core.changeLogA(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedAbout',
            exec: editor => this.core.aboutA(),
            readOnly: true
        });
    }

    initializeTopAppBar() {
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleFileList',
            bindKey: {win: 'Ctrl-Shift-F', mac: 'Command-Shift-F'},
            exec: editor => this.core.toggleFileList(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleFileMenu',
            bindKey: {win: 'Alt-I'},
            exec: editor => this.core.toggleFileMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleEditMenu',
            bindKey: {win: 'Alt-D'},
            exec: editor => this.core.toggleEditMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleSearchMenu',
            bindKey: {win: 'Alt-S'},
            exec: editor => this.core.toggleSearchMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleCodeMenu',
            bindKey: {win: 'Alt-C'},
            exec: editor => this.core.toggleCodeMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleViewMenu',
            bindKey: {win: 'Alt-V'},
            exec: editor => this.core.toggleViewMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleExtensionsMenu',
            bindKey: {win: 'Alt-X'},
            exec: editor => this.core.toggleExtensionsMenu(),
            readOnly: true
        });
        this.core.getEditor().commands.addCommand({
            name: 'oedToggleHelpMenu',
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
