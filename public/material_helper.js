import {HtmlHelper} from '/html_helper.js';
import {Res} from '/res.js';

export class MaterialHelper extends HtmlHelper {
    underline() {
        return this.div(null, [{name: 'class', value: 'mdc-line-ripple'}]);
    }

    listItem(id) {
        return this.li(null, [
            {name: 'class', value: 'mdc-list-item'},
            {name: 'role', value: 'menuitem'},
            {name: 'id', value: id},
            {name: 'tabindex', value: '-1'}
        ]);
    }

    listItemText(text) {
        return this.span(text, [{name: 'class', value: 'mdc-list-item__text'}]);
    }

    listItemMeta(text) {
        return this.span(text, [{name: 'class', value: 'mdc-list-item__meta'}]);
    }

    listItemIcon(name) {
        return this.span(name, [
            {name: 'class', value: 'mdc-list-item__graphic material-icons'},
            {name: 'role', value: 'button'},
            {name: 'aria-hidden', value: 'true'}
        ]);
    }

    listItemDivider() {
        return this.li(null, [
            {name: 'class', value: 'mdc-list-divider mdc-list-divider--padded'},
            {name: 'role', value: 'separator'}
        ]);
    }

    menuItems(parent, items) {
        items.forEach(item => {
            let child;
            if (item.id !== '-') {
                child = this.listItem(item.id);
                child.appendChild(this.listItemText(item.text));
                if (item.meta) {
                    child.appendChild(this.listItemMeta(item.meta));
                }
            } else {
                child = this.listItemDivider();
            }
            parent.appendChild(child);
        });
    }

    buttonRipple() {
        return this.div(null, [{name: 'class', value: 'mdc-button__ripple'}]);
    }

    buttonTouch() {
        return this.div(null, [{name: 'class', value: 'mdc-button__touch'}]);
    }

    buttonLabel(label) {
        return this.span(label, [{name: 'class', value: 'mdc-button__label'}]);
    }

    buttonIcon(iconName) {
        return this.span(
            iconName,
            [
                {name: 'class', value: 'material-icons mdc-button__icon'},
                {name: 'aria-hidden', value: 'true'}
            ]
        );
    }

    icon(name) {
        return this.span(
            name,
            [
                {name: 'class', value: 'material-icons'},
                {name: 'aria-hidden', value: 'true'}
            ]
        );
    }

    actionSnackbar() {
        const action = this.button(
            null,
            [
                {name: 'type', value: 'button'},
                {name: 'class', value: 'mdc-button mdc-snackbar__action'}
            ]
        );
        action.appendChild(this.buttonRipple());
        return action;
    }

    actionSnackbarClose() {
        const action = this.actionSnackbar();
        action.appendChild(
            this.span(
                'close',
                [
                    {name: 'class', value: 'mdc-button__label material-icons'},
                    {name: 'aria-hidden', value: 'true'}
                ]
            )
        );
        return action;
    }

    buttonDialog(label) {
        const button = this.button(null, [
            {name: 'type', value: 'button'},
            {name: 'class', value: 'mdc-button mdc-dialog__button mdc-button--outlined'},
        ]);
        button.appendChild(this.buttonRipple());
        button.appendChild(
            this.span(label, [{name: 'class', value: 'mdc-button__label'}])
        );
        return button;
    }

    buttonDialogOk() {
        const res = new Res();
        const button = this.buttonDialog(res.buttons.ok);
        button.setAttribute('id', 'dialog-button-ok');
        button.setAttribute('data-mdc-dialog-action', 'submit');
        button.setAttribute('data-mdc-dialog-button-default', 'data-mdc-dialog-button-default');
        return button;
    }

    buttonDialogCancel() {
        const res = new Res();
        const button = this.buttonDialog(res.buttons.cancel);
        button.setAttribute('id', 'dialog-button-cancel');
        button.setAttribute('data-mdc-dialog-action', 'reset');
        return button;
    }

    selectAnchor() {
        const anchor = this.div(
            null, [{name: 'class', value: 'mdc-select__anchor'}]
        );
        anchor.appendChild(
            this.span(null, [{name: 'class', value: 'mdc-select__dropdown-icon'}])
        );
        anchor.appendChild(
            this.div(null, [{name: 'class', value: 'mdc-select__selected-text'}])
        );
        anchor.appendChild(this.underline());
        return anchor;
    }

    list(liList, id = 'list') {
        const ul = this.ul(
            null,
            [
                {name: 'class', value: 'mdc-list mdc-list--dense'},
                {name: 'id', value: id}
            ]
        );
        liList.forEach(li => ul.appendChild(li));
        return ul;
    }

    selectMenu(selectList) {
        const selectUl = this.list(selectList, 'dialog-select-list');
        const menuDiv = this.div(
            null,
            [
                {name: 'class', value: 'mdc-select__menu mdc-menu mdc-menu-surface'},
                {name: 'role', value: 'listbox'}
            ]
        );
        menuDiv.appendChild(selectUl);
        return menuDiv;
    }
}
