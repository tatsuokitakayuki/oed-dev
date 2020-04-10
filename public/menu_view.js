import {Menu} from '/menu.js';
import {Res} from '/res.js';

export class MenuView extends Menu {

    constructor(core) {
        super(core, 'menu-view');
        this.itemData = {
            id: 'menu-list-view',
            items: [
                // Editor options
                {
                    id: 'menu-view-oed-auto-scroll-editor-into-view', // Editor
                    text: 'Auto scroll editor into view',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-behaviours-enabled', // Editor
                    text: 'Behaviours enabled',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-copy-with-empty-selection', // Editor
                    text: 'Copy with empty selection',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-cursor-style', // Editor
                    text: 'Cursor style...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-enable-linking', // Editor
                    text: 'Enable linking',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-enable-multiselect', // Editor
                    text: 'Enable multiselect',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-highlight-active-line', // Editor
                    text: 'Highlight active line',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-highlight-selected-word', // Editor
                    text: 'Highlight selected word',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-merge-undo-deltas', // Editor
                    text: 'Merge undo deltas...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-navigate-within-soft-tabs', // Editor
                    text: 'Navigate within soft tabs',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-read-only', // Editor
                    text: 'Read only',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-selection-style', // Editor
                    text: 'Selection style',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-wrap-behaviours-enabled', // Editor
                    text: 'Wrap behaviours enabled',
                    meta: '',
                    update: true
                },
                {id: '-', text: '', meta: ''},
                // Renderer options
                {
                    id: 'menu-view-oed-show-gutter', // Renderer (Gutter)
                    text: 'Show gutter',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-fixed-width-gutter', // Renderer (Gutter)
                    text: 'Fixed Width gutter',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-highlight-gutter-line', // Renderer (Gutter)
                    text: 'Highlight gutter line',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-line-numbers', // Renderer  (Gutter)
                    text: 'Show line numbers',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-fade-fold-widgets', // Renderer (Gutter)
                    text: 'Fade fold widgets',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-fold-widgets', // Renderer (Gutter)
                    text: 'Show fold widgets',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-print-margin-column', // Renderer (Margin)
                    text: 'Print margin column...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-print-margin', // Renderer (Margin)
                    text: 'Show print margin',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-animated-scroll', // Renderer (Scroll)
                    text: 'Animated scroll',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-v-scroll-bar-always-visible', // Renderer (Scroll)
                    text: 'Vertical scroll bar always visible',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-h-scroll-bar-always-visible', // Renderer (Scroll)
                    text: 'Horizontal scroll bar always visible',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-scroll-past-end', // Renderer (Scroll)
                    text: 'Scroll past end...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-display-indent-guides', // Renderer
                    text: 'Display indent guides',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-show-invisibles', // Renderer
                    text: 'Show invisibles',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-font-family', // Renderer (Font)
                    text: 'Font family...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-font-size', // Renderer (Font)
                    text: 'Font size...',
                    meta: '',
                    update: true
                },
                {
                    id: 'menu-view-oed-theme', // Renderer
                    text: 'Theme...',
                    meta: '',
                    update: true
                },
            ]
        };
    }

    updateMenuItems() {
        const res = new Res();
        this.menu.items.forEach(item => {
            const data = this.itemData.items.find(
                data => item.id == data.id
            );
            if (data.update) {
                const optionValue = String(
                    this.core.getOption(
                        this.core.idToName(
                            item.id.slice((this.menuId + '-oed-').length)
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
                        let theme = res.getThemes().bright.find(
                            theme => theme.value == optionValue
                        );
                        if (!theme) {
                            theme = res.getThemes().dark.find(
                                theme => theme.value == optionValue
                            );
                        }
                        optionText = theme.caption;
                        break;
                    default:
                        break;
                }
                item.textContent = data.text + ' [' + optionText + ']';
            }
        });
    }
}
