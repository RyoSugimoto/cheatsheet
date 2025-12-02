---
title: 'PostgreSQL CLI（psql）チートシート'
---

## 接続・終了系

### データベースに接続

```bash
psql -U ユーザー名 -d データベース名
```

### リモートDBに接続

```bash
psql -h ホスト -p ポート -U ユーザー名 -d データベース名
```

### psql を終了する

```sql
\q
```

### 別のデータベースに接続（`connect` の略）

```sql
\c データベース名
```

## データベース操作

### データベース一覧を表示 ( `\list` と同じ)

```sql
\l
```

### 新しいデータベースを作成

```sql
CREATE DATABASE dbname;
```

### データベースを削除

```sql
DROP DATABASE dbname;
```


## テーブル関連

### 現在のスキーマ内のテーブル一覧を表示

```sql
\dt
```

### 特定スキーマのテーブル一覧

```sql
\dt スキーマ名.*
```

### テーブル構造（カラム・制約など）を表示

```sql
\d テーブル名
```

### テーブル詳細（サイズやコメント含む）を表示

```sql
\d+ テーブル名
```

### テーブル作成

```sql
CREATE TABLE table_name (...);
```

### テーブル削除

```sql
DROP TABLE table_name;
```

## スキーマ・その他オブジェクト

### スキーマ一覧

```sql
\dn
```

### ビュー一覧

```sql
\dv
```

### 関数一覧

```sql
\df
```

## データ操作 (SQL)

### テーブル内容をすべて表示

```sql
SELECT * FROM table_name;
```

### データを挿入

```sql
INSERT INTO table_name VALUES (...);
```

### データ更新

```sql
UPDATE table_name SET col = val WHERE ...;
```

### データ削除

```sql
DELETE FROM table_name WHERE ...;
```

### CSVにエクスポート

```sql
COPY table_name TO '/path/file.csv' CSV HEADER;
```

### CSVからインポート

```sql
COPY table_name FROM '/path/file.csv' CSV HEADER;
```

## 情報・設定確認

### ユーザー（ロール）一覧

```sql
\du
```

### 現在の接続情報を表示

```sql
\conninfo
```

### 文字エンコーディングを表示

```sql
\encoding
```

### クエリの実行時間を表示／非表示トグル

```sql
\timing
```

### psqlの変数設定を確認／変更

```sql
\set
```

## 出力フォーマット・見やすさ

### 表示形式を縦型モードに切り替え（オン/オフ）

```sql
\x
```

### 表形式の枠線を表示

```sql
\pset border 2
```

### アライメント（整列表示）をトグル

```sql
\a
```

### HTML形式で出力

```sql
\H
```

## ヘルプ・補助

### psqlコマンド一覧を表示

```sql
\?
```

### SQLコマンドのヘルプを表示

```sql
\h
```

### 特定のSQLコマンドのヘルプを表示

```sql
\h SELECT
```

### シェルコマンドを実行（例：`\! ls`）

```sql
\! コマンド
```


## 便利なテクニック

### SQLエディタを開いて編集・実行

```sql
\e
```

### SQLファイルを実行

```sql
\i ファイル.sql
```

### 5秒ごとにクエリを自動実行（監視）

```sql
\watch 5 SELECT count(*) FROM logs;
```

### クエリ結果をファイルに出力

```sql
\g ファイル名
```

## インデックス

### インデックス一覧

```sql
\di
```

### インデックスを作成

```sql
CREATE INDEX <インデックス名> ON <テーブル名>(<カラム名>);
```

### 複合インデックスを作成

```sql
CREATE INDEX <インデックス名> ON <テーブル名>(<カラム名1>, <カラム名2>);
```

### UNIQUEインデックス

```sql
CREATE UNIQUE INDEX <インデックス名> ON <テーブル名>(カラム名);
```

### インデックスの使用状況を確認

```sql
EXPLAIN ANALYZE
-- 対象クエリ
```

### 部分インデックス

条件式に該当する行のみにインデックスを作る。

```sql
CREATE INDEX <インデックス名>　ON <テーブル名>(カラム名) WHERE <条件式>;
```

### 関数インデックスの例

`email` を小文字にした値でインデックスを作る。

```sql
CREATE INDEX idx_lower_email ON users(lower(email));
```

### 全文検索インデックス（tsvector / tsquery）

```sql
CREATE INDEX <インデックス名> ON <テーブル名> USING GIN(to_tsvector('simple', <カラム名>));

-- 検索
SELECT <カラム名> FROM <テーブル名> WHERE to_tsvector('simple', <カラム名>) @@ to.tosquery(<キーワード>);
```

#### PostgreSQLの全文検索の特徴:

- `tsvector` 型に文章を変換し、GIN/GiST インデックスで高速検索
- 単語の重み付け、ランキング、ステミング、辞書など多機能
- 日本語は外部エクステンションで対応（ `pg_jieba` など）

## Tips

- SQLは **`;`（セミコロン）** を忘れると実行されません。 
- コマンドは **バックスラッシュ（`\`）** で始まります（psql独自）。 
- `psql -E` で起動すると、`\d` などが裏で発行している SQL が見られます（学習に便利）。
