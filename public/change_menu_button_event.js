export class ChangeMenuButtonEvent extends CustomEvent {
    constructor(style) {
        super('MenuButton:change', {detail: {style: style}});
    }
}
