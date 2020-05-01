import {ChangeAppBarEvent} from '/change_app_bar_event.js';
import {ChangeDrawerItemEvent} from '/change_drawer_item_event.js';
import {SaveOptionsEvent} from '/save_options_event.js';

export class AppView {
    constructor(core) {
        this.core = core;
    }

    initialize() {
        const options = {passive: true};
        document.addEventListener(
            'View:change', event => this.onChange(event), options
        );
        document.addEventListener(
            'Editor:saveoptions',
            event => document.dispatchEvent(
                new SaveOptionsEvent(this.core.editor, event.detail.options)
            ),
            options
        );
    }

    destory() {
        document.removeEventListener(
            'View:change', event => this.onChange(event)
        );
        document.removeEventListener(
            'Editor:saveoptions',
            event => document.dispatchEvent(
                new SaveOptionsEvent(this.core.editor, event.detail.options)
            )
        );
    }

    onChange(event) {
        if (event) {
            this.update(
                event.detail.index, event.detail.active, event.detail.flags
            );
        }
    }

    update(index, active, flags) {
        if (flags.editor) {
            this.updateEditor(index);
        }
        if (flags.draweritem) {
            document.dispatchEvent(new ChangeDrawerItemEvent(index, active));
        }
        if (flags.appbar) {
            document.dispatchEvent(new ChangeAppBarEvent(index));
        }
    }

    updateEditor(index) {
        this.core.editor.setSession(this.core.getEditSession(index));
        this.core.editor.setReadOnly(this.core.isReadOnly(index));
    }
}
