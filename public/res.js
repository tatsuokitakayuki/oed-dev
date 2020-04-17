export class Res {
    constructor() {
        this.buttons = {
            cancel: 'Cancel',
            ok: 'OK',
            view: 'View',
        };
        this.descriptions = {
            next_file: 'Next file',
            previous_file: 'Previous file',
            first_file: '1st file',
            second_file: '2nd file',
            third_file: '3rd file',
            fourth_file: '4th file',
            fifth_file: '5th file',
            sixth_file: '6th file',
            seventh_file: '7th file',
            eighth_file: '8th file',
            last_file: 'Last file',
            new_file: 'New file',
            open_file: 'Open file',
            download_file: 'Download file',
            rename_file: 'Rename file',
            toggle_file_list: 'Toggle file list',
            file_decoding: 'File decoding',
            first_line_number: 'First line number',
            fold_style: 'Folding',
            indented_soft_wrap: 'Indented Soft Wrap',
            language_mode: 'Language mode',
            new_line_mode: 'New line mode',
            wrap: 'Soft wrap',
            tab_size: 'Tab size',
            use_soft_tabs: 'Use soft tabs',
            save_edit_session_options: 'Save edit session options',
            close_file: 'Close file',
            undo: 'Undo',
            redo: 'Redo',
            cut: 'Cut',
            copy: 'Copy',
            overwrite: 'Overwrite',
            delete: 'Delete',
            backspace: 'Backspace',
            select_all: 'Select all',
            indent: 'Indent',
            outdent: 'Outdent',
            block_indent: 'Block indent',
            block_outdent: 'Block outdent',
            to_upper_case: 'To upper case',
            to_lower_case: 'To lower case',
            sort_lines: 'Sort lines',
            toggle_recording_macro: 'Toggle recording macro',
            replay_macro: 'Replay macro',
            find: 'Find',
            find_next: 'Find next',
            find_previous: 'Find previous',
            select_or_find_next: 'Select or find next',
            select_or_find_previous: 'Select or find previous',
            find_all: 'Find all',
            replace: 'Replace',
            next_error: 'Next error',
            previous_error: 'Previous error',
            toggle_comment: 'Toggle comment',
            toggle_block_comment: 'Toggle block comment',
            modify_number_up: 'Modify number up',
            modify_number_down: 'Modify number down',
            fold: 'Fold',
            unfold: 'Unfold',
            toggle_fold_widget: 'Toggle fold widget',
            toggle_parent_fold_widget: 'Toggle parent fold widget',
            fold_other: 'Fold other',
            unfold_all: 'Unfold all',
            auto_scroll_editor_info_view: 'Auto scroll editor info view',
            behaviours_enabled: 'Enable behaviours',
            copy_with_empty_selection: 'Copy without selection',
            cursor_style: 'Cursor style',
            enable_auto_indent: 'Enable Auto Indent',
            enable_linking: 'Enable linking',
            enable_multiselect: 'Enable multiselect',
            highlight_active_line: 'Highlight active line',
            highlight_selected_word: 'Hightlight selected word',
            merge_undo_deltas: 'Merge undo deltas',
            navigate_within_soft_tabs: 'Atomic soft tabs',
            read_only: 'Read only',
            selection_style: 'Full line selection',
            wrap_behaviours_enabled: 'Wrap with quotes',
            show_gutter: 'Show gutter',
            fixed_width_gutter: 'Fixed width gutter',
            highlight_gutter_line: 'Highlight gutter line',
            show_line_numbers: 'Show line numbers',
            fade_fold_widgets: 'Fade fold widgets',
            show_fold_widgets: 'Show fold widgets',
            print_margin_column: 'Print margin column',
            show_print_margin: 'Show print margin',
            animated_scroll: 'Animate scrolling',
            vertical_scroll_bar_always_visible: 'Persistent VScrollbar',
            holizontal_scroll_bar_always_visible: 'Persistent HScrollbar',
            scroll_past_end: 'Overscroll',
            display_indent_guiles: 'Show indent guides',
            show_invisibles: 'Show invisibles',
            use_textarea_for_ime: 'Use textarea for IME',
            font_family: 'Font family',
            font_size: 'Font size',
            theme: 'Theme',
            enable_basic_autocompletion: 'Basic autocompletion',
            enable_live_autocompletion: 'Live autocompletion',
            enable_snippets: 'Snippets',
            enable_emmet: 'Emmet',
            use_elastic_tabstops: 'Elastic tabstops',
            command_pallete: 'Command pallete',
            keyboard_handler: 'Keybinding',
            export_options: 'Export options',
            import_options: 'Import options',
            cache_list: 'Cache list',
            change_log: 'Change log',
            about: 'About',
            toggle_file_menu: 'Toggle file menu',
            toggle_edit_menu: 'Toggle edit menu',
            toggle_search_menu: 'Toggle search menu',
            toggle_code_menu: 'Toggle code menu',
            toggle_view_menu: 'Toggle view menu',
            toggle_extensions_menu: 'Toggle extensions menu',
            toggle_help_menu: 'Toggle help menu',

            use_incremental_search: 'Incremental Search',
        };
        this.cursor_style = [
            {name: 'Ace', value: 'ace'},
            {name: 'Slim', value: 'slim'},
            {name: 'Smooth', value: 'smooth'},
            {name: 'Wide', value: 'wide'}
        ];
        this.encoding_names = [
            {name: 'UTF-8', value: 'utf-8'},
            {name: 'Code page 866', value: 'ibm866'},
            {name: 'ISO 8859-2', value: 'iso-8859-2'},
            {name: 'ISO 8859-3', value: 'iso-8859-3'},
            {name: 'ISO 8859-4', value: 'iso-8859-4'},
            {name: 'ISO 8859-5', value: 'iso-8859-5'},
            {name: 'ISO 8859-6', value: 'iso-8859-6'},
            {name: 'ISO 8859-7', value: 'iso-8859-7'},
            {name: 'ISO 8859-8', value: 'iso-8859-8'},
            {name: 'ISO 8859-8i', value: 'iso-8859-8i'},
            {name: 'ISO 8859-10', value: 'iso-8859-10'},
            {name: 'ISO 8859-13', value: 'iso-8859-13'},
            {name: 'ISO 8859-14', value: 'iso-8859-14'},
            {name: 'ISO 8859-15', value: 'iso-8859-15'},
            {name: 'ISO 8859-16', value: 'iso-8859-16'},
            {name: 'KOI8-R', value: 'koi8-r'},
            {name: 'KOI8-U', value: 'koi8-u'},
            {name: 'Mac OS Roman', value: 'macintosh'},
            {name: 'Windows 874', value: 'windows-874'},
            {name: 'Windows 1250', value: 'windows-1250'},
            {name: 'Windows 1251', value: 'windows-1251'},
            {name: 'Windows 1252', value: 'windows-1252'},
            {name: 'Windows 1253', value: 'windows-1253'},
            {name: 'Windows 1254', value: 'windows-1254'},
            {name: 'Windows 1255', value: 'windows-1255'},
            {name: 'Windows 1256', value: 'windows-1256'},
            {name: 'Windows 1257', value: 'windows-1257'},
            {name: 'Windows 1258', value: 'windows-1258'},
            {name: 'Mac OS Cyrillic', value: 'x-mac-cyrillic'},
            {name: 'GBK', value: 'gbk'},
            {name: 'GB 18030', value: 'gb18030'},
            {name: 'HZ', value: 'hz-gb-2312'},
            {name: 'Big5', value: 'big5'},
            {name: 'EUC-JP', value: 'euc-jp'},
            {name: 'ISO-2022-JP', value: 'iso-2022-jp'},
            {name: 'Shift JIS', value: 'shift-jis'},
            {name: 'EUC-KR', value: 'euc-kr'},
            {name: 'ISO-2022-KR', value: 'iso-2022-kr'},
            {name: 'UTF-16BE', value: 'utf-16be'},
            {name: 'UTF-16LE', value: 'utf-16le'}
        ];
        this.fold_style = [
            {name: 'Manual', value: 'manual'},
            {name: 'Mark begin', value: 'markbegin'},
            {name: 'Mark begin and end', value: 'markbeginend'}
        ];
        this.keyboard_handler = [
            {name: 'Ace', value: 'Ace'},
            {name: 'Vim', value: 'Vim'},
            {name: 'Emacs', value: 'Emacs'},
            {name: 'Sublime', value: 'Sublime'},
            {name: 'VSCode', value: 'VSCode'}
        ];
        this.merge_undo_deltas = [
            {name: 'Always', value: 'always'},
            {name: 'Never', value: 'false'},
            {name: 'Timed', value: 'true'}
        ];
        this.new_line_mode = [
            {name: 'Auto', value: 'auto'},
            {name: 'Unix', value: 'unix'},
            {name: 'Windows', value: 'windows'}
        ];
        this.scroll_past_end = [
            {name: 'None', value: 0},
            {name: 'Half', value: 0.5},
            {name: 'Full', value: 1}
        ];
        this.wrap = [
            {name: 'Off', value: 'off'},
            {name: 'Free', value: 'free'},
            {name: 'Print margin', value: 'printMargin'},
            {name: '40 columns', value: 40}
        ];
        this.files = {
            about: 'ABOUT',
            change_log: 'CHANGELOG',
            cache_list: 'CACHELIST',
        };
        this.protocols = {
            oed: 'oed:',
        };
        this.hosts = {
            edit_session: 'edit.session',
        };
        this.dirs = {
            res: 'res',
            files: 'files',
        };
        this.placeholders = {
            font_family: 'Family name and Generic name (Comma separated)',
            first_line_number: 'First line number',
            font_size: '8 to 72',
            print_margin_column: '0 to 256',
            rename_file: 'New name',
            tab_size: '1 to 16',
        };
        this.strings = {
            confirm_close_file: 'Discard $filename$ edits and close.',
            hello: 'Hello, OED.\nOED - Open, edit, and download.\n',
            modified: 'Modified',
            read_only: 'Read only',
            untitled: 'untitled',
        };
    }

    getThemes() {
        const themeData = [
            ["Chrome"         ],
            ["Clouds"         ],
            ["Crimson Editor" ],
            ["Dawn"           ],
            ["Dreamweaver"    ],
            ["Eclipse"        ],
            ["GitHub"         ],
            ["IPlastic"       ],
            ["Solarized Light"],
            ["TextMate"       ],
            ["Tomorrow"       ],
            ["Xcode"          ],
            ["Kuroir"],
            ["KatzenMilch"],
            ["SQL Server"           ,"sqlserver"               , "light"],
            ["Ambiance"             ,"ambiance"                ,  "dark"],
            ["Chaos"                ,"chaos"                   ,  "dark"],
            ["Clouds Midnight"      ,"clouds_midnight"         ,  "dark"],
            ["Dracula"              ,""                        ,  "dark"],
            ["Cobalt"               ,"cobalt"                  ,  "dark"],
            ["Gruvbox"              ,"gruvbox"                 ,  "dark"],
            ["Green on Black"       ,"gob"                     ,  "dark"],
            ["idle Fingers"         ,"idle_fingers"            ,  "dark"],
            ["krTheme"              ,"kr_theme"                ,  "dark"],
            ["Merbivore"            ,"merbivore"               ,  "dark"],
            ["Merbivore Soft"       ,"merbivore_soft"          ,  "dark"],
            ["Mono Industrial"      ,"mono_industrial"         ,  "dark"],
            ["Monokai"              ,"monokai"                 ,  "dark"],
            ["Nord Dark"            ,"nord_dark"               ,  "dark"],
            ["Pastel on dark"       ,"pastel_on_dark"          ,  "dark"],
            ["Solarized Dark"       ,"solarized_dark"          ,  "dark"],
            ["Terminal"             ,"terminal"                ,  "dark"],
            ["Tomorrow Night"       ,"tomorrow_night"          ,  "dark"],
            ["Tomorrow Night Blue"  ,"tomorrow_night_blue"     ,  "dark"],
            ["Tomorrow Night Bright","tomorrow_night_bright"   ,  "dark"],
            ["Tomorrow Night 80s"   ,"tomorrow_night_eighties" ,  "dark"],
            ["Twilight"             ,"twilight"                ,  "dark"],
            ["Vibrant Ink"          ,"vibrant_ink"             ,  "dark"]
        ];
        const themelist = themeData.map(data => {
            const name = data[1] || data[0].replace(/ /g, "_").toLowerCase();
            const theme = {
                caption: data[0],
                theme: "ace/theme/" + name,
                isDark: data[2] == "dark",
                name: name
            };
            return theme;
        });
        const themes = {bright: [], dark: []};
        themelist.forEach(x => {
            themes[x.isDark ? 'dark' : 'bright'].push({caption: x.caption, value: x.theme});
        });
        return themes;
    }
}
