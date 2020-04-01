import {HtmlHelper} from '/html_helper.js';
import {Res} from '/res.js';

export class MaterialHelper extends HtmlHelper {

    underline() {
        return this.div(null, [{name: 'class', value: 'mdc-line-ripple'}]);
    }

    menuItems(parent, items) {
        items.forEach(item => {
            let child;
            if (item.id !== '-') {
                child = this.li(
                    '',
                    [
                        {name: 'class', value: 'mdc-list-item'},
                        {name: 'role', value: 'menuitem'},
                        {name: 'id', value: item.id},
                        {name: 'tabindex', value: '-1'},
                    ]
                );
                child.appendChild(
                    this.span(
                        item.text,
                        [{name: 'class', value: 'mdc-list-item__text'}]
                    )
                );
                if (item.meta) {
                    child.appendChild(
                        this.span(
                            item.meta,
                            [{name: 'class', value: 'mdc-list-item__meta'}]
                        )
                    );
                }
            } else {
                child = this.li(
                    '',
                    [
                        {name: 'class', value: 'mdc-list-divider mdc-list-divider--padded'},
                        {name: 'role', value: 'separator'},
                    ]
                );
            }
            parent.appendChild(child);
        });
    }

    buttonDialog(label) {
        const span = this.span(
            label,
            [{name: 'class', value: 'mdc-button__label'}]
        );
        const button = this.button(
            null,
            [
                {name: 'type', value: 'button'},
                {name: 'class', value: 'mdc-button mdc-dialog__button mdc-button--outlined'},
            ]
        );
        button.appendChild(
            this.div(null, [{name: 'class', value: 'mdc-button__ripple'}])
        );
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
        button.setAttribute(
            'data-mdc-dialog-button-default', 'true'
        );
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
        anchor.appendChild(this.i(
            null, [{name: 'class', value: 'mdc-select__dropdown-icon'}]
        ));
        anchor.appendChild(this.div(
            null, [{name: 'class', value: 'mdc-select__selected-text'}]
        ));
        anchor.appendChild(this.div(
            null, [{name: 'class', value: 'mdc-line-ripple'}]
        ));
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
