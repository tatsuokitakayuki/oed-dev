import {StatusHelper} from '/status_helper.js';

export class Statusbar {
    initialize() {
        this.element = document.getElementById('statusbar');
        if (this.element) {
            document.addEventListener(
                'Statusbar:change',
                event => this.onChange(event),
                {passive: true}
            );
        }
    }

    onChange(event) {
        const statusHelper = new StatusHelper();
        this.element.textContent = statusHelper.buildStatusText(event.detail.editor);
    }
}
