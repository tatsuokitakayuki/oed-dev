import {HtmlHelper} from '/html_helper.js';

const selectFileA = (multiple => {
    return new Promise(resolve => {
        const htmlHelper = new HtmlHelper();
        let attributes = [
            {name: 'type', value: 'file'}
        ];
        if (multiple) {
            attributes.push({name: 'multiple', value: 'multiple'});
        }
        const input = htmlHelper.input(null, attributes);
        input.onchange = event => resolve(event.target.files);
        input.click();
    });
});

export class DialogSelectFile {
    async openA(multiple) {
        return await selectFileA(multiple);
    }
}