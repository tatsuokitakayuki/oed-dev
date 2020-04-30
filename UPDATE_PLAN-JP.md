# アップデート予定

## for OED
* Native File System API を導入する
* アップデートを通知する
* 編集中の文書ステータスを表示する
* メニューが開いているときに他のメニューボタンにホバリングしたときにはメニューを切り替える
* ファイルリストの各ファイル項目に閉じるボタン「×」を追加する
* アプリの構造を整える（随時）
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
