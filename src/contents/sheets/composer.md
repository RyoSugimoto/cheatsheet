---
title: Composer（PHP依存管理）
---

## 初期化

### 設定ファイルの作成

```sh
composer init
```

### 既存パッケージから新規プロジェクトを作成

```sh
composer create-project <Vendor/Package> <DirName> [Version]
```

- `DirName` のディレクトリがない場合は作成される。
- 🔗 [create-project](https://getcomposer.org/doc/03-cli.md#create-project)

## コミット・バージョン管理

### 設定ファイルのバリデート

⚠️ `composer.json` `composer.lock` をコミットする前に必ず実行

```sh
composer validate
```

## 依存パッケージの管理

### インストール

```sh
composer install
```

### パッケージの追加

```sh
composer require <Package> ...
```

- `vendor/package:2.*` のようにタグ指定可能
- `vendor/package:dev-<Branch>` でブランチ指定可能

### パッケージの削除

```sh
composer remove <Vendor/Package>
```

- `remove` の代わりに `rm` `uninstall` でもそれぞれ同様に動作

## 依存パッケージの更新

### インストール済みパッケージがアップデートできるかチェック

```sh
composer outdeted
```

### パッケージのバージョンアップとインストール

```sh
composer update
```

- `composer.lock` で依存のバージョンを固定
- `install` コマンドを実行し、 `vendor/` にファイルをダウンロード
- エイリアス `upgrade` も同様に動作

### 特定のパッケージのバージョンアップ

```sh
composer update <Vendor/Package> ...
```

- 対象パッケージはスペース区切りで複数指定可能
- `vendor/*` のようにベンダーのパッケージをまとめて指定可能

## パッケージの検索・詳細確認

### パッケージの検索

#### 対話的に検索:

```sh
composer require
```

#### キーワードで検索:

```sh
composer search <Keyword>
```

### パッケージのページを開く

```sh
composer browse [--homepage]
```

- `--homepage` でリポジトリページの代わりにホームページを開く。
- `home` コマンドも同様に動作

## スクリプト

### 設定ファイルで定義したコマンドを実行

```sh
composer run <ScriptName>
```

- コマンドの名前と内容は `composer.json` の `scripts` で定義しておく。
- 🔗 [Scripts](https://getcomposer.org/doc/articles/scripts.md)

## デプロイ・環境

### サーバがプロジェクトの要件を満たしているか確認

```sh
composer check-platform-reqs
```

## グローバルオプション

| オプション | 意味 |
| --- | --- |
| `--verbose` `-v` | メッセージの詳細度を上げる |
| `--help` `-h` | ヘルプを表示 |
| `--quite` `-q` | メッセージを非表示 |
| `--no-interaction` `-n` | 対話しない |
| `--version` `-V` | バージョン表示 |

- 🔗 [Global Options](https://getcomposer.org/doc/03-cli.md#global-options)

## バージョン表現

- `>` `>=` `<` `<=` `!=` が使用可能
- ` ` もしくは `,` は論理積（AND）
- `|` もしくは `||` は論理和（OR）

| 例 | 意味 |
| --- | --- |
| `>=1.0` | 1.0以上 |
| `>=1.0 <2.0` | 1.0以上かつ2.0未満 |
| `>=1.0 <1.1 \|\| >=1.2` | 1.0以上かつ1.1未満、または1.2以上 |
| `1.0 - 2.0` | 1.0.0から2.0.*まで（2.1未満） |
| `1.0.*` | 1.0.で始まる最新（1.1未満） |
| `~1.2` | 1.2.0から1.2と並列の最新（2.0.0未満） |
| `^1.2.3` | 1.2.3と互換性のある最新（2.0.0未満） |

- 🔗 [Versions and constraints](https://getcomposer.org/doc/articles/versions.md)

## 設定ファイル（ `composer.json` ）

### Packagist以外のリポジトリを設定

設定例:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/username/hello-world"
    }
  ],
  "require": {
    "acme/hello-world": "dev-master"
  }
}
```

- `require` にはパッケージリポジトリの `composer.json` で設定した `name` の値を指定
- `dev-<Branch>` でブランチを指定

## Docker

### Dockerfileでコンテナに追加

```Dockerfile
# Latest release
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

# Specific release
COPY --from=composer/composer:2-bin /composer /usr/bin/composer
```

- 🔗 [Introduction #Docker Image](https://getcomposer.org/doc/00-intro.md#docker-image)

## コーディング

### オートローダーの読み込み

```php
require __DIR__ . '/vendor/autoload.php';
```

## 情報源

- 🔗 [Composer（公式サイト）](https://getcomposer.org/)
- 🔗 [Packagist.org（デフォルトリポジトリ）](https://packagist.org/)
