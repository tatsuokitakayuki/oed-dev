export class ChangeViewEvent extends CustomEvent {
    
    constructor(index, active, flags) {
        super(
            'View:change',
            {detail: {index: index, active: active, flags: flags}}
        );
    }
}
