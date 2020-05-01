export class ChangeAppBarEvent extends CustomEvent {
    constructor(index) {
        super('AppBar:change', {detail: {index: index}});
    }
}
