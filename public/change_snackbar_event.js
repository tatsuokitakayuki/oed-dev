export class ChangeSnackbarEvent extends CustomEvent {
    
    constructor(label, actions) {
        super('Snackbar:change', {detail: {label: label, actions: actions}});
    }
}
