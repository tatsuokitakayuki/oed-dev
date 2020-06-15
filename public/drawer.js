import {ChangeViewEvent} from '/change_view_event.js';
import {MaterialHelper} from '/material_helper.js';
import {UiHelper} from '/ui_helper.js';

export class Drawer extends UiHelper {
    constructor(core) {
        super();
        this.core = core;
        this.drawer = new mdc.drawer.MDCDrawer(document.getElementById('drawer-view'));
    }

    initialize() {
        const options = {passive: true};
        this.drawer.listen('MDCDrawer:opened', () => this.onOpened(), options);
        this.drawer.listen('MDCDrawer:closed', () => this.onClosed(), options);
        const fileListView = this.getFileListView();
        fileListView.singleSelection = true;
        fileListView.wrapFocus = true;
        fileListView.addEventListener(
            'MDCList:action', event => this.onAction(event), options
        );
        document.addEventListener(
            'Drawer:changeitem', event => this.onChange(event), options
        );
        document.addEventListener(
            'Drawer:toggle', () => this.toggle(), options
        );
    }

    onOpened() {
        this.core.getEditor().resize();
        this.getFileListView().childNodes[this.core.getActive()].focus();
    }

    onClosed() {
        this.core.getEditor().resize();
        this.getFileListView().childNodes[this.core.getActive()].blur();
        this.core.focusEditor();
    }

    onAction(event) {
        this.updateItem(this.core.getActive(), -1);
        const index = event.detail.index;
        this.core.updateEditSession(index);
        this.core.focusEditor();
        document.dispatchEvent(
            new ChangeViewEvent(
                index, index, {editor: true, appbar: true}
            )
        );
        this.updateItem(index, index);
    }

    onChange(event) {
        this.updateItem(event.detail.index, event.detail.active);
    }

    isOpen() {
        return this.drawer.open;
    }

    toggle() {
        this.drawer.open = !this.isOpen();
    }

    getFileListView() {
        return document.getElementById('file-list');
    }

    addItem(index, active) {
        const item = this.buildItem(index, index == active);
        this.getFileListView().appendChild(item);
    }

    removeItem(index) {
        const fileListView = this.getFileListView();
        fileListView.removeChild(fileListView.childNodes[index]);
    }

    updateItem(index, active) {
        const newItem = this.buildItem(index, index == active);
        const fileListView = this.getFileListView();
        fileListView.replaceChild(newItem, fileListView.childNodes[index]);
        if (index == active) {
            fileListView.childNodes[index].scrollIntoView(
                {behavior: 'auto', block: 'center'}
            );
        }
    }

    hasItem(index) {
        return Boolean(this.getFileListView().childNodes[index]);
    }

    buildItem(index, selected) {
        const materialHelper = new MaterialHelper();
        const item = materialHelper.listItem(
            'file-list-item-' + String(this.core.getTime(index)) + '-' + String(index)
        );
        if (selected) {
            item.setAttribute('class', 'mdc-list-item mdc-list-item--selected');
        }
        item.setAttribute('aria-selected', String(selected));
        item.setAttribute('title', this.core.getUrl(index).href);
        item.appendChild(materialHelper.listItemIcon(this.getIconName(index)));
        const text = materialHelper.listItemText(null);
        text.appendChild(materialHelper.listItemPrimaryText(this.core.getDisplayName(index)));
        text.appendChild(materialHelper.listItemSecondaryText(this.buildItemName(index)));
        item.appendChild(text);
        return item;
    }

    buildItemName(index) {
        const items = [];
        const cursorPosition = this.core.getEditor().getCursorPosition();
        cursorPosition.row += Number(this.core.getOption('firstLineNumber'));
        items.push(`${cursorPosition.row}:${cursorPosition.column}`);
        if (!this.core.isClean(index)) {
            items.push('(Mod)');
        }
        if (this.core.isReadOnly(index)) {
            items.push('(RO)');
        }
        return items.join(' ');
    }

    getIconName(index) {
        let iconName = 'insert_drive_file';
        if (this.core.isCoreFile(index)) {
            iconName = 'info';
        }
        return iconName;
    }
}
