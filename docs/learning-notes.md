# No.01 プロフィールサイト：仕組みと用語

## 1. 今回の技術構成

今回のサイトは、Next.js・React・TypeScript・Tailwind CSSを使って作っています。

| 技術・仕組み | 何か | 今回の役割 |
|---|---|---|
| React | 画面を部品として組み立てるライブラリ | プロフィール画面を記述する |
| Next.js | Reactを使ったWebアプリのフレームワーク | URLとページの対応、ページ生成などを担当する |
| App Router | Next.jsのルーティングとレイアウトの仕組み | appフォルダの構成からページを管理する |
| TypeScript | JavaScriptに型の仕組みを加えた言語 | コードの誤りを見つけやすくする |
| Tailwind CSS | クラス名で見た目を指定するCSSフレームワーク | 色、余白、文字サイズ、配置を整える |

「Next.js + App Router」は、別々の製品を組み合わせるという意味ではない。
Next.jsのページ管理方式としてApp Routerを採用している、という意味。

Next.jsにはPages Routerという別の方式もあるが、今回使っているのはApp Router。

### ライブラリとフレームワーク

ライブラリは、必要な機能を提供する部品集。
Reactは、画面を組み立てるための機能を提供する。

フレームワークは、アプリ全体の構成や作り方の枠組みを提供するもの。
Next.jsはReactに加えて、ルーティング、ページ生成、共通レイアウトなどを提供する。

Laravelでアプリを作るときにLaravelの構成に沿うように、
Next.jsでも決められたファイル構成に沿って開発する。

## 2. 今回Reactを使っているのか

使っている。

src/app/page.tsxのHome関数と、
src/app/layout.tsxのRootLayout関数は、Reactコンポーネント。

Reactを自分で別途インストールする操作はしていないが、
create-next-appによってNext.jsと一緒にインストールされている。

package.jsonにも、reactとreact-domが記録されている。

### Reactコンポーネントとは

画面の一部分を、再利用・組み合わせできる部品として表現したもの。

例えば、見出し、スキルカード、ナビゲーションなどを
それぞれコンポーネントとして作ることができる。

今回のHomeは、トップページ全体を表すコンポーネント。

```tsx
export default function Home() {
  return <h1>プロフィール</h1>;
}
```

この関数は、表示したい画面の内容を返す。

Reactコンポーネントは、一般的に名前の先頭を大文字にする。

### すべてのカードを別コンポーネントにする必要はあるか

必ずしも必要ではない。

今回は小さな1ページなので、Home内でカードを生成している。
画面が複雑になったり、別のページでも同じカードを使ったりする場合に、
SkillCardなどへ分けると管理しやすくなる。

## 3. JSX・TSXとは

### JSX

JavaScriptの中に、HTMLに似た形で画面を書ける記法。

```tsx
<h1 className="text-4xl">プロフィール</h1>
```

見た目はHTMLに近いが、そのままのHTMLではない。
開発ツールによって、Reactが扱えるJavaScriptへ変換される。

ブラウザがJSXを直接読み取るわけではない。

### TSX

TypeScriptの中でJSXを使うためのファイル形式。

| 拡張子 | 主な内容 |
|---|---|
| .js | JavaScript |
| .jsx | JSXを含むJavaScript |
| .ts | TypeScript |
| .tsx | JSXを含むTypeScript |

今回のpage.tsxとlayout.tsxは、画面の記述とTypeScriptを組み合わせている。

### HTMLとの主な違い

| HTML | JSX |
|---|---|
| class | className |
| labelのfor | htmlFor |
| 文字列を直接書く | 文字列に加えて、波括弧でJavaScriptの値を埋め込める |

```tsx
const name = "蛯名哲也";

return <h1>{name}</h1>;
```

{name}の位置に、変数nameの値が入る。

### 波括弧は何をしているのか

JSX内の波括弧は、JavaScriptの式を埋め込むために使う。

```tsx
<h3>{skill.title}</h3>
```

これは、skill.titleの値を見出しとして表示する指定。

波括弧内には、変数の参照やmapなどの式を書ける。
通常のif文をそのまま書く場所ではない。

### Fragment

今回のHomeは、画面全体を次の記法で包んでいる。

```tsx
<>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</>
```

これはFragmentというReactの機能。
複数の要素をまとめつつ、余分なdivなどを追加しない。

## 4. ページを表示するファイル

| ファイル | 役割 |
|---|---|
| src/app/page.tsx | トップページの内容 |
| src/app/layout.tsx | ページ共通のHTML構造とメタデータ |
| src/app/globals.css | Tailwindの読み込みと共通スタイル |

