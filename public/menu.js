import {FocusEditorEvent} from '/focus_editor_event.js';
import {MaterialHelper} from '/material_helper.js';
import {ChangeDrawerItemEvent} from '/change_drawer_item_event.js';
import {ChangeMenuButtonEvent} from '/change_menu_button_event.js';
import {ChangeStatusbarEvent} from '/change_statusbar_event.js';
import {UiHelper} from '/ui_helper.js';

export class Menu extends UiHelper {
    constructor(core, id) {
        super();
        this.core = core;
        this.id = id;
        this.menu = new mdc.menu.MDCMenu(document.getElementById(id));
        this.surface = new mdc.menuSurface.MDCMenuSurface(
            document.getElementById(id)
        );
        this.itemData = null;
        this.name = this.id.slice('menu-'.length);
        this.acted = false;
    }

    initialize() {
        super.initialize();
        this.menu.quickOpen = true;
        this.menu.singleSelection = true;
        this.menu.setDefaultFocusState(mdc.menu.DefaultFocusState.FIRST_ITEM);
        const options = {passive: true};
        this.menu.listen(
            'MDCMenu:selected', event => this.onAction(event), options
        );
        this.surface.listen(
            'MDCMenuSurface:closed', () => this.onClosed(), options
        );
        document.getElementById(this.id)
            .addEventListener('keyup', event => this.onKeyUp(event), options);
        const materialHelper = new MaterialHelper();
        materialHelper.menuItems(
            document.getElementById(this.itemData.id), this.itemData.items
        );
    }

    onClosed() {
        document.dispatchEvent(
            new ChangeMenuButtonEvent({name: this.name, enabled: true})
        );
        if (!this.acted) {
            document.dispatchEvent(new FocusEditorEvent(this.core.getEditor()));
        }
        this.acted = false;
    }

    onAction(event) {
        this.acted = true;
        this.toggle();
        try {
            this.core.getEditor().execCommand(
                this.core.idToName(
                    this.menu.items[event.detail.index].id.slice(
                        (this.id + '-').length
                    )
                )
            );
        } catch (e) {
            console.error(e);
        }
        if (!this.menu.items[event.detail.index].textContent.includes('...')) {
            document.dispatchEvent(new FocusEditorEvent(this.core.getEditor()));
        }
        const index = this.core.getActive();
        if (index != -1) {
            document.dispatchEvent(new ChangeDrawerItemEvent(index, index));
            document.dispatchEvent(
                new ChangeStatusbarEvent(this.core.getEditor())
            );
        }
    }

    onKeyUp(event) {
        this.acted = true;
        switch(event.code) {
            case 'ArrowRight':
                this.toggle();
                this.core.nextMenu(this.id);
                break;
            case 'ArrowLeft':
                this.toggle();
                this.core.previousMenu(this.id);
                break;
            default:
                break;
        }
    }

    isOpen() {
        return this.menu.open;
    }

    toggle() {
        this.menu.open = !this.isOpen();
        if (this.isOpen()) {
            this.updateMenuItems();
            this.setTabindex();
            document.getElementById(this.id).focus();
            document.dispatchEvent(
                new ChangeMenuButtonEvent({name: this.name, enabled: false})
            );
        } else {
            this.resetTabindex();
            document.getElementById(this.id).blur();
        }
    }

    updateMenuItems() {}
}
