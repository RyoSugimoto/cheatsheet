---
title: Git
---

## 用語

|用語|意味|
|---|---|
|head|各ブランチの先端のコミット|
|HEAD|現在のブランチのhead|

## 基本コマンド

### リポジトリをクローン

```sh
git clone [-b <Branch>] <Repository> [DirName]
```

📕 [`git clone` コマンドの詳細](https://git-scm.com/docs/git-clone/ja)

### ブランチを安全に切り替える

```sh
git switch [-c] <Branch>
```

`-c` : ブランチを新規作成
