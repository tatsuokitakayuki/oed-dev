export class ChangeEditorOptionEvent extends CustomEvent {
    constructor(name, value) {
        super('Editor:changeoption', {detail: {name: name, value: value}});
    }
}
