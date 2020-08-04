import {descriptions} from '/res/descriptions.js';
import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';
import {Res} from '/res.js';
import {ThemeHelper} from '/theme_helper.js';

export class MenuView extends Menu {
    constructor(core) {
        super(core, 'menu-view');
        this.itemData = {
            id: 'menu-list-view',
            items: [
                // Editor options
                {
                    id: 'menu-view-oed-navigate-within-soft-tabs',
                    text: descriptions.NAVIGATE_WITHIN_SOFT_TABS,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-auto-scroll-editor-into-view',
                    text: descriptions.AUTO_SCROLL_EDITOR_INFO_VIEW,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-copy-with-empty-selection',
                    text: descriptions.COPY_WITH_EMPTY_SELECTION,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-cursor-style',
                    text: descriptions.CURSOR_STYLE + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-enable-auto-indent',
                    text: descriptions.ENABLE_AUTO_INDENT,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-behaviours-enabled',
                    text: descriptions.BEHAVIOURS_ENABLED,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-enable-linking',
                    text: descriptions.ENABLE_LINKING,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-enable-multiselect',
                    text: descriptions.ENABLE_MULTISELECT,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-selection-style',
                    text: descriptions.SELECTION_STYLE,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-highlight-active-line',
                    text: descriptions.HIGHLIGHT_ACTIVE_LINE,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-highlight-selected-word',
                    text: descriptions.HIGHLIGHT_SELECTED_WORD,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-merge-undo-deltas',
                    text: descriptions.MERGE_UNDO_DELTAS + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-wrap-behaviours-enabled',
                    text: descriptions.WRAP_BEHAVIOURS_ENABLED,
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                // Renderer (Gutter) options
                {
                    id: 'menu-view-oed-show-gutter',
                    text: descriptions.SHOW_GUTTER,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-fixed-width-gutter',
                    text: descriptions.FIXED_WIDTH_GUTTER,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-highlight-gutter-line',
                    text: descriptions.HIGHLIGHT_GUTTER_LINE,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-line-numbers',
                    text: descriptions.SHOW_LINE_NUMBERS,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-fade-fold-widgets',
                    text: descriptions.FADE_FOLD_WIDGETS,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-fold-widgets',
                    text: descriptions.SHOW_FOLD_WIDGETS,
                    meta: '',
                    update: true
                },
                // Renderer (Margin) options
                {
                    id: 'menu-view-oed-print-margin-column',
                    text: descriptions.PRINT_MARGIN_COLUMN + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-print-margin',
                    text: descriptions.SHOW_PRINT_MARGIN,
                    meta: '',
                    update: true
                },
                // Renderer (Scroll) options
                {
                    id: 'menu-view-oed-animated-scroll',
                    text: descriptions.ANIMATED_SCROLL,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-v-scroll-bar-always-visible',
                    text: descriptions.VERTICAL_SCROLL_BAR_ALWAYS_VISIBLE,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-h-scroll-bar-always-visible',
                    text: descriptions.HOLIZONTAL_SCROLL_BAR_ALWAYS_VISIBLE,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-scroll-past-end',
                    text: descriptions.SCROLL_PAST_END + '...',
                    meta: '',
                    update: true
                },
                // Renderer options
                {
                    id: 'menu-view-oed-display-indent-guides',
                    text: descriptions.DISPLAY_INDENT_GUILES,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-invisibles',
                    text: descriptions.SHOW_INVISIBLES,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-use-textarea-for-ime',
                    text: descriptions.USE_TEXTAREA_FOR_IME,
                    meta: '',
                    update: true
                },
                // Renderer (Font) options
                {
                    id: 'menu-view-oed-font-family',
                    text: descriptions.FONT_FAMILY + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-font-size',
                    text: descriptions.FONT_SIZE + '...',
                    meta: '',
                    update: true
                },
                // Renderer options
                {
                    id: 'menu-view-oed-theme',
                    text: descriptions.THEME + '...',
                    meta: '',
                    update: true
                },
            ]
        };
    }

    updateMenuItems() {
        const res = new Res();
        const materialHelper = new MaterialHelper();
        const themeHelper = new ThemeHelper();
        this.menu.items.forEach(item => {
            const data = this.itemData.items.find(
                data => item.id == data.id
            );
            if (data.update) {
                const optionValue = String(
                    this.core.getOption(
                        this.core.idToName(
                            item.id.slice((this.id + '-oed-').length)
                        )
                    )
                );
                let optionText = optionValue;
                switch (item.id) {
                    case 'menu-view-oed-cursor-style':
                        optionText = res.cursor_style.find(
                            item => item.value == optionValue
                        ).name;
                        break;
                    case 'menu-view-oed-merge-undo-deltas':
                        optionText = res.merge_undo_deltas.find(
                            item => item.value == optionValue
                        ).name;
                        break;
                    case 'menu-view-oed-scroll-past-end':
                        optionText = res.scroll_past_end.find(
                            item => item.value == optionValue
                        ).name;
                        break;
                    case 'menu-view-oed-theme':
                        let theme = themeHelper.getThemes().bright.find(
                            theme => theme.value == optionValue
                        );
                        if (!theme) {
                            theme = themeHelper.getThemes().dark.find(
                                theme => theme.value == optionValue
                            );
                        }
                        optionText = theme.caption;
                        break;
                    default:
                        break;
                }
                materialHelper.removeChildren(item);
                item.appendChild(materialHelper.listItemRipple());
                item.appendChild(materialHelper.listItemText(
                    data.text + ' [' + optionText + ']'
                ));
                if (data.meta) {
                    item.appendChild(materialHelper.listItemMeta(data.meta));
                }
            }
        });
    }
}
