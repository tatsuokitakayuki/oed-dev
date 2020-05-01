export class SaveOptionsEditorEvent extends CustomEvent {
    constructor(options) {
        super('Editor:saveoptions', {detail: {options: options}});
    }
}
