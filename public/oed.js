import {Core} from '/core.js';

const core = new Core();

window.addEventListener('DOMContentLoaded', () => core.initializeA());
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        if (navigator.serviceWorker.controller) {
            console.log('[oed.js] Active service worker found, no need to register');
        } else {
            navigator.serviceWorker.register('./sw.js', {scope: './'})
                .then(reg => {
                    console.log('[oed.js] Service worker has been registered for scope: ' + reg.scope);
                });
        }
    });
}