Laravelに例えると、
page.tsxはページのBlade、layout.tsxは共通レイアウトのBladeに近い。

ただし、BladeとReactは異なる技術なので、あくまで役割を理解するための対応。<br>
Next.jsがpage.tsxとlayout.tsxを自動で認識し、組み合わせる仕組み<br>
src/app/page.tsx => /のページ内容<br>
src/app/layout.tsx => そのページを包む共通の枠

## 5. App RouterとURLの対応

### ルーティングとは

アクセスされたURLに対して、どのページや処理を使うか決める仕組み。

Laravelでは、routes/web.phpなどに対応を書く。

App Routerでは、appフォルダ内のファイル構成でページのURLを表す。

| ファイル | 対応するURL |
|---|---|
| src/app/page.tsx | / |
| src/app/about/page.tsx | /about |
| src/app/posts/page.tsx | /posts |
| src/app/posts/[slug]/page.tsx | /posts/任意の値 |

page.tsxは、App Routerがページとして認識する決められたファイル名。

### srcとは

アプリのソースコードをまとめるためのフォルダ。

今回はsrcディレクトリを使う設定にしたので、
src/appにページを置いている。

src自体はURLに含まれない。

### [slug]とは

URLの一部分が変化することを表す、動的なルートの記法。

例えば、/posts/hello-worldのhello-worldに当たる部分を扱える。

slugは、記事などをURL上で識別する文字列。
今回のNo.01では使っていないが、No.02のブログで関係する。

## 6. page.tsxの中身

### export default

そのファイルが代表として外部へ提供する値を指定する構文。

```tsx
export default function Home() {
  // ...
}
```

Next.jsは、page.tsxのdefault exportをページのコンポーネントとして使う。

Homeという関数名自体がURLを決めているわけではない。
URLを決めるのは、ファイルの配置。

### return

関数の結果を返す構文。

Homeでは、表示したい画面の内容を返している。

### const

再代入できない変数を宣言する構文。

```tsx
const skills = [...];
```

変数skillsを別の値へ再代入することはできない。
ただし、constだけで配列の中身まで変更不可能になるわけではない。

### 配列とオブジェクト

配列は、複数の値を順番にまとめたもの。
オブジェクトは、名前と値の組で情報をまとめたもの。

```tsx
const skills = [
  {
    category: "BACKEND",
    title: "業務に沿ったシステム開発",
  },
];
```

skillsは配列。
その中にあるcategoryとtitleを持つ1件の情報がオブジェクト。

### map

配列の各要素を別の値へ変換し、新しい配列を作るメソッド。

```tsx
{skills.map((skill) => (
  <article key={skill.category}>
    <h3>{skill.title}</h3>
  </article>
))}
```

今回は、スキル情報の配列を画面の要素の配列へ変換している。
結果として、スキルの件数分のカードが表示される。

Bladeの@foreachと、画面を繰り返し表示する役割が近い。

### アロー関数

次の部分は、関数を書く記法の1つ。

```tsx
(skill) => (
  <article>...</article>
)
```

skillを受け取り、括弧内の画面要素を返している。
mapは、この関数を配列の各要素に対して実行する。

### key

Reactが、繰り返し生成された各要素を識別するための値。

```tsx
<article key={skill.category}>
```

同じ一覧の中で、安定した重複しない値を指定する。
今回のcategoryは、それぞれ異なる値なのでkeyとして使っている。

keyは、通常のHTML属性として画面に出力されるものではない。

## 7. layout.tsxの中身

### 共通レイアウト

```tsx
<html lang="ja">
  <body>{children}</body>
</html>
```

layout.tsxは、ページ全体の共通の枠を定義する。

childrenに、page.tsxの内容が組み込まれる。
今回のヘッダーとフッターは、layout.tsxではなくpage.tsxに書いている。

今後、複数ページで同じヘッダーを使いたい場合は、
共通レイアウトへ移す方法もある。

### props

Reactコンポーネントへ渡す情報のこと。

RootLayoutでは、childrenというpropsを受け取っている。

```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ...
}
```

### 分割代入

{ children }は、受け取ったオブジェクトから
childrenという値を取り出す書き方。

### React.ReactNode

Reactが画面の内容として扱える値を表す型。

React要素、文字列、数値、nullなどが含まれる。
childrenには、それらの値を渡せる。

### Readonly

オブジェクトのプロパティへの再代入を、
TypeScript上で禁止する型の仕組み。

実行時にオブジェクトを凍結する処理ではない。

### 型とは

