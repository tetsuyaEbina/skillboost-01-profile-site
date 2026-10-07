# No.01 プロフィールサイト：開発・更新手順

[作品概要へ戻る](../README.md)

## 処理の流れ

1. Next.jsがファイル構造からページとレイアウトを認識する。
2. page.tsxの画面をlayout.tsxの共通の枠に組み込む。
3. 生成されたHTMLとCSSなどをブラウザへ提供する。
4. ブラウザが画面を表示する。

DBや外部APIは使用していません。
プロフィール情報はソースコード内で管理しています。

## ローカルでの起動

Node.jsのバージョンは.node-versionに記録しています。

fnmを使用している場合：

```bash
fnm install
fnm use
npm ci
npm run dev
```

ブラウザで http://localhost:3000 を開きます。
ポートが使用中の場合は、ターミナルに表示されたURLを使用してください。

## 品質確認

```bash
npm run lint
npm run build
npm audit
```

本番用の表示をローカルで確認する場合：

```bash
npm run start
```

npm run startの前に、npm run buildを実行してください。

## 更新方法

- 自己紹介・スキル・経歴：src/app/page.tsxを編集
- ページタイトル・説明文：src/app/layout.tsxを編集
- 共通の見た目：src/app/globals.cssを編集

変更後はローカルで確認し、コミットしてGitHubへpushします。
VercelとのGit連携によって、公開内容へ反映します。

## ディレクトリ構成

| パス | 内容 |
|---|---|
| src/app/page.tsx | トップページの内容 |
| src/app/layout.tsx | 共通レイアウト・メタデータ |
| src/app/globals.css | Tailwindの読み込みと共通スタイル |
| public/ | 画像などの公開ファイル |
| docs/learning-notes.md | 仕組みと用語の説明 |

## 関連ドキュメント

- [検証記録](verification.md)
- [学習メモ](learning-notes.md)

