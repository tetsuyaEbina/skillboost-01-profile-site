# プロフィール／自己紹介サイト

Webエンジニア・蛯名哲也の自己紹介、スキル、活動内容を紹介する
1ページのプロフィールサイトです。

実案件を想定した制作課題として、
情報設計から実装・公開・性能確認まで取り組みました。

## 開発状況

Vercelへの公開とスマートフォンでの表示・操作確認を完了しています。
PageSpeed InsightsのモバイルPerformanceは100でした。

課題指定のコミット数の確認は保留しています。

## 公開URL

[プロフィールサイトを開く](https://skillboost-01-profile-site.vercel.app/)

## スクリーンショット

PC・スマートフォンの画面を追加予定です。

## 想定する閲覧者と目的

- 企業の採用担当者・開発担当者
- Webシステム開発を依頼する事業者

開発者の得意分野、仕事への姿勢、活動内容を
短時間で把握できることを目指します。

## 主な機能

- 自己紹介・スキル・経歴の表示
- ページ内ナビゲーション
- 画面幅に応じたレイアウト
- 日本語のページタイトル・説明文
- キーボード操作時のフォーカス表示
- 本文へのスキップリンク

## 使用技術

| 技術 | 用途 |
|---|---|
| Next.js 16 / App Router | ページ生成・共通レイアウト |
| React 19 | 画面のコンポーネント |
| TypeScript | 型によるコードの検査 |
| Tailwind CSS 4 | レイアウト・スタイル |
| ESLint | コードの検査 |
| Vercel | サイトの公開 |

具体的なバージョンはpackage.jsonとpackage-lock.jsonを参照してください。

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

## 設計上の工夫

- 紹介文、スキル、経歴の順で情報を整理
- 繰り返すカードは配列から生成し、更新箇所を集約
- 小さい画面では1列、広い画面では複数列で表示
- クライアント側の状態管理やイベント処理を追加せず、
  App RouterのServer Componentとして実装
- 外部フォントや大きな画像を使わず、転送量を抑える

## 達成基準

- [x] Vercelの公開URLを発行
- [x] PageSpeed InsightsのモバイルPerformanceが80以上
- [x] スマートフォン実機で表示・操作を確認
- [x] GitHubのPublicリポジトリへpush
- [x] コミット5件以上の確認

## 検証結果

| 項目 | 結果 |
|---|---|
| 確認日 | 2026年10月7日 |
| 確認URL | https://skillboost-01-profile-site.vercel.app/ |
| PageSpeed Insights | モバイルPerformance 100 |
| スマートフォン実機 | 表示崩れなし、操作確認済み |
| lint | 成功 |
| build・TypeScript型チェック | 成功 |
| ページ生成方式 | トップページを静的生成 |
| 依存関係の監査 | braces由来のHigh警告5件（依存元を含む） |

性能スコアは測定時点の結果であり、測定条件によって変動します。

## 依存関係の確認

2026年10月7日にnpm auditを実行し、
ESLint関連の依存パッケージbracesに由来するHigh警告を確認しました。
依存元を含め、報告件数は5件です。

依存経路：

eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces

今回、公開ページには外部から検索パターンを受け取る処理を設けていません。
ただし、脆弱性が解消したことを意味するものではありません。

npm audit fix --forceはeslint-config-nextを14系へ変更する提案だったため、
現在のNext.js 16との整合性を保つ目的で実行していません。

修正版や関連パッケージの更新を確認し、更新時に再監査します。

参考：
https://github.com/advisories/GHSA-vfj7-8cjw-p6xm

## 学習メモ

React、JSX、TypeScript、App Router、
各ファイルの役割と表示の仕組みは
[学習メモ](docs/learning-notes.md)にまとめています。

## AIの利用

AIを実装案、コードの下書き、ドキュメント作成に利用しました。
掲載内容、設計、コード、動作は制作者が確認します。

## 公開情報の取り扱い

クライアントの非公開情報や認証情報は掲載しません。環境変数の実値はGit管理から除外します。