値の種類や構造を表す情報。

例えば、文字列、数値、
「childrenというプロパティを持つオブジェクト」などを指定する。

TypeScriptは型を使って、コード上の不整合を検出する。
ブラウザで動くJavaScriptには、型の記述は基本的に残らない。

### import

別のファイルやパッケージから機能を読み込む構文。

```tsx
import "./globals.css";
```

これは、共通CSSを読み込む。

```tsx
import type { Metadata } from "next";
```

これは、Next.jsからMetadataという型を読み込む。
import typeは、型のための読み込みであることを表す。

### metadata

ページについての情報。

```tsx
export const metadata: Metadata = {
  title: "蛯名哲也 | Webエンジニア・個人事業主",
  description: "...",
};
```

titleはブラウザのタブなどに使われる。
descriptionはページの概要を表す。

検索結果にdescriptionが必ずそのまま表示されるとは限らない。

### lang="ja"

ページが日本語であることを示す。
読み上げ機能やブラウザが言語を判断する手がかりになる。

## 8. Server Componentとは

サーバー側で実行されるReactコンポーネント。

App Routerでは、ページとレイアウトは標準でServer Componentになる。
今回のHomeとRootLayoutもServer Componentとして実装している。

配列からカードを生成する処理などは、サーバー側で行える。
静的生成の場合は、その処理をビルド時に実行できる。

「Reactを使う＝すべての処理をブラウザで実行する」ではない。

### Client Componentとは

ブラウザ側での状態管理やイベント処理などを使うためのコンポーネント。

例えば、次のような機能で必要になる。

- ボタンを押したときに表示内容を変える
- 入力中の値をReactで管理する
- ブラウザのAPIを利用する

Client Componentの境界を作るファイルには、
先頭に"use client"を指定する。

今回はReactによる状態管理やクリック処理が不要なので、指定していない。

なお、Client Componentでも初回表示用のHTMLをサーバー側で生成できる。
「Client Componentは初回からブラウザだけで描画する」という意味ではない。

### 今回、ブラウザ側で何が動くのか

HTMLの表示、CSSによる配置、
ページ内リンクの移動などはブラウザが行う。

これらのために、自分でReactのイベント処理を書く必要はない。
Next.jsの仕組みによって配信されるJavaScriptが、
一切ないという意味でもない。

## 9. 画面が表示される流れ

1. ブラウザがトップページのURLへアクセスする。
2. Next.jsがpage.tsxとlayout.tsxから生成したページを提供する。
3. ブラウザがHTML、CSSなどを受け取る。
4. ブラウザが文字、色、余白、カードなどを表示する。

今回のサイトには、DBへの問い合わせや外部APIからの取得はない。
プロフィール情報はpage.tsxに書いてある。

### HTMLとは

文章や画面の構造を表す言語。

今回使っている主な要素：

| 要素 | 意味 |
|---|---|
| header | ページやセクションの導入部分 |
| nav | ナビゲーション |
| main | ページの主要な内容 |
| section | 見出しを持つ内容のまとまり |
| article | 独立した内容として扱えるまとまり |
| footer | ページやセクションの末尾情報 |
| h1〜h3 | 見出しとその階層 |
| p | 段落 |
| ul / li | 順序を持たない一覧とその項目 |
| a | リンク |
| div | 汎用的なまとまり |

見た目だけでなく、内容の役割に合った要素を使う。

### 静的生成とは

アクセスのたびにページを作るのではなく、
事前にページを生成しておく方式。

今回のように、内容がコード内で決まり、
アクセスごとのデータ取得がないページは静的生成できる。

実際の生成方式はビルド結果で確認する。

## 10. CSSとTailwind CSS

### CSSとは

HTMLの見た目を指定する言語。
文字サイズ、色、余白、配置などを設定する。

### Tailwind CSSとは

小さな役割のCSSクラスを組み合わせて、
見た目を作るフレームワーク。

```tsx
<h1 className="text-4xl font-bold">
```

text-4xlは文字サイズ、font-boldは太字を指定する。

Tailwindは、ソースコードで使われているクラスをもとに
必要なCSSを生成する。
ブラウザがTailwindのクラス名の意味を直接解釈するわけではない。

### よく使ったクラス

| クラス | 役割 |
|---|---|
| flex | フレックス配置 |
| grid | グリッド配置 |
| gap-6 | 要素間の余白 |
| px-6 | 左右の内側余白 |
| py-20 | 上下の内側余白 |
| mt-6 | 上側の外側余白 |
| mx-auto | 左右の外側余白を自動にして中央へ配置 |
| max-w-6xl | 最大幅を制限 |
| text-sm | 文字サイズ |
| text-slate-600 | 文字色 |
| bg-white | 背景色 |
| border | 枠線 |
| rounded-2xl | 角を丸くする |
| shadow-sm | 小さな影 |

