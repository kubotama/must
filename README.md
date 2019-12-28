# must

## はじめにとお願い

Nuxt.jsやVue.jsを勉強していて、なにか作りたいと思って作ってみました。node.jsやNuxt.js, Vue.jsに慣れていませんので、いろいろとおかしなところもあると思いますが、お手柔らかにお願いできると有難いです。

## 機能

### 特殊文字の変換

LaTeXなどのマークアップ言語では、テキストの中にコマンドを埋め込むため、コマンドの開始を意味する文字、いわゆる特殊文字が必要です。
たとえばLaTeXの場合は\\がコマンドを開始する文字です。コマンドを開始する文字そのものをテキストの中で参照する場合には、
コマンドの開始ではない意図で書かれていることを指示するために、特別な書き方をします。
LaTeXで\\そのものを書くには、\\textbackslashと書きます。
LaTeXでは特殊文字は以下の通りです。

出力 | 入力
---- | ----
^ | \textasciicircum
~ | \textasciitilde
\ | \textbackslash
\# | \\#
$ | \\$
% | \\%
& | \\&
_ | \\_
{ | \\{
} | \\}

mustは、特殊な文字を含むテキストを、マークアップ言語で決められた特別な書き方に、ボタン一つで変換します。

### 脚注の作成

footnoteボタンをクリックすると、LaTeXの脚注の形式に変換します。変換するときに、同時に以下の処理もします。

- 特殊文字を変換します。
- 改行、タブを空白に変換します。
- 先頭および末端の空白、改行、タブを除去します。

以下が変換の例です。

変換前 | 変換後
-- | --
脚注1 | \footnote{脚注1}
foot_note_2 | \footnote{foot\\_note\\_2}
脚注3\nあいう | \footnote{脚注3 あいう}
脚注\t4 | \footnote{脚注 4}
\nxyz | \footnote{xyz}

### 見出しの作成

以下のボタンをクリックすると、LaTeXの見出しの形式に変換します。

- chapter
- section
- subsection
- subsubsection
- paragraph
- subparagraph

変換するときに、同時に以下の処理もします。

- 特殊文字を変換します。
- 改行、タブを空白に変換します。
- 先頭および末端の空白、改行、タブを除去します。

以下が変換の例です。

変換前 | 見出しの種類 | 変換後
-- | -- | --
見出し1 | section | \section{見出し1}
sub_section_2 | subsection | \subsection{sub\_section\_2}
見出し3\nあいうえお | subsubsection | \subsubsection{見出し3 あいうえお}
見出し\t4 | paragraph | \paragraph{見出し 4}
\nxyz | subparagraph | \subparagraph{xyz}

## 名称について

mustの名称は、MarkUp Support Toolの頭文字から、です。

## 使い方

1. [GitHubのリポジトリ](https://github.com/kubotama/must)からソースコードをダウンロードします。

1. `yarn install`で必要なモジュールをインストールします。

1. `yarn dev`でローカルサーバー環境を起動します。

1. Webブラウザで <http://localhost:3000/> にアクセスします。

1. テキストエリアにテキストを入力して、「特殊文字の変換」ボタンをクリックすると、テキストエリアのテキストが、LaTeXの特殊文字を変換したテキストに変わります。
