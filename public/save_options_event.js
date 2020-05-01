export class SaveOptionsEvent extends CustomEvent {
    constructor(editor, options) {
        super('Options:save', {detail: {editor: editor, options: options}});
    }
}
