export class MoveDrawerEvent extends CustomEvent {
    constructor(command) {
        super('Drawer:move', {detail: {command: command}});
    }
}
