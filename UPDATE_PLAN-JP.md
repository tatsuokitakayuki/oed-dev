# アップデート計画 for OED

* 通知機能を活用する
* メニューが開いているときに他のメニューボタンにホバリングしたときにはメニューを切り替える
* アプリの構造を整える（案）
    * Starter (oed.js)
        * Core
            * FileManager
            * AppView
                * Editor（ACE Editor）
                    * Keybinding
                * TopAppBar
                * MenuManager
                    * 各メニュー
                * Drawer
                * DialogManager
                    * 各ダイアログ
                * Snackbar
                * Statusbar
            * Options
        * Service Worker (sw.js)

