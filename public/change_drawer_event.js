export class ChangeDrawerEvent extends CustomEvent {
    constructor(command) {
        super('Drawer:change', {detail: {command: command}});
    }
}
