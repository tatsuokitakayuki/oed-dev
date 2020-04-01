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
                    id: 'menu-view-toed-auto-scroll-editor-into-view', // Editor
                    text: 'Auto scroll editor into view',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-behaviours-enabled', // Editor
                    text: 'Behaviours enabled',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-copy-with-empty-selection', // Editor
                    text: 'Copy with empty selection',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-cursor-style', // Editor
                    text: 'Cursor style...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-enable-linking', // Editor
                    text: 'Enable linking',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-enable-multiselect', // Editor
                    text: 'Enable multiselect',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-highlight-active-line', // Editor
                    text: 'Highlight active line',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-highlight-selected-word', // Editor
                    text: 'Highlight selected word',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-merge-undo-deltas', // Editor
                    text: 'Merge undo deltas...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-navigate-within-soft-tabs', // Editor
                    text: 'Navigate within soft tabs',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-read-only', // Editor
                    text: 'Read only',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-selection-style', // Editor
                    text: 'Selection style',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-wrap-behaviours-enabled', // Editor
                    text: 'Wrap behaviours enabled',
                    meta: ''
                },
                {id: '-', text: '', meta: ''},
                // Renderer options
                {
                    id: 'menu-view-toed-show-gutter', // Renderer (Gutter)
                    text: 'Show gutter',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-fixed-width-gutter', // Renderer (Gutter)
                    text: 'Fixed Width gutter',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-highlight-gutter-line', // Renderer (Gutter)
                    text: 'Highlight gutter line',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-show-line-numbers', // Renderer  (Gutter)
                    text: 'Show line numbers',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-fade-fold-widgets', // Renderer (Gutter)
                    text: 'Fade fold widgets',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-show-fold-widgets', // Renderer (Gutter)
                    text: 'Show fold widgets',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-print-margin-column', // Renderer (Margin)
                    text: 'Print margin column...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-show-print-margin', // Renderer (Margin)
                    text: 'Show print margin',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-animated-scroll', // Renderer (Scroll)
                    text: 'Animated scroll',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-v-scroll-bar-always-visible', // Renderer (Scroll)
                    text: 'Vertical scroll bar always visible',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-h-scroll-bar-always-visible', // Renderer (Scroll)
                    text: 'Horizontal scroll bar always visible',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-scroll-past-end', // Renderer (Scroll)
                    text: 'Scroll past end...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-display-indent-guides', // Renderer
                    text: 'Display indent guides',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-show-invisibles', // Renderer
                    text: 'Show invisibles',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-font-family', // Renderer (Font)
                    text: 'Font family...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-font-size', // Renderer (Font)
                    text: 'Font size...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-theme', // Renderer
                    text: 'Theme...',
                    meta: ''
                },
                {id: '-', text: '', meta: ''},
                // Edit session options
                {
                    id: 'menu-view-toed-first-line-number', // EditSession
                    text: 'First line number...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-fold-style', // EditSession
                    text: 'Fold style...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-mode', // EditSession
                    text: 'Mode...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-new-line-mode', // EditSession
                    text: 'New line mode...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-wrap', // EditSession
                    text: 'Soft wrap...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-tab-size', // EditSession
                    text: 'Tab size...',
                    meta: ''
                },
                {
                    id: 'menu-view-toed-use-soft-tabs', // EditSession
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
                        item.id.slice((this.menuId + '-toed-').length)
                    )
                )
            );
            switch (item.id) {
                case 'menu-view-toed-cursor-style':
                    item.textContent = originalText + ' [' +
                        res.cursor_style.find(
                            item => item.value == optionValue
                        ).name + ']';
                    break;
                case 'menu-view-toed-merge-undo-deltas':
                    item.textContent = originalText + ' [' +
                        res.merge_undo_deltas.find(
                            item => item.value == optionValue
                        ).name + ']';
                    break;
                case 'menu-view-toed-scroll-past-end':
                    item.textContent = originalText + ' [' +
                        res.scroll_past_end.find(
                            item => item.value == optionValue
                        ).name + ']';
                    break;
                case 'menu-view-toed-wrap':
                    item.textContent = originalText + ' [' +
                        res.wrap.find(
                            item => item.value == optionValue
                        ).name + ']';
                    break;
                case 'menu-view-toed-theme':
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
                case 'menu-view-toed-fold-style':
                    item.textContent = originalText + ' [' +
                        res.fold_style.find(
                            item => item.value == optionValue
                        ).name + ']';
                    break;
                case 'menu-view-toed-mode':
                    const modeList = ace.require('ace/ext/modelist');
                    item.textContent = originalText + ' [' +
                        modeList.modes.find(
                            item => item.mode == optionValue
                        ).caption + ']';
                    break;
                case 'menu-view-toed-new-line-mode':
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
