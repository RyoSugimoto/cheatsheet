---
title: GitHub CLI
---

## リポジトリ

### 新規リポジトリを作成

```sh
gh repo create <Name> [--private] --source .
```

ソースに自動的に `origin` リモートが設定される。

#### 作成したリポジトリにプッシュ:

```sh
git branch -M main # 現在のブランチ名が `main` 以外の場合
git push -u origin main
```
