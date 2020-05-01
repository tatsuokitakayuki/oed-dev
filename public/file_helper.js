import {HtmlHelper} from '/html_helper.js';

export class FileHelper {
    async fetchTextUrlA(url, encodingName) {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return new TextDecoder(encodingName).decode(arrayBuffer);
    }

    async fetchTextFileA(file, encodingName) {
        const url = URL.createObjectURL(file);
        const text = await this.fetchTextUrlA(url, encodingName);
        URL.revokeObjectURL(url);
        return text;
    }

    writeBlob(blob, name) {
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, name);
        } else {
            const url = URL.createObjectURL(blob);
            const htmlHelper = new HtmlHelper();
            const a = htmlHelper.a(
                null,
                [
                    {name: 'href', value: url},
                    {name: 'download', value: name},
                    {name: 'rel', value: 'nofollow noreferrer'},
                    {name: 'target', value: '_blank'},
                    {name: 'type', value: blob.type},
                ]
            );
            a.click();
            URL.revokeObjectURL(url);
        }
    }

    getMode(name) {
        const modeList = ace.require('ace/ext/modelist');
        return modeList.getModeForPath('./' + name).mode;
    }

    buildBlob(data, type) {
        return new Blob([data], {type: type});
    }

    sanitizeName(name) {
        return name.replace(/[<>"'&|:*?\/\\]/gi, ' ').trim();
    }
}