数値は、すべてそのままpxを表すわけではない。
Tailwindのテーマで定義された値に対応する。

### レスポンシブ対応

画面幅などに応じて、表示や配置を変えること。

```tsx
<div className="grid gap-6 md:grid-cols-3">
```

標準設定では、mdは48rem以上で適用される。
一般的な環境では768pxに相当する。

小さい画面では1列、md以上では3列になる。
スマートフォンかどうかをJavaScriptで判定しているわけではない。

### hover

マウスポインターが要素に重なった状態。

```tsx
className="bg-teal-700 hover:bg-teal-800"
```

通常時と、ポインターを重ねたときの背景色を指定している。

### @import

別のCSSを読み込む指定。

```css
@import "tailwindcss";
```

Tailwindを読み込む入口。

### @apply

Tailwindのスタイルを、独自のCSSクラスへまとめる指定。

```css
.section-container {
  @apply mx-auto max-w-6xl px-6 py-16 sm:py-20;
}
```

section-containerを使うことで、
セクションの幅と余白を統一している。

### @layer

CSSをレイヤーに分け、スタイルの優先順位を整理する仕組み。

今回は共通クラスをcomponentsレイヤーに置いている。

## 11. ページ内ナビゲーション

```tsx
<a href="#skills">スキル</a>
```

を押すと、次の要素へ移動する。

```tsx
<section id="skills">
```

hrefはリンク先、idは要素の識別名。

#skillsは、同じページ内のskillsという識別名を持つ場所を示す。
ブラウザ標準の機能で動くため、クリック処理を書いていない。

## 12. アクセシビリティのための指定

アクセシビリティは、さまざまな利用者が
情報を理解し、操作できるようにする考え方。

### aria-label

要素の用途を読み上げ機能などへ伝える名前。

```tsx
<nav aria-label="メインナビゲーション">
```

このnavが何のナビゲーションかを説明している。

### aria-hidden

読み上げ機能などに、その要素を伝えない指定。

```tsx
<div aria-hidden="true">TE</div>
```

TEは装飾として置いている。
名前は別の場所に文字で表示しているので、
装飾のTEは読み上げ対象から外している。

### sr-only

通常の画面では視覚的に隠し、
読み上げ機能には伝わるようにするTailwindのクラス。

本文へ移動するリンクに使っている。

### focus-visible

キーボード操作などで要素が選択されたとき、
選択位置がわかるようにする状態。

今回のCSSでは、リンクなどに輪郭線を表示する。

### tabIndex={-1}

通常のTabキーによる移動順には追加せず、
フォーカス対象にできる指定。

今回のmainに付けて、本文への移動を支援している。

## 13. 生徒への説明例

今回のサイトでは、Reactで画面を記述しています。
Next.jsは、そのReactの画面をWebページとして提供する仕組みです。

App RouterはNext.jsのページ管理方式で、
appフォルダ内の配置からURLが決まります。

page.tsxにはページの内容、
layout.tsxには共通の枠、
globals.cssには見た目の設定を書いています。

JSXは、JavaScriptの中でHTMLに似た形で画面を書く記法です。
今回はTypeScriptと組み合わせているので、tsxファイルを使います。

スキルカードは配列から生成し、
スマートフォンとPCの配置の違いはTailwindのCSSで制御しています。

## 14. 理解を確認する実験

1. skillsのtitleを変更し、対応するカードが変わることを確認する。
2. skillsに1件追加し、カードが増えることを確認する。
3. md:grid-cols-3をmd:grid-cols-2に変更し、広い画面での列数を見る。
4. metadata.titleを変更し、ブラウザのタブを確認する。
5. href="#skills"とid="skills"の対応を確認する。

実験後は元に戻すか、採用する変更だけを残す。

## 15. Gitで管理するもの

ソースコード、設定、README、package-lock.json、.node-versionを管理する。
node_modulesはnpm ciで再作成できるため管理しない。
.nextはビルド結果なので管理しない。
.envなどの認証情報を含み得るファイルも管理しない。
.env.exampleにはダミー値だけを入れる。

## 16. 開発と本番の違い

- npm run dev：編集しながら確認する開発サーバー
- npm run build：本番用の成果物を生成する
- npm run start：生成済みの成果物を使って本番用サーバーを起動する
