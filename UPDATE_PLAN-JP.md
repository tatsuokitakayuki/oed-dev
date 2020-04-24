# アップデート予定

## for OED
* アプリの構造を整える
    * oed.js
        * Core
            * FileManager
            * View
                * Editor（ACE Editor）
                    * Keybinding
                * TopAppBar
                * MenuManager
                * Drawer
                * DialogManager
                * Snackbar
                * Statusbar
            * Options
        * Service Worker
* ファイルリストの各ファイル項目に閉じるボタン「×」を追加する
* TopAppBar と Menu のソースを整理する
* メニューが開いているときに他のメニューボタンにホバリングしたときにはメニューを切り替える
* 編集中の文書ステータスを表示する
* アップデートを通知する

## for Ace
* 文字幅を修正してプルリクする
    * UNICODE の文字幅テーブル生成に問題があるようなので調査する
