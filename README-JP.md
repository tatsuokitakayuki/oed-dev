# OED（おえど） - Open, edit, and download.

## これはなにか
「OED」はウェブ技術のみで作ったテキスト・コードエディターです。
「OED」はプログレッシブウェブアプリ（Progressive Web Apps）です。
私達は主に Chromebook （あるいは Chromium OS やそれを元とした OS の） ユーザーのために「OED」を開発しています。

## 目的
- 「OED」を立派なテキストエディタに仕上げます。
    - 機能を追加します。
        1. Ace のすべての機能にできる限りアクセスできるようにします。
            - 当面の重点目標です。
        2. PWA として備えるべき機能を実装します。
        3. 「OED」ならではの機能を実装します。
    - 不具合を修正します。
    - ソースコードを整えます。

## 「OED」の特徴
- 完全なプログレッシブウェブアプリ（PWA）です。多分。
    - Chrome API を使っていません。
    - 一般的なテキストエディターと使用感が異なります。
        - 例えば「Save file」はありません。代わりに「Download file」があります。
- アプリの実行に必要なすべてのファイルをローカルストレージにキャッシュします。
    - オフラインで動作します。多分。
- バックグラウンドで自動的に更新します。
    - 常に最新バージョンを保ちます。
        - dev channel では時々不具合を含んだままリリースすることがあります。
- マテリアルデザインを使っています。
    - Chrome OS にプリインストールされているほとんどの Web アプリは、マテリアルデザインを使用しています。
    - 私達はこのアプリで他のデザインを採用する理由を思いつきません。
    - そして、何よりも私達が使いたかったから。
        - 使ってみないと良し悪しが測れないから。
- 特別なアクセス許可は必要ありません。
    - ブラウザ、OS、およびハードウェアへの不必要なアクセスを防止するためです。
- Cookie 不使用です。
    - 代わりに IndexedDB を使用しています。
- オープンソースソフトウェアです。
    - オープンソースソフトウェアです。

## システム要件
- OS
    - Chrome OS（重要対象、動作確認済み）
    - Linux（動作確認報告あり）
    - Windows（動作確認済み）
    - Mac
    - Android（動作確認済みですが、不安定です）
    - iOS
    - iPadOS
- ブラウザ
    - Chrome（重要対象、動作確認済み）
    - Firefox
    - Edge（EdgeHTML と Chromium で動作確認済み）
    - Safari

## 使用しているライブラリやフレームワークの一覧
* [Ace](https://ace.c9.io/)
* [Material Design Component for Web](https://material.io/develop/web/)
* [Material Design Icons](https://google.github.io/material-design-icons/)
* [localForage](https://localforage.github.io/localForage/)
* [emmet-core](https://github.com/cloud9ide/emmet-core)

## ライセンス
このプログラムはフリーソフトウェアです。[MIT License](https://github.com/tatsuokitakayuki/oed-dev/blob/master/LICENSE)の下で配布されます。

## 使い方
### すぐに試す方法
- [安定版 (stable channel)](https://oed-stable.web.app/)
- [開発版 (dev channel)](https://oed-dev.web.app/)

This app uses [Firebase](https://firebase.google.com/) hosting services.

## 問い合わせ先
龍興 尚幸 （Tatsuoki, Takayuki）
- お気軽に。
