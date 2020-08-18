export class ThemeHelper {
    constructor() {
        this.themelist = ace.require('ace/ext/themelist');
    }
    getThemes() {
        const themelist = this.themelist.themes;
        const themes = {bright: [], dark: []};
        themelist.forEach(x => {
            themes[x.isDark ? 'dark' : 'bright'].push(
                {caption: x.caption, value: x.theme}
            );
        });
        return themes;
    }

    isDark(theme) {
        return Boolean(
            this.getThemes().dark.find(darkTheme => darkTheme.value == theme)
        );
    }
}
