export class FocusEditorEvent extends CustomEvent {
    constructor(editor) {
        super('OED:focuseditor', {detail: {editor: editor}});
    }
}
