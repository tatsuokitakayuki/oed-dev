export class ChangeMenuButtonEvent extends CustomEvent {
    constructor(detail) {
        super('MenuButton:change', {detail: detail});
    }
}
