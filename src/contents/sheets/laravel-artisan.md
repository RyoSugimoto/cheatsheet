---
title: 'Laravel `artisan` コマンド'
---

## ヘルプ

### ヘルプの使い方を表示

```bash
php artisan -h
```

### コマンドの一覧を表示

```bash
php artisan list [category]

# もしくは
php artisan
```

## コントローラ

### コントローラを作成

```bash
php artisan make:controller <[dir/]Controller> [-i]
```

`-i` または `--invokable` オプションで単一メソッドクラスに。

## モデル

### モデルを作成

```bash
php artisan make:model <Model> [-fs]
```

`-fs` は `--factory` と `--seed` でファクトリとシーダを同時に作成するオプション。

## マイグレーション

### 新規テーブル用のマイグレーションファイルを作成

```bash
php artisan make:migration create_<models>_table
```

マイグレーション名の最後に `.php` をつけてしまうと、生成されるクラスの `up` `down` メソッドが空になる。

### マイグレーションする `migrate:~`

```bash
php artisan migrate
```

### マイグレーションを最初からやり直す

```bash
php artisan migrate:refresh
```

## ダミーデータ

### シーダを作成

```bash
php artisan make:seeder <Seeder>
```

### ファクトリを作成

```bash
php artisan make:factory <ModelFactory> --model=<Model>
```

### シーディング

```bash
php artisan db:seed --class=<Seeder>
```

## テスト

```bash
php artisan make:test <SomeTest>
```

