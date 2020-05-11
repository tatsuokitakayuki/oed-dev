export class ToggleDrawerEvent extends CustomEvent {
    constructor() {
        super('Drawer:toggle');
    }
}
