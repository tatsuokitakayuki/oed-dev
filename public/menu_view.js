import {MaterialHelper} from '/material_helper.js';
import {Menu} from '/menu.js';
import {Res} from '/res.js';
import {ThemeHelper} from '/theme_helper.js';

export class MenuView extends Menu {
    constructor(core) {
        super(core, 'menu-view');
        const res = new Res();
        this.itemData = {
            id: 'menu-list-view',
            items: [
                // Editor options
                {
                    id: 'menu-view-oed-navigate-within-soft-tabs',
                    text: res.descriptions.navigate_within_soft_tabs,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-auto-scroll-editor-into-view',
                    text: res.descriptions.auto_scroll_editor_info_view,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-copy-with-empty-selection',
                    text: res.descriptions.copy_with_empty_selection,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-cursor-style',
                    text: res.descriptions.cursor_style + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-enable-auto-indent',
                    text: res.descriptions.enable_auto_indent,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-behaviours-enabled',
                    text: res.descriptions.behaviours_enabled,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-enable-linking',
                    text: res.descriptions.enable_linking,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-enable-multiselect',
                    text: res.descriptions.enable_multiselect,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-selection-style',
                    text: res.descriptions.selection_style,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-highlight-active-line',
                    text: res.descriptions.highlight_active_line,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-highlight-selected-word',
                    text: res.descriptions.highlight_selected_word,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-merge-undo-deltas',
                    text: res.descriptions.merge_undo_deltas + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-wrap-behaviours-enabled',
                    text: res.descriptions.wrap_behaviours_enabled,
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                // Renderer (Gutter) options
                {
                    id: 'menu-view-oed-show-gutter',
                    text: res.descriptions.show_gutter,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-fixed-width-gutter',
                    text: res.descriptions.fixed_width_gutter,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-highlight-gutter-line',
                    text: res.descriptions.highlight_gutter_line,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-line-numbers',
                    text: res.descriptions.show_line_numbers,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-fade-fold-widgets',
                    text: res.descriptions.fade_fold_widgets,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-fold-widgets',
                    text: res.descriptions.show_fold_widgets,
                    meta: '',
                    update: true
                },
                // Renderer (Margin) options
                {
                    id: 'menu-view-oed-print-margin-column',
                    text: res.descriptions.print_margin_column + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-print-margin',
                    text: res.descriptions.show_print_margin,
                    meta: '',
                    update: true
                },
                // Renderer (Scroll) options
                {
                    id: 'menu-view-oed-animated-scroll',
                    text: res.descriptions.animated_scroll,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-v-scroll-bar-always-visible',
                    text: res.descriptions.vertical_scroll_bar_always_visible,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-h-scroll-bar-always-visible',
                    text: res.descriptions.holizontal_scroll_bar_always_visible,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-scroll-past-end',
                    text: res.descriptions.scroll_past_end + '...',
                    meta: '',
                    update: true
                },
                // Renderer options
                {
                    id: 'menu-view-oed-display-indent-guides',
                    text: res.descriptions.display_indent_guiles,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-invisibles',
                    text: res.descriptions.show_invisibles,
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-use-textarea-for-ime',
                    text: res.descriptions.use_textarea_for_ime,
                    meta: '',
                    update: true
                },
                // Renderer (Font) options
                {
                    id: 'menu-view-oed-font-family',
                    text: res.descriptions.font_family + '...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-font-size',
                    text: res.descriptions.font_size + '...',
                    meta: '',
                    update: true
                },
                // Renderer options
                {
                    id: 'menu-view-oed-theme',
                    text: res.descriptions.theme + '...',
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
