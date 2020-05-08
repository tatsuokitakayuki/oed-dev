export class ChangeAppBarEvent extends CustomEvent {
    constructor(index, buttons) {
        super('AppBar:change', {detail: {index: index, buttons: buttons}});
    }
}
