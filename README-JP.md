# OED（おえど） - Open, edit, and download.

## これはなにか
「OED」はウェブ技術のみで作ったテキスト・コードエディターです。
「OED」はプログレッシブウェブアプリ（Progressive Web App）です。
私達は主に Chromebook （あるいは Chromium OS やそれを元とした OS の） ユーザーのために「OED」を開発しています。

## プロジェクトの目的
- 「OED」を立派なテキストエディタに仕上げます。
    - 機能を追加します。
        1. Ace のすべての機能にできる限りアクセスできるようにします。
            - 当面の重点目標です。
        2. PWA として備えるべき機能を実装します。
        3. 「OED」ならではの機能を実装します。
    - 「OED」の開発時に発生した不具合を修正します。
    - 「OED」のソースコードを整えます。

## 「OED」の特徴
- 完全なプログレッシブウェブアプリ（PWA）です。
    - 私達は Chrome API を使わずに開発しています。
    - 一般的なテキストエディターと使用感が異なります。
        - 例えば「Save file」はありません。代わりに「Download file」があります。
- 「OED」の実行に必要なすべてのファイルをローカルストレージにキャッシュします。
    - 「OED」はオフラインで動作します。
- バックグラウンドで自動的に「OED」を更新します。
    - 常に最新バージョンを保ちます。
        - dev channel では時々不具合を含んだままリリースすることがあります。
- 私達は「OED」の UI をマテリアルデザインで構築しています。
    - Chrome OS にプリインストールされているほとんどの Web アプリは、マテリアルデザインを使用しています。
    - 私達は「OED」で他のデザインを採用する理由を思いつきません。
    - そして、何よりも私達がマテリアルデザインで「OED」の UI を構築してみたかったから。
        - マテリアルデザインで UI を構築するときに発生する様々な問題を私達なりに洗い出してみたかったから。
- 「OED」は特別なアクセス許可を要求しません。
    - ブラウザ、OS、およびハードウェアへの不必要なアクセスを予防するためです。
- 「OED」は Cookie を使いません。
    - 代わりに IndexedDB を使います。
- 「OED」はオープンソースソフトウェアです。
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

## 「OED」で使用しているライブラリやフレームワークの一覧
* [Ace](https://ace.c9.io/)
* [Material Design Component for Web](https://material.io/develop/web/)
* [Material Design Icons](https://google.github.io/material-design-icons/)
* [localForage](https://localforage.github.io/localForage/)
* [emmet-core](https://github.com/cloud9ide/emmet-core)

## ライセンス
このプログラムはオープンソースソフトウェアです。[MIT License](https://github.com/tatsuokitakayuki/oed-dev/blob/master/LICENSE) の下で配布しています。

## 使い方
### すぐに試す方法
- [安定版 (stable channel)](https://oed-stable.web.app/)
- [開発版 (dev channel)](https://oed-dev.web.app/)

This app uses [Firebase](https://firebase.google.com/) hosting services.

## 問い合わせ先
龍興 尚幸 （Tatsuoki, Takayuki）
- お気軽に。
