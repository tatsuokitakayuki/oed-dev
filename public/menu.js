import {FocusEditorEvent} from '/focus_editor_event.js';
import {MaterialHelper} from '/material_helper.js';
import {ChangeDrawerItemEvent} from '/change_drawer_item_event.js';
import {ChangeStatusbarEvent} from '/change_statusbar_event.js';
import {UiHelper} from '/ui_helper.js';

export class Menu extends UiHelper {
    constructor(core, menuId) {
        super();
        this.core = core;
        this.menuId = menuId;
        this.menu = new mdc.menu.MDCMenu(document.getElementById(menuId));
        this.itemData = null;
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
        document.getElementById(this.menuId)
            .addEventListener('keyup', event => this.onKeyUp(event), options);
        const materialHelper = new MaterialHelper();
        materialHelper.menuItems(document.getElementById(this.itemData.id), this.itemData.items);
    }

    onAction(event) {
        this.toggle();
        try {
            this.core.getEditor().execCommand(
                this.core.idToName(
                    this.menu.items[event.detail.index].id.slice(
                        (this.menuId + '-').length
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
        document.dispatchEvent(new ChangeDrawerItemEvent(index, index));
        document.dispatchEvent(new ChangeStatusbarEvent(this.core.getEditor()));
    }

    onKeyUp(event) {
        switch(event.code) {
            case 'ArrowRight':
                this.toggle();
                this.core.nextMenu(this.menuId);
                break;
            case 'ArrowLeft':
                this.toggle();
                this.core.previousMenu(this.menuId);
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
            document.getElementById(this.menuId).focus();
        } else {
            this.resetTabindex();
            document.getElementById(this.menuId).blur();
        }
    }

    updateMenuItems() {}
}
