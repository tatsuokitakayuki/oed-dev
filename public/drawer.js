import {ChangeViewEvent} from '/change_view_event.js';
import {FocusEditorEvent} from '/focus_editor_event.js';
import {MaterialHelper} from '/material_helper.js';
import {StatusHelper} from '/status_helper.js';

export class Drawer {
    constructor(core) {
        this.core = core;
        this.drawer = new mdc.drawer.MDCDrawer(
            document.getElementById('drawer-view')
        );
        this.fileListView = document.getElementById('file-list');
    }

    initialize() {
        const options = {passive: true};
        this.drawer.listen('MDCDrawer:opened', () => this.onOpened(), options);
        this.drawer.listen('MDCDrawer:closed', () => this.onClosed(), options);
        this.fileListView.singleSelection = true;
        this.fileListView.wrapFocus = true;
        this.fileListView.addEventListener(
            'MDCList:action', event => this.onAction(event), options
        );
        document.addEventListener(
            'Drawer:changeitem', event => this.onChangeItem(event), options
        );
        document.addEventListener(
            'Drawer:change', event => this.onChange(event), options
        );
    }

    onOpened() {
        this.core.getEditor().resize();
        this.fileListView.childNodes[this.core.getActive()].focus();
    }

    onClosed() {
        this.core.getEditor().resize();
        this.fileListView.childNodes[this.core.getActive()].blur();
        document.dispatchEvent(new FocusEditorEvent(this.core.getEditor()));
    }

    onAction(event) {
        this.updateItem(this.core.getActive(), -1);
        const index = event.detail.index;
        this.core.updateEditSession(index);
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: true, appbar: true}
            )
        );
        document.dispatchEvent(new FocusEditorEvent(this.core.getEditor()));
        this.updateItem(index, index);
    }

    onChangeItem(event) {
        this.updateItem(event.detail.index, event.detail.active);
    }

    onChange(event) {
        this.toggle();
    }

    isOpen() {
        return this.drawer.open;
    }

    toggle() {
        this.drawer.open = !this.isOpen();
    }

    addItem(index, active) {
        const item = this.buildItem(index, index == active);
        this.fileListView.appendChild(item);
    }

    removeItem(index) {
        this.fileListView.removeChild(this.fileListView.childNodes[index]);
    }

    updateItem(index, active) {
        const newItem = this.buildItem(index, index == active);
        this.fileListView.replaceChild(
            newItem, this.fileListView.childNodes[index]
        );
        if (index == active) {
            this.fileListView.childNodes[index].scrollIntoView(
                {behavior: 'auto', block: 'center'}
            );
        }
    }

    hasItem(index) {
        return Boolean(this.fileListView.childNodes[index]);
    }

    buildItem(index, selected) {
        const materialHelper = new MaterialHelper();
        const item = materialHelper.listItem(
            'file-list-item-' +
            String(this.core.getTime(index)) +
            '-' +
            String(index)
        );
        if (selected) {
            item.setAttribute('class', 'mdc-list-item mdc-list-item--selected');
        }
        item.setAttribute('aria-selected', String(selected));
        item.setAttribute('title', this.core.getUrl(index).href);
        item.appendChild(materialHelper.listItemIcon(this.getIconName(index)));
        const text = materialHelper.listItemText(null);
        text.appendChild(materialHelper.listItemPrimaryText(
            this.core.getDisplayName(index))
        );
        const statusHelper = new StatusHelper();
        text.appendChild(materialHelper.listItemSecondaryText(
            statusHelper.buildFileListItemSecondaryText(
                this.core.getEditor(), this.core.getEditSession(index))
            )
        );
        item.appendChild(text);
        return item;
    }

    getIconName(index) {
        let iconName = 'insert_drive_file';
        if (this.core.isCoreFile(index)) {
            iconName = 'info';
        }
        return iconName;
    }
}
