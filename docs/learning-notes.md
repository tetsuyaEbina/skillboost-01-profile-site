# No.01 学習メモ

## それぞれの役割

- Node.js：開発サーバーや本番用ビルドを動かす実行環境
- npm：ライブラリの管理と、package.jsonに定義されたコマンドの実行
- React：画面を部品として記述するライブラリ
- Next.js：Reactを使ったページの生成、URLの対応、ビルドなどを担うフレームワーク
- TypeScript：型によってコードの誤りを見つけやすくする言語
- Tailwind CSS：クラス名を指定してスタイルを組み立てるCSSフレームワーク

## 画面が表示される流れ

1. ブラウザがトップページのURLにアクセスする。
2. Next.jsがsrc/app/page.tsxをトップページとして扱う。
3. page.tsxの画面をlayout.tsxのchildrenに組み込む。
4. ブラウザが生成されたHTMLとCSSなどを受け取り、表示する。

開発時は開発サーバーで確認する。
本番では、静的生成の対象となるページはビルド時に生成できる。
実際の生成方式はnpm run buildの出力で確認する。

## page.tsx

Home関数がトップページの画面を返す。
HTMLに似た記法はJSXで、このファイルではTypeScriptと組み合わせたTSXを使う。

skills.mapは、配列の各要素をカードの画面に変換する。
keyは、Reactが繰り返し要素を識別するために指定する。

このページには"use client"を書いていないため、
App RouterではServer Componentとして扱われる。
ページ内リンクやCSSによるレイアウトは、それだけでブラウザ上で機能する。

## layout.tsx

html・bodyなど、ページ全体の枠組みを定義する。
childrenには各ページの内容が入る。
metadataはページタイトルと説明文を設定する。

## Tailwindと画面幅

grid-colsなどのクラスがレイアウトを設定する。
md:grid-cols-3は、標準設定では48rem以上で3列にする指定。
一般的な設定では768pxに相当する。
それより狭い画面では、基本の1列表示になる。

globals.cssの@import "tailwindcss"でTailwindを読み込む。
@applyは、複数のTailwindクラスを共通クラスにまとめるために使う。

## ページ内リンク

href="#skills"は、id="skills"の場所へ移動する。
今回は別ページへの移動ではなく、同じページ内の移動。

## Gitで管理するもの

ソースコード、設定、README、package-lock.json、.node-versionを管理する。
node_modulesはnpm ciで再作成できるため管理しない。
.nextはビルド結果なので管理しない。
.envなどの認証情報を含み得るファイルも管理しない。
.env.exampleにはダミー値だけを入れる。

## 開発と本番の違い

- npm run dev：編集しながら確認する開発サーバー
- npm run build：本番用の成果物を生成する
- npm run start：生成済みの成果物を使って本番用サーバーを起動する

## 理解を確認する実験

- skillsに1件追加し、カード数が変わることを確認する。
- md:grid-cols-3をmd:grid-cols-2に変更し、広い画面での列数を見る。
- metadata.titleを変更して、ブラウザのタブを確認する。
- ナビゲーションのhrefと、移動先のidの関係を確認する。

実験後は元に戻すか、採用する変更だけをコミットする。
