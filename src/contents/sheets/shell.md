---
title: 'シェルの基本操作（zsh）'
---

## 基本操作

### 移動

| キー | 動作 |
| --- | --- |
| `^F` | forward-char |
| `^B` | backward-char |
| `^P` | up-line-or-history |
| `^N` | down-line-or-history |
| `^A` | beginning-of-line |
| `^E` | end-of-line |

### 文字操作

| キー | 動作 |
| --- | --- |
| `^D` | delete-char-or-list |
| `^K` | kill-line |
| `^Y` | yank |
| `^T` | transpose-chars |
| `^H` | backward-delete-char |
| `^W` | backward-kill-word |
| `^U` | kill-whole-line |
| `^L` | clear-screen |

## 特殊な変数

| キー | 動作 |
| --- | --- |
| `$1`, `$2`, ... | 引数を参照 |
| `$@` | すべての引数を参照（個別） |
| `$*` | すべての引数を参照（結合） |
| `$0` | 直前のコマンドの終了ステータス |
| `$$` | シェルのPID |
| `$_` | 最後のコマンドの最後の引数 |
| `$#` | 引数の総数 |

## シェルの情報

### 現在のシェルを確認

```sh
# 現在のシェルまたは実行中スクリプト
echo $0

# ログインシェル
echo $SHELL
```

### デフォルトシェルをzshにする

```sh
chsh -s /bin/zsh
```

## バインドキー

### バインドキーを確認

```sh
# 設定ファイルを読み込まない場合は下記
zsh --no-rcs

# バインドキー一覧を表示
bindkey

# 重複を除外してキーバインドの数を数える
bindkey | awk '{print $2}' | sort | uniq | wc -l
```

### バインドキーのモードを確認

```sh
bindkey -lL main

# viモードの場合
# bindkey -A viins main

# emacsモードの場合
# bindkey -A emacs main
```

### バインドキーのモードを変更

```sh
# emacsモードに変更
bindkey -e

# viモードに変更
bindkey -v 
```

## 起動

### シェルを再起動

環境変数や設定の再読み込みの際に使う。

```sh
exec $SHELL -l
```


