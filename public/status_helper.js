export class StatusHelper {
    constructor() {
        this.separator = ' ';
        this.readOnly = '(RO)';
        this.modified = '(Mod)';
        this.recording = '(Rec)';
    }

    buildStatusText(editor, editSession = editor.getSession()) {
        const items = [];
        items.push(this.buildModeText(editor));
        items.push(
            editor.commands.recording ? this.recording + this.separator : ''
        );
        items.push(this.buildCursorPositionText(editor));
        items.push(this.buildSelectionText(editor));
        items.push(String(editSession.getValue().length) + this.separator);
        items.push(
            !editSession.getUndoManager().isClean() ? this.modified + this.separator : ''
        );
        items.push(
            editor.getOption('readOnly') ? this.readOnly + this.separator : ''
        );
        return items.join('').trim();
    }

    buildModeText(editor) {
        let modeText =
            editor.keyBinding.getStatusText(editor);
        if (!modeText) {
            return '';
        }
        return modeText + this.separator;
    }

    buildCursorPositionText(editor) {
        const cursorPosition = editor.getCursorPosition();
        cursorPosition.row += Number(editor.getOption('firstLineNumber'));
        return `${cursorPosition.row}:${cursorPosition.column}${this.separator}`;
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
}
