export class ChangeStatusbarEvent extends CustomEvent {
    constructor(editor) {
        super('Statusbar:change', {detail: {editor: editor}});
    }
}
