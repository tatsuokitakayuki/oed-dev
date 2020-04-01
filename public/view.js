import {ChangeAppBarEvent} from '/change_app_bar_event.js';
import {ChangeDrawerItemEvent} from '/change_drawer_item_event.js';
import {FileHelper} from '/file_helper.js';

export class View {

    constructor(core) {
        this.core = core;
    }

    initialize() {
        document
            .addEventListener(
                'View:change', event => this.onChange(event), {passive: true}
            );
    }

    destory() {
        document
            .removeEventListener(
                'View:change', event => this.onChange(event)
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
        //const fileHelper = new FileHelper();
        //this.core.getEditorSession().setMode(fileHelper.getMode(this.core.getName(index)));
    }
}
