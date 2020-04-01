import {MaterialHelper} from '/material_helper.js';
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
                    meta: ''
                },
                {
                    id: 'menu-view-oed-behaviours-enabled', // Editor
                    text: 'Behaviours enabled',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-copy-with-empty-selection', // Editor
                    text: 'Copy with empty selection',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-cursor-style', // Editor
                    text: 'Cursor style...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-enable-linking', // Editor
                    text: 'Enable linking',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-enable-multiselect', // Editor
                    text: 'Enable multiselect',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-highlight-active-line', // Editor
                    text: 'Highlight active line',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-highlight-selected-word', // Editor
                    text: 'Highlight selected word',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-merge-undo-deltas', // Editor
                    text: 'Merge undo deltas...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-navigate-within-soft-tabs', // Editor
                    text: 'Navigate within soft tabs',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-read-only', // Editor
                    text: 'Read only',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-selection-style', // Editor
                    text: 'Selection style',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-wrap-behaviours-enabled', // Editor
                    text: 'Wrap behaviours enabled',
                    meta: ''
                },
                {id: '-', text: '', meta: ''},
                // Renderer options
                {
                    id: 'menu-view-oed-show-gutter', // Renderer (Gutter)
                    text: 'Show gutter',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-fixed-width-gutter', // Renderer (Gutter)
                    text: 'Fixed Width gutter',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-highlight-gutter-line', // Renderer (Gutter)
                    text: 'Highlight gutter line',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-show-line-numbers', // Renderer  (Gutter)
                    text: 'Show line numbers',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-fade-fold-widgets', // Renderer (Gutter)
                    text: 'Fade fold widgets',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-show-fold-widgets', // Renderer (Gutter)
                    text: 'Show fold widgets',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-print-margin-column', // Renderer (Margin)
                    text: 'Print margin column...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-show-print-margin', // Renderer (Margin)
                    text: 'Show print margin',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-animated-scroll', // Renderer (Scroll)
                    text: 'Animated scroll',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-v-scroll-bar-always-visible', // Renderer (Scroll)
                    text: 'Vertical scroll bar always visible',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-h-scroll-bar-always-visible', // Renderer (Scroll)
                    text: 'Horizontal scroll bar always visible',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-scroll-past-end', // Renderer (Scroll)
                    text: 'Scroll past end...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-display-indent-guides', // Renderer
                    text: 'Display indent guides',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-show-invisibles', // Renderer
                    text: 'Show invisibles',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-font-family', // Renderer (Font)
                    text: 'Font family...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-font-size', // Renderer (Font)
                    text: 'Font size...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-theme', // Renderer
                    text: 'Theme...',
                    meta: ''
                },
                {id: '-', text: '', meta: ''},
                // Edit session options
                {
                    id: 'menu-view-oed-first-line-number', // EditSession
                    text: 'First line number...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-fold-style', // EditSession
                    text: 'Fold style...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-mode', // EditSession
                    text: 'Mode...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-new-line-mode', // EditSession
                    text: 'New line mode...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-wrap', // EditSession
                    text: 'Soft wrap...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-tab-size', // EditSession
                    text: 'Tab size...',
                    meta: ''
                },
                {
                    id: 'menu-view-oed-use-soft-tabs', // EditSession
                    text: 'Use soft tabs',
                    meta: ''
                },
            ]
        };
    }

    initialize() {
        super.initialize();
        const materialHelper = new MaterialHelper();
        materialHelper.menuItems(
            document.getElementById(this.itemData.id), this.itemData.items
        );
    }

    updateMenuItems() {
        const res = new Res();
        this.menu.items.forEach(item => {
            const originalText = this.itemData.items.find(
                data => item.id == data.id
            ).text;
            const optionValue = String(
                this.core.getOption(
                    this.core.idToName(
                        item.id.slice((this.menuId + '-oed-').length)
                    )
                )
            );
            switch (item.id) {
                case 'menu-view-oed-cursor-style':
                    item.textContent = originalText + ' [' +
                        res.cursor_style.find(
                            item => item.value == optionValue
                        ).name + ']';
                    break;
                case 'menu-view-oed-merge-undo-deltas':
                    item.textContent = originalText + ' [' +
                        res.merge_undo_deltas.find(
                            item => item.value == optionValue
                        ).name + ']';
                    break;
                case 'menu-view-oed-scroll-past-end':
                    item.textContent = originalText + ' [' +
                        res.scroll_past_end.find(
                            item => item.value == optionValue
                        ).name + ']';
                    break;
                case 'menu-view-oed-wrap':
                    item.textContent = originalText + ' [' +
                        res.wrap.find(
                            item => item.value == optionValue
                        ).name + ']';
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
                    item.textContent = originalText +
                        ' [' + theme.caption + ']';
                    break;
                case 'menu-view-oed-fold-style':
                    item.textContent = originalText + ' [' +
                        res.fold_style.find(
                            item => item.value == optionValue
                        ).name + ']';
                    break;
                case 'menu-view-oed-mode':
                    const modeList = ace.require('ace/ext/modelist');
                    item.textContent = originalText + ' [' +
                        modeList.modes.find(
                            item => item.mode == optionValue
                        ).caption + ']';
                    break;
                case 'menu-view-oed-new-line-mode':
                    item.textContent = originalText + ' [' +
                        res.new_line_mode.find(
                            item => item.value == optionValue
                        ).name + ']';
                    break;
                default:
                    item.textContent = originalText + ' [' + optionValue + ']';
                    break;
            }
        });
    }
}
