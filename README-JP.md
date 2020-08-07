# OED (Open, Edit, and Download)

[English version](https://github.com/tatsuokitakayuki/oed-dev/blob/master/README.md)

## これはなにか

OED はウェブ技術のみで作ったテキスト・コードエディターです。
OED はプログレッシブウェブアプリ（Progressive Web App）です。
主に Chromebook（あるいは Chromium OS やそれを元とした OS の）ユーザーのために OED を開発しています。

## プロジェクトの目的

- OED を実用に耐えうるテキスト・コードエディタにします。
    - 機能を追加します。
    - 不具合を修正します。
    - 保守します。

## OED の特徴

- プログレッシブウェブアプリ（PWA）です。
    - 特定の OS やブラウザに依存しません。
- 配信サーバーを選びません。
    - すべての処理をブラウザで行います。
    - 特定のホスティングサービスに依存しません。
- オフラインで動作します。
    - 動作に必要なファイルをローカルにキャッシュします。
- バックグラウンドで自動的に更新します。
    - 常に配信サーバーのバージョンを保ちます。
- 特別なアクセス許可を要求しません。
    - ブラウザ、OS、およびハードウェアへの不必要なアクセスを予防するためです。
- Cookie を使いません。
    - 代わりに IndexedDB を使います。
- オープンソースソフトウェアです。
    - オープンソースソフトウェアです。

## OED の欠点

- セーブ機能はありません。
    - 代わりにダウンロード機能を用意しました。

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

## OED で使用しているライブラリやフレームワークの一覧

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
    - [Firebase](https://firebase.google.com/) ホスティングサービスを使っています。

### ローカルで試す方法

1. このリポジトリを clone します。
    - git clone https://github.com/tatsuokitakayuki/oed-dev.git
2. public ディレクトリに移動します。
    - cd oed-dev/public/
3. HTTP サーバーを起動します。
    - python3 -m http.server --bind 127.0.0.1 8080
4. ウェブブラウザで localhost:8080 を開きます。

ぜひお試しください。

## 問い合わせ先

* 龍興 尚幸（Tatsuoki, Takayuki）：プロジェクトリーダー
    - Twitter: @ttatsuoki
    - e-mail: takayuki.tatsuoki@gmail.com

お気軽に。
