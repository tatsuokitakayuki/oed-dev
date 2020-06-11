import {ChangeAppBarEvent} from '/change_app_bar_event.js';
import {ChangeDrawerItemEvent} from '/change_drawer_item_event.js';
import {ThemeHelper} from '/theme_helper.js';
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
        if (flags.all || flags.editor) {
            this.updateEditor(index);
        }
        if (flags.all || flags.draweritem) {
            document.dispatchEvent(new ChangeDrawerItemEvent(index, active));
        }
        if (flags.all || flags.appbar) {
            document.dispatchEvent(new ChangeAppBarEvent(index));
        }
        if (flags.all || flags.theme) {
            this.updateTheme();
        }
    }

    updateEditor(index) {
        this.core.editor.setSession(this.core.getEditSession(index));
        this.core.editor.setReadOnly(this.core.isReadOnly(index));
    }

    updateTheme() {
        const theme = this.core.getOption('theme');
        if (theme) {
            const element = document.getElementById('app-view');
            const themeHelper = new ThemeHelper();
            if (themeHelper.isDark(theme)) {
                element.setAttribute('class', 'mdc-typography oed-dark');
            } else {
                element.setAttribute('class', 'mdc-typography oed-light');
            }
        }
    }
}
