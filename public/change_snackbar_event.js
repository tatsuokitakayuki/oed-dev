export class ChangeSnackbarEvent extends CustomEvent {
    constructor(label, close, actions) {
        super(
            'Snackbar:change',
            {detail: {label: label, close: close, actions: actions}}
        );
    }
}
