export class StatusHelper {
    constructor() {
        this.separator = ' ';
        this.readOnly = '(RO)';
        this.modified = '(Mod)';
        this.recording = '(Rec)';
        this.overwrite = 'Overwrite';
        this.insert = 'Insert';
    }

    buildTitleAdditionalText(editor, editSession = editor.getSession()) {
        const items = [];
        items.push(this.buildRecordingText(editor));
        items.push(this.buildModifiedText(editSession));
        items.push(this.buildReadOnlyText(editor));
        return items.join('').trim();
    }

    buildFileListItemSecondaryText(editor, editSession = editor.getSession()) {
        const items = [];
        items.push(this.buildModifiedText(editSession));
        items.push(this.buildReadOnlyText(editor));
        items.push(this.buildLanguageModeText(editSession));
        return items.join('').trim();
    }

    buildStatusText(editor, editSession = editor.getSession()) {
        const items = [];
        items.push(this.buildInputModeText(editor));
        items.push(this.buildRecordingText(editor));
        items.push(this.buildCursorPositionText(editor));
        items.push(this.buildSelectionText(editor));
        items.push(this.buildLengthText(editSession));
        items.push(this.buildModifiedText(editSession));
        items.push(this.buildReadOnlyText(editor));
        items.push(this.buildLanguageModeText(editSession));
        items.push(this.buildOverwriteText(editSession));
        return items.join('').trim();
    }

    buildInputModeText(editor) {
        let inputMode = editor.keyBinding.getStatusText(editor);
        if (inputMode) {
            return inputMode + this.separator;
        }
        return '';
    }

    buildRecordingText(editor) {
        if (editor.commands.recording) {
            return this.recording + this.separator;
        }
        return '';
    }

    buildCursorPositionText(editor) {
        const cursorPosition = editor.getCursorPosition();
        cursorPosition.row += Number(editor.getOption('firstLineNumber'));
        return String(cursorPosition.row) + ':' +
            String(cursorPosition.column) + this.separator;
    }

    buildSelectionText(editor) {
        const selection = editor.selection;
        if (selection.isEmpty()) {
            return '';
        }
        const range = editor.getSelectionRange();
        return '(' + String(range.end.row - range.start.row) + ':' +
            String(range.end.column - range.start.column) + ')' +
            this.separator;
    }

    buildLengthText(editSession) {
        return String(editSession.getValue().length) + this.separator;
    }

    buildModifiedText(editSession) {
        if (!editSession.getUndoManager().isClean()) {
            return this.modified + this.separator;
        }
        return '';
    }

    buildReadOnlyText(editor) {
        if (editor.getOption('readOnly')) {
            return this.readOnly + this.separator;
        }
        return '';
    }

    buildOverwriteText(editSession) {
        if (editSession.getOption('overwrite')) {
            return this.overwrite + this.separator;
        }
        return this.insert + this.separator;
    }

    buildLanguageModeText(editSession) {
        const modeList = ace.require('ace/ext/modelist');
        const value = editSession.getOption('mode');
        const caption = modeList.modes
            .find(item => item.mode == value).caption;
        return caption + this.separator;
    }
}
