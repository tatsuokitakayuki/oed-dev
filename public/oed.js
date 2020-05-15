import {ChangeSnackbarEvent} from '/change_snackbar_event.js';
import {Core} from '/core.js';

const core = new Core();
let newWorker = null;

window.addEventListener('DOMContentLoaded', () => core.initializeA());
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        if (navigator.serviceWorker.controller) {
            console.log('[oed.js] Active service worker found, no need to register');
        } else {
            navigator.serviceWorker.register('./sw.js', {scope: './'})
                .then(reg => {
                    console.log('[oed.js] Service worker has been registered for scope: ' + reg.scope);
                    reg.addEventListener('updatefound', () => {
                        newWorker = reg.installing;
                        newWorker.addEventListener('statechange', () => {
                            switch (newWorker.state) {
                                case 'installed':
                                    if (navigator.serviceWorker.controller) {
                                        document.dispatchEvent(new ChangeSnackbarEvent('アップデートしたからリロードしてね。', true, null));
                                    }
                                    break;
                                default:
                                    break;
                            }
                        });
                    });
                });
            let refreshing = false;
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (refreshing) return;
                window.location.reload();
                refreshing = true;
            });
        }
    });
}
