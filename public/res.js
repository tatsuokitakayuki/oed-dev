export class Res {
    constructor() {
        this.buttons = {
            cancel: 'Cancel',
            code: 'Code',
            edit: 'Edit',
            extensions: 'Extensions',
            file: 'File',
            help: 'Help',
            ok: 'OK',
            search: 'Search',
            view: 'View',
        };
        this.cursor_style = [
            {name: 'Ace', value: 'ace'},
            {name: 'Slim', value: 'slim'},
            {name: 'Smooth', value: 'smooth'},
            {name: 'Slim and Smooth', value: 'smooth slim'},
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
        this.menu_button = [
            {name: 'Icon + Label', value: 'iconlabel'},
            {name: 'Label', value: 'label'},
            {name: 'Icon', value: 'icon'},
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
            open_source_lisence: 'OPEN_SOURCE_LISENCE',
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
            modified: 'Modified',
            read_only: 'Read only',
            untitled: 'untitled',
            restart_update: 'Restart OED and update.',
            welcome: 'Welcome to OED (Open, Edit, and Download).\n\n'+
                'OED is an application that edits text and code, which is ' +
                'implemented only by Web technologies ' +
                '(HTML, CSS, and JavaScript).\n'+
                'A Web App that can be installed offline on a device like ' +
                'OED is called a Progressive Web Application (PWA).\n'+
                'Let\'s enjoy text and code editing together!\n',
        };
    }
}
