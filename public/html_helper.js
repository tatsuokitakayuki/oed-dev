export class HtmlHelper {

    attribute(element, attributeList) {
        attributeList.forEach(
            attribute => element.setAttribute(attribute.name, attribute.value)
        );
    }

    element(name, textContent, attributeList) {
        const element = document.createElement(name);
        if (textContent) {
            element.textContent = textContent;
        }
        if (attributeList) {
            this.attribute(element, attributeList);
        }
        return element;
    }

    input(textContent, attributeList) {
        return this.element('input', textContent, attributeList);
    }

    menu(textContent, attributeList) {
        return this.element('menu', textContent, attributeList);
    }

    form(textContent, attributeList) {
        return this.element('form', textContent, attributeList);
    }

    p(textContent, attributeList) {
        return this.element('p', textContent, attributeList);
    }

    option(textContent, attributeList) {
        return this.element('option', textContent, attributeList);
    }

    optgroup(textContent, attributeList) {
        return this.element('optgroup', textContent, attributeList);
    }

    label(textContent, attributeList) {
        return this.element('label', textContent, attributeList);
    }

    select(textContent, attributeList) {
        return this.element('select', textContent, attributeList);
    }

    button(textContent, attributeList) {
        return this.element('button', textContent, attributeList);
    }

    span(textContent, attributeList) {
        return this.element('span', textContent, attributeList);
    }

    i(textContent, attributeList) {
        return this.element('i', textContent, attributeList);
    }

    li(textContent, attributeList) {
        return this.element('li', textContent, attributeList);
    }

    div(textContent, attributeList) {
        return this.element('div', textContent, attributeList);
    }

    ul(textContent, attributeList) {
        return this.element('ul', textContent, attributeList);
    }

    a(textContent, attributeList) {
        return this.element('a', textContent, attributeList);
    }

    h3(textContent, attributeList) {
        return this.element('h3', textContent, attributeList);
    }

    br(textContent, attributeList) {
        return this.element('br', textContent, attributeList);
    }

    removeChildren(parent) {
        while (parent.firstChild) {
            this.removeChildren(parent.firstChild);
            parent.removeChild(parent.firstChild);
        }
    }
}
