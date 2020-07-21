export class RenameFileEvent extends CustomEvent {
    constructor(name, callback, args) {
        super(
            'File:rename',
            {detail: {name: name, callback: callback, args: args}}
        );
    }
}
