import {ChangeSnackbarEvent} from '/change_snackbar_event.js';
import {Core} from '/core.js';
import {Res} from '/res.js';

const core = new Core();
let newWorker = null;
const onStateChange = () => {
    switch (newWorker.state) {
        case 'installed':
            if (navigator.serviceWorker.controller) {
                const res = new Res();
                document.dispatchEvent(
                    new ChangeSnackbarEvent(res.strings.updated_oed, true, null)
                );
            }
            break;
        default:
            break;
    }
};
const onLoad = () => {
    navigator.serviceWorker.register('./sw.js', {scope: './'}).then(reg => {
        console.log(
            '[oed.js] Service worker has been registered for scope: ' +
            reg.scope
        );
        reg.addEventListener('updatefound', () => {
            newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => onStatechange());
        });
    });
};

window.addEventListener('DOMContentLoaded', () => core.initializeA());
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => onLoad());
}
