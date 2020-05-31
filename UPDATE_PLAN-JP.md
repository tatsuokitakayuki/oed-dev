# アップデート予定 for OED
* 通知機能を活用する
* 編集中の文書ステータスを表示する
* メニューが開いているときに他のメニューボタンにホバリングしたときにはメニューを切り替える
* ファイルリストの各ファイル項目に閉じるボタン「×」を追加する
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
* Native File System API を導入する
    * プライバシーポリシーの策定が必要で、しっかり考えないといけない
