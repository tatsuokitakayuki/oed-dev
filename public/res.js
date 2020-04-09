export class Res {
    constructor() {
        this.buttons = {
            cancel: 'Cancel',
            close: 'Close',
            drawer: 'File drawer',
            edit: 'Edit',
            extensions: 'Extensions',
            file: 'File',
            help: 'Help',
            ok: 'OK',
            view: 'View',
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
        this.keybindings = [
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
            {name: 'No past end', value: 0},
            {name: 'Half height past end', value: 0.5},
            {name: 'Full height past end', value: 1}
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
            prompt_rename_file: 'Enter a new name.',
            untitled: 'untitled',
        };
        this.titles = {
            close_file: 'Close file',
            cursor_style: 'Cursor style',
            file_decoding: 'File decoding',
            first_line_number: 'First line number',
            fold_style: 'Fold style',
            font_family: 'Font family',
            font_size: 'Font size',
            keybindings: 'Keybinding',
            max_lines: 'Max lines',
            merge_undo_deltas: 'Merge undo deltas',
            min_lines: 'Min lines',
            language_mode: 'Language mode',
            modified: '(Modified)',
            new_line_mode: 'New line mode',
            new_name: 'New name',
            print_margin: 'Print margin',
            print_margin_column: 'Print margin column',
            readOnly: ' (Read only)',
            rename_file: 'Rename file',
            scroll_past_end: 'Scroll past end',
            tab_size: 'Tab size',
            theme: 'Theme',
            wrap: 'Soft wrap',
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
