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
# | \\#
$ | \\$
% | \\%
& | \\&
_ | \\_
{ | \\{
} | \\}

mustは、特殊な文字を含むテキストを、マークアップ言語で決められて特別な書き方に、ボタン一つで変換します。

## 名称について

mustの名称は、MarkUp Support Toolの頭文字から、です。

## 使い方

1. [GitHubのリポジトリ](https://github.com/kubotama/must)からソースコードをダウンロードします。

1. `yarn install`で必要なモジュールをインストールします。

1. `yarn dev`でローカルサーバー環境を起動します。

1. Webブラウザで <http://localhost:3000/> にアクセスします。

1. テキストエリアにテキストを入力して、「特殊文字の変換」ボタンをクリックすると、テキストエリアのテキストが、LaTeXの特殊文字を変換したテキストに変わります。
