const OED_VERSION = '2.0.20200430.0';
const OED_BASE = 'OED';
const ACE_VERSION = '1.4.10';
const ACE_BASE = 'Ace';
const MDC_VERSION = '5.1.0';
const MDC_BASE = 'MDC';
const MDI_VERSION = '3.0.1';
const MDI_BASE = 'MDI';
const LF_VERSION = '1.7.3';
const LF_BASE = 'localForage';
const EC_VERSION = '1.0.0';
const EC_BASE = 'emmet-core';
const OED_URLS = [
    './',
    './app_bar.js',
    './app_view.js',
    './cache_manager.js',
    './change_app_bar_event.js',
    './change_drawer_item_event.js',
    './change_editor_option_event.js',
    './change_snackbar_event.js',
    './change_view_event.js',
    './core.js',
    './dialog.js',
    './dialog_confirm.js',
    './dialog_cursor_style.js',
    './dialog_file_decoding.js',
    './dialog_first_line_number.js',
    './dialog_fold_style.js',
    './dialog_font_family.js',
    './dialog_font_size.js',
    './dialog_keyboard_handler.js',
    './dialog_language_mode.js',
    './dialog_merge_undo_deltas.js',
    './dialog_new_line_mode.js',
    './dialog_print_margin_column.js',
    './dialog_prompt.js',
    './dialog_rename_file.js',
    './dialog_scroll_past_end.js',
    './dialog_select.js',
    './dialog_select_file.js',
    './dialog_tab_size.js',
    './dialog_theme.js',
    './dialog_wrap.js',
    './drawer.js',
    './file_data.js',
    './file_helper.js',
    './file_manager.js',
    './html_helper.js',
    './images/icons/favicon.png',
    './images/icons/icon-128x128.png',
    './images/icons/icon-144x144.png',
    './images/icons/icon-152x152.png',
    './images/icons/icon-192x192.png',
    './images/icons/icon-384x384.png',
    './images/icons/icon-512x512.png',
    './images/icons/icon-72x72.png',
    './images/icons/icon-96x96.png',
    './keybinding.js',
    './main.css',
    './manifest.json',
    './material_helper.js',
    './menu.js',
    './menu_code.js',
    './menu_edit.js',
    './menu_extensions.js',
    './menu_file.js',
    './menu_help.js',
    './menu_search.js',
    './menu_view.js',
    './oed.js',
    './options.js',
    './rename_file_event.js',
    './res.js',
    './res/ABOUT.md',
    './res/CHANGELOG.md',
    './save_options_editor_event.js',
    './save_options_event.js',
    './snackbar.js',
    './sw.js',
    './ui_helper.js',
];
const ACE_URLS = [
    './ace/ace.js',
    './ace/ext-beautify.js',
    './ace/ext-code_lens.js',
    './ace/ext-elastic_tabstops_lite.js',
    './ace/ext-emmet.js',
    './ace/ext-error_marker.js',
    './ace/ext-keybinding_menu.js',
    './ace/ext-language_tools.js',
    './ace/ext-linking.js',
    './ace/ext-modelist.js',
    './ace/ext-options.js',
    './ace/ext-prompt.js',
    './ace/ext-rtl.js',
    './ace/ext-searchbox.js',
    './ace/ext-settings_menu.js',
    './ace/ext-spellcheck.js',
    './ace/ext-split.js',
    './ace/ext-static_highlight.js',
    './ace/ext-statusbar.js',
    './ace/ext-textarea.js',
    './ace/ext-themelist.js',
    './ace/ext-whitespace.js',
    './ace/keybinding-emacs.js',
    './ace/keybinding-sublime.js',
    './ace/keybinding-vim.js',
    './ace/keybinding-vscode.js',
    './ace/mode-abap.js',
    './ace/mode-abc.js',
    './ace/mode-actionscript.js',
    './ace/mode-ada.js',
    './ace/mode-alda.js',
    './ace/mode-apache_conf.js',
    './ace/mode-apex.js',
    './ace/mode-applescript.js',
    './ace/mode-aql.js',
    './ace/mode-asciidoc.js',
    './ace/mode-asl.js',
    './ace/mode-assembly_x86.js',
    './ace/mode-autohotkey.js',
    './ace/mode-batchfile.js',
    './ace/mode-c9search.js',
    './ace/mode-c_cpp.js',
    './ace/mode-cirru.js',
    './ace/mode-clojure.js',
    './ace/mode-cobol.js',
    './ace/mode-coffee.js',
    './ace/mode-coldfusion.js',
    './ace/mode-crystal.js',
    './ace/mode-csharp.js',
    './ace/mode-csound_document.js',
    './ace/mode-csound_orchestra.js',
    './ace/mode-csound_score.js',
    './ace/mode-csp.js',
    './ace/mode-css.js',
    './ace/mode-curly.js',
    './ace/mode-d.js',
    './ace/mode-dart.js',
    './ace/mode-diff.js',
    './ace/mode-django.js',
    './ace/mode-dockerfile.js',
    './ace/mode-dot.js',
    './ace/mode-drools.js',
    './ace/mode-edifact.js',
    './ace/mode-eiffel.js',
    './ace/mode-ejs.js',
    './ace/mode-elixir.js',
    './ace/mode-elm.js',
    './ace/mode-erlang.js',
    './ace/mode-forth.js',
    './ace/mode-fortran.js',
    './ace/mode-fsharp.js',
    './ace/mode-fsl.js',
    './ace/mode-ftl.js',
    './ace/mode-gcode.js',
    './ace/mode-gherkin.js',
    './ace/mode-gitignore.js',
    './ace/mode-glsl.js',
    './ace/mode-gobstones.js',
    './ace/mode-golang.js',
    './ace/mode-graphqlschema.js',
    './ace/mode-groovy.js',
    './ace/mode-haml.js',
    './ace/mode-handlebars.js',
    './ace/mode-haskell.js',
    './ace/mode-haskell_cabal.js',
    './ace/mode-haxe.js',
    './ace/mode-hjson.js',
    './ace/mode-html.js',
    './ace/mode-html_elixir.js',
    './ace/mode-html_ruby.js',
    './ace/mode-ini.js',
    './ace/mode-io.js',
    './ace/mode-jack.js',
    './ace/mode-jade.js',
    './ace/mode-java.js',
    './ace/mode-javascript.js',
    './ace/mode-json.js',
    './ace/mode-json5.js',
    './ace/mode-jsoniq.js',
    './ace/mode-jsp.js',
    './ace/mode-jssm.js',
    './ace/mode-jsx.js',
    './ace/mode-julia.js',
    './ace/mode-kotlin.js',
    './ace/mode-latex.js',
    './ace/mode-less.js',
    './ace/mode-liquid.js',
    './ace/mode-lisp.js',
    './ace/mode-livescript.js',
    './ace/mode-logiql.js',
    './ace/mode-logtalk.js',
    './ace/mode-lsl.js',
    './ace/mode-lua.js',
    './ace/mode-luapage.js',
    './ace/mode-lucene.js',
    './ace/mode-makefile.js',
    './ace/mode-markdown.js',
    './ace/mode-mask.js',
    './ace/mode-matlab.js',
    './ace/mode-maze.js',
    './ace/mode-mediawiki.js',
    './ace/mode-mel.js',
    './ace/mode-mixal.js',
    './ace/mode-mushcode.js',
    './ace/mode-mysql.js',
    './ace/mode-nginx.js',
    './ace/mode-nim.js',
    './ace/mode-nix.js',
    './ace/mode-nsis.js',
    './ace/mode-nunjucks.js',
    './ace/mode-objectivec.js',
    './ace/mode-ocaml.js',
    './ace/mode-pascal.js',
    './ace/mode-perl.js',
    './ace/mode-perl6.js',
    './ace/mode-pgsql.js',
    './ace/mode-php.js',
    './ace/mode-php_laravel_blade.js',
    './ace/mode-pig.js',
    './ace/mode-plain_text.js',
    './ace/mode-powershell.js',
    './ace/mode-praat.js',
    './ace/mode-prisma.js',
    './ace/mode-prolog.js',
    './ace/mode-properties.js',
    './ace/mode-protobuf.js',
    './ace/mode-puppet.js',
    './ace/mode-python.js',
    './ace/mode-qml.js',
    './ace/mode-r.js',
    './ace/mode-razor.js',
    './ace/mode-rdoc.js',
    './ace/mode-red.js',
    './ace/mode-redshift.js',
    './ace/mode-rhtml.js',
    './ace/mode-rst.js',
    './ace/mode-ruby.js',
    './ace/mode-rust.js',
    './ace/mode-sass.js',
    './ace/mode-scad.js',
    './ace/mode-scala.js',
    './ace/mode-scheme.js',
    './ace/mode-scss.js',
    './ace/mode-sh.js',
    './ace/mode-sjs.js',
    './ace/mode-slim.js',
    './ace/mode-smarty.js',
    './ace/mode-snippets.js',
    './ace/mode-soy_template.js',
    './ace/mode-space.js',
    './ace/mode-sparql.js',
    './ace/mode-sql.js',
    './ace/mode-sqlserver.js',
    './ace/mode-stylus.js',
    './ace/mode-svg.js',
    './ace/mode-swift.js',
    './ace/mode-tcl.js',
    './ace/mode-terraform.js',
    './ace/mode-tex.js',
    './ace/mode-text.js',
    './ace/mode-textile.js',
    './ace/mode-toml.js',
    './ace/mode-tsx.js',
    './ace/mode-turtle.js',
    './ace/mode-twig.js',
    './ace/mode-typescript.js',
    './ace/mode-vala.js',
    './ace/mode-vbscript.js',
    './ace/mode-velocity.js',
    './ace/mode-verilog.js',
    './ace/mode-vhdl.js',
    './ace/mode-visualforce.js',
    './ace/mode-wollok.js',
    './ace/mode-xml.js',
    './ace/mode-xquery.js',
    './ace/mode-yaml.js',
    './ace/mode-zeek.js',
    './ace/snippets/abap.js',
    './ace/snippets/abc.js',
    './ace/snippets/actionscript.js',
    './ace/snippets/ada.js',
    './ace/snippets/alda.js',
    './ace/snippets/apache_conf.js',
    './ace/snippets/apex.js',
    './ace/snippets/applescript.js',
    './ace/snippets/aql.js',
    './ace/snippets/asciidoc.js',
    './ace/snippets/asl.js',
    './ace/snippets/assembly_x86.js',
    './ace/snippets/autohotkey.js',
    './ace/snippets/batchfile.js',
    './ace/snippets/c9search.js',
    './ace/snippets/c_cpp.js',
    './ace/snippets/cirru.js',
    './ace/snippets/clojure.js',
    './ace/snippets/cobol.js',
    './ace/snippets/coffee.js',
    './ace/snippets/coldfusion.js',
    './ace/snippets/crystal.js',
    './ace/snippets/csharp.js',
    './ace/snippets/csound_document.js',
    './ace/snippets/csound_orchestra.js',
    './ace/snippets/csound_score.js',
    './ace/snippets/csp.js',
    './ace/snippets/css.js',
    './ace/snippets/curly.js',
    './ace/snippets/d.js',
    './ace/snippets/dart.js',
    './ace/snippets/diff.js',
    './ace/snippets/django.js',
    './ace/snippets/dockerfile.js',
    './ace/snippets/dot.js',
    './ace/snippets/drools.js',
    './ace/snippets/edifact.js',
    './ace/snippets/eiffel.js',
    './ace/snippets/ejs.js',
    './ace/snippets/elixir.js',
    './ace/snippets/elm.js',
    './ace/snippets/erlang.js',
    './ace/snippets/forth.js',
    './ace/snippets/fortran.js',
    './ace/snippets/fsharp.js',
    './ace/snippets/fsl.js',
    './ace/snippets/ftl.js',
    './ace/snippets/gcode.js',
    './ace/snippets/gherkin.js',
    './ace/snippets/gitignore.js',
    './ace/snippets/glsl.js',
    './ace/snippets/gobstones.js',
    './ace/snippets/golang.js',
    './ace/snippets/graphqlschema.js',
    './ace/snippets/groovy.js',
    './ace/snippets/haml.js',
    './ace/snippets/handlebars.js',
    './ace/snippets/haskell.js',
    './ace/snippets/haskell_cabal.js',
    './ace/snippets/haxe.js',
    './ace/snippets/hjson.js',
    './ace/snippets/html.js',
    './ace/snippets/html_elixir.js',
    './ace/snippets/html_ruby.js',
    './ace/snippets/ini.js',
    './ace/snippets/io.js',
    './ace/snippets/jack.js',
    './ace/snippets/jade.js',
    './ace/snippets/java.js',
    './ace/snippets/javascript.js',
    './ace/snippets/json.js',
    './ace/snippets/json5.js',
    './ace/snippets/jsoniq.js',
    './ace/snippets/jsp.js',
    './ace/snippets/jssm.js',
    './ace/snippets/jsx.js',
    './ace/snippets/julia.js',
    './ace/snippets/kotlin.js',
    './ace/snippets/latex.js',
    './ace/snippets/less.js',
    './ace/snippets/liquid.js',
    './ace/snippets/lisp.js',
    './ace/snippets/livescript.js',
    './ace/snippets/logiql.js',
    './ace/snippets/logtalk.js',
    './ace/snippets/lsl.js',
    './ace/snippets/lua.js',
    './ace/snippets/luapage.js',
    './ace/snippets/lucene.js',
    './ace/snippets/makefile.js',
    './ace/snippets/markdown.js',
    './ace/snippets/mask.js',
    './ace/snippets/matlab.js',
    './ace/snippets/maze.js',
    './ace/snippets/mediawiki.js',
    './ace/snippets/mel.js',
    './ace/snippets/mixal.js',
    './ace/snippets/mushcode.js',
    './ace/snippets/mysql.js',
    './ace/snippets/nginx.js',
    './ace/snippets/nim.js',
    './ace/snippets/nix.js',
    './ace/snippets/nsis.js',
    './ace/snippets/nunjucks.js',
    './ace/snippets/objectivec.js',
    './ace/snippets/ocaml.js',
    './ace/snippets/pascal.js',
    './ace/snippets/perl.js',
    './ace/snippets/perl6.js',
    './ace/snippets/pgsql.js',
    './ace/snippets/php.js',
    './ace/snippets/php_laravel_blade.js',
    './ace/snippets/pig.js',
    './ace/snippets/plain_text.js',
    './ace/snippets/powershell.js',
    './ace/snippets/praat.js',
    './ace/snippets/prisma.js',
    './ace/snippets/prolog.js',
    './ace/snippets/properties.js',
    './ace/snippets/protobuf.js',
    './ace/snippets/puppet.js',
    './ace/snippets/python.js',
    './ace/snippets/qml.js',
    './ace/snippets/r.js',
    './ace/snippets/razor.js',
    './ace/snippets/rdoc.js',
    './ace/snippets/red.js',
    './ace/snippets/redshift.js',
    './ace/snippets/rhtml.js',
    './ace/snippets/rst.js',
    './ace/snippets/ruby.js',
    './ace/snippets/rust.js',
    './ace/snippets/sass.js',
    './ace/snippets/scad.js',
    './ace/snippets/scala.js',
    './ace/snippets/scheme.js',
    './ace/snippets/scss.js',
    './ace/snippets/sh.js',
    './ace/snippets/sjs.js',
    './ace/snippets/slim.js',
    './ace/snippets/smarty.js',
    './ace/snippets/snippets.js',
    './ace/snippets/soy_template.js',
    './ace/snippets/space.js',
    './ace/snippets/sparql.js',
    './ace/snippets/sql.js',
    './ace/snippets/sqlserver.js',
    './ace/snippets/stylus.js',
    './ace/snippets/svg.js',
    './ace/snippets/swift.js',
    './ace/snippets/tcl.js',
    './ace/snippets/terraform.js',
    './ace/snippets/tex.js',
    './ace/snippets/text.js',
    './ace/snippets/textile.js',
    './ace/snippets/toml.js',
    './ace/snippets/tsx.js',
    './ace/snippets/turtle.js',
    './ace/snippets/twig.js',
    './ace/snippets/typescript.js',
    './ace/snippets/vala.js',
    './ace/snippets/vbscript.js',
    './ace/snippets/velocity.js',
    './ace/snippets/verilog.js',
    './ace/snippets/vhdl.js',
    './ace/snippets/visualforce.js',
    './ace/snippets/wollok.js',
    './ace/snippets/xml.js',
    './ace/snippets/xquery.js',
    './ace/snippets/yaml.js',
    './ace/snippets/zeek.js',
    './ace/theme-ambiance.js',
    './ace/theme-chaos.js',
    './ace/theme-chrome.js',
    './ace/theme-clouds.js',
    './ace/theme-clouds_midnight.js',
    './ace/theme-cobalt.js',
    './ace/theme-crimson_editor.js',
    './ace/theme-dawn.js',
    './ace/theme-dracula.js',
    './ace/theme-dreamweaver.js',
    './ace/theme-eclipse.js',
    './ace/theme-github.js',
    './ace/theme-gob.js',
    './ace/theme-gruvbox.js',
    './ace/theme-idle_fingers.js',
    './ace/theme-iplastic.js',
    './ace/theme-katzenmilch.js',
    './ace/theme-kr_theme.js',
    './ace/theme-kuroir.js',
    './ace/theme-merbivore.js',
    './ace/theme-merbivore_soft.js',
    './ace/theme-mono_industrial.js',
    './ace/theme-monokai.js',
    './ace/theme-nord_dark.js',
    './ace/theme-pastel_on_dark.js',
    './ace/theme-solarized_dark.js',
    './ace/theme-solarized_light.js',
    './ace/theme-sqlserver.js',
    './ace/theme-terminal.js',
    './ace/theme-textmate.js',
    './ace/theme-tomorrow.js',
    './ace/theme-tomorrow_night.js',
    './ace/theme-tomorrow_night_blue.js',
    './ace/theme-tomorrow_night_bright.js',
    './ace/theme-tomorrow_night_eighties.js',
    './ace/theme-twilight.js',
    './ace/theme-vibrant_ink.js',
    './ace/theme-xcode.js',
    './ace/worker-coffee.js',
    './ace/worker-css.js',
    './ace/worker-html.js',
    './ace/worker-javascript.js',
    './ace/worker-json.js',
    './ace/worker-lua.js',
    './ace/worker-php.js',
    './ace/worker-xml.js',
    './ace/worker-xquery.js',
];
const MDC_URLS = [
    './material-components-web/dist/material-components-web.min.css',
    './material-components-web/dist/material-components-web.min.js',
];
const MDI_URLS = [
    './iconfont/material-icons.css',
    './iconfont/MaterialIcons-Regular.eot',
    './iconfont/MaterialIcons-Regular.ijmap',
    './iconfont/MaterialIcons-Regular.svg',
    './iconfont/MaterialIcons-Regular.ttf',
    './iconfont/MaterialIcons-Regular.woff',
    './iconfont/MaterialIcons-Regular.woff2',
];
const LF_URLS = [
    './localForage/localforage.min.js',
];
const EC_URLS = [
    './emmet-core/emmet.js',
];
const JOINT_FOR_KEY = '-v';
const CACHE_LIST = [
    {
        base: OED_BASE,
        version: OED_VERSION,
        list: OED_URLS,
        log: OED_BASE
    },
    {
        base: ACE_BASE,
        version: ACE_VERSION,
        list: ACE_URLS,
        log: ACE_BASE + ' (ace-builds)'
    },
    {
        base: MDC_BASE,
        version: MDC_VERSION,
        list: MDC_URLS,
        log: 'Material Design Component for Web'
    },
    {
        base: MDI_BASE,
        version: MDI_VERSION,
        list: MDI_URLS,
        log: 'Material Design Icons'
    },
    {
        base: LF_BASE,
        version: LF_VERSION,
        list: LF_URLS,
        log: LF_BASE
    },
    {
        base: EC_BASE,
        version: EC_VERSION,
        list: EC_URLS,
        log: EC_BASE
    }
];

self.addEventListener('install', event => {
    console.log('[Service Worker] Install');
    event.waitUntil(
        caches.keys().then(keylist => {
            CACHE_LIST.forEach(item => {
                const key = item.base + JOINT_FOR_KEY + item.version;
                if (!keylist.includes(key)) {
                    caches
                        .open(key)
                        .then(cache => {
                            console.log('[Service Worker] Caching all: ' + item.log);
                            return cache.addAll(item.list);
                        })
                        .catch(error => console.error(error));
                }
            });
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keylist => {
                let keys = [];
                CACHE_LIST.forEach(item =>
                    keys.push(item.base + JOINT_FOR_KEY + item.version)
                );
                return Promise.all(
                    keylist
                        .filter(key => !keys.includes(key))
                        .map(key => caches.delete(key))
                );
            })
            .catch(error => console.error(error))
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== "GET") {
        return;
    }
    event.respondWith(
        caches
            .match(event.request)
            .then(responseMatch => {
                return responseMatch || fetch(event.request).then(responseFetch => {
                    console.log('[Service Worker] Fetch new resource: ' + event.request.url);
                    return responseFetch;
                });
            })
            .catch(error => console.error(error))
    );
});
