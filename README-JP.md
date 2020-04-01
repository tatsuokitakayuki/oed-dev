# TOED（とえど） - Text: Open, edit, and download.

## これはなにか
「TOED」は PWA (Progressive Web Apps)によるテキストエディターの実装例です。
私達は主に Chromebook （あるいは Chromium OS やそれを元とした OS の） ユーザーのために「TOED」を開発しています。

## 目的
- 「TOED」を立派なテキストエディタに仕上げます。
    - 機能を追加します。
        1. Ace のすべての機能にできる限りアクセスできるようにします。
            - 当面の重点目標です。
        2. PWA として備えるべき機能を実装します。
        3. 「TOED」ならではの機能を実装します。
    - 不具合を修正します。
    - ソースコードを整えます。

## 「TOED」の特徴
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

## オープンソースソフトウェアライセンス
このアプリは、次のライブラリとフレームワークを使用して開発しています。

- [Ace](https://ace.c9.io/)
    - [GitHub - ajaxorg/ace-builds: Packaged version of Ace code editor](https://github.com/ajaxorg/ace-builds/)
    - [BSD License](https://github.com/ajaxorg/ace-builds/blob/master/LICENSE)
- [Material Design Component for Web](https://material.io/develop/web/)
    - [GitHub - material-components/material-components-web: Modular and customizable Material Design UI components for the web](https://github.com/material-components/material-components-web)
    - [MIT License](https://github.com/material-components/material-components-web/blob/master/LICENSE)
- [Material Design Icons](https://google.github.io/material-design-icons/)
    - [GitHub - google/material-design-icons: Material Design icons by Google](https://github.com/google/material-design-icons)
    - [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
- [localForage](https://localforage.github.io/localForage/)
    - [localForage/localForage: 💾 Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API.](https://github.com/localForage/localForage)
    - [Apache License Version 2.0](https://github.com/localForage/localForage/blob/master/LICENSE)
- [emmet-core](https://github.com/cloud9ide/emmet-core)
    - [GitHub - cloud9ide/emmet-core](https://github.com/cloud9ide/emmet-core)
    - [MIT License](https://github.com/cloud9ide/emmet-core/blob/master/LICENSE)

## 法的通知
Copyright [Comeluck Lab](https://www.comeluck.jp/).
Developed by 龍興 尚幸 （Tatsuoki, Takayuki）
- [GitHub - tatsuokitakayuki/toed-dev: Text: Open, edit, and download.](https://github.com/tatsuokitakayuki/toed-dev)
- [MIT License](https://github.com/tatsuokitakayuki/toed-dev/blob/master/LICENSE)

## 使い方
### すぐに試す方法
- [安定版 (stable channel)](https://toed-stable.web.app/)
- [開発版 (dev channel)](https://toed-dev.web.app/)

This app uses [Firebase](https://firebase.google.com/) hosting services.

## 問い合わせ先
龍興 尚幸 （Tatsuoki, Takayuki）
- Twitter: @ttatsuoki （プライベートアカウント）
    - お気軽に。