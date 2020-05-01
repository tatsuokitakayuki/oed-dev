import {MaterialHelper} from '/material_helper.js';
import {UIHelper} from '/ui_helper.js';

export class Menu extends UIHelper {
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
        if (!this.menu.items[event.detail.index].id.endsWith('...')) {
            this.core.focusEditor();
        }
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
            this.setTabindex();
            document.getElementById(this.menuId).focus();
        } else {
            this.resetTabindex();
            document.getElementById(this.menuId).blur();
        }
    }

    updateMenuItems() {}
}
