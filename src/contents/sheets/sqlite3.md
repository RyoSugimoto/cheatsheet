---
title: 'SQLite3 CLI（sqlite3）チートシート'
---

## 接続・終了系

### データベースファイルを開く（なければ作成）

```bash
sqlite3 ファイル名.db
```

### データベースを開く

```sql
.open ファイル名.db
```

### 現在接続中のデータベース一覧を表示

```sql
.databases
```

### SQLite を終了

```sql
.exit` または `.quit
```

## データベース操作


### 他のDBを接続（マルチDB操作）

```sql
ATTACH '別のファイル.db' AS 別名;
```

### 接続したDBを切断

```sql
DETACH 別名;
```

### 現在のDBをバックアップ

```sql
.backup ファイル名.db
```

### バックアップから復元

```sql
.restore ファイル名.db
```

## テーブル関連


### 現在のデータベース内のテーブル一覧を表示

```sql
.tables
```

### 全テーブルのCREATE文を表示

```sql
.schema
```

### 指定テーブルのCREATE文を表示

```sql
.schema テーブル名
```

### テーブル作成

```sql
CREATE TABLE table_name (...);
```

### テーブル削除

```sql
DROP TABLE table_name;
```

### テーブル構造を確認（カラム情報）

```sql
PRAGMA table_info(table_name);
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

### CSVをインポート（事前に `.mode csv` を設定）

```sql
.import ファイル.csv table_name
```

### CSVにエクスポート

```sql
.mode csv` → `.output ファイル.csv` → `SELECT * FROM table_name;
```

## 出力設定・整形


### カラム名（ヘッダ）を表示

```sql
.headers on
```

### カラムごとに整列して表示

```sql
.mode column
```

### 区切り文字で出力

```sql
.mode list
```

### CSV形式で出力

```sql
.mode csv
```

### 区切り文字を指定

```sql
.separator ,
```

### NULL値の表示を設定

```sql
.nullvalue NULL
```

### カラムごとの幅を指定

```sql
.width 10 20 30
```

## 情報・設定確認


### SQLite のバージョン表示

```sql
SELECT sqlite_version();
```

### アタッチ済みDB一覧を表示

```sql
PRAGMA database_list;
```

### テーブルのカラム情報を表示

```sql
PRAGMA table_info(table_name);
```

### 外部キー制約の有効/無効を確認

```sql
PRAGMA foreign_keys;
```

### 外部キー制約を有効化

```sql
PRAGMA foreign_keys = ON;
```

### ジャーナルモードを確認

```sql
PRAGMA journal_mode;
```

## ファイル入出力・スクリプト実行


### SQLスクリプトを実行

```sql
.read ファイル.sql
```

### 出力をファイルに書き出す

```sql
.output ファイル.txt
```

### 出力を標準出力に戻す

```sql
.output stdout
```

### 次の1回の出力だけファイルに書き出す

```sql
.once ファイル.csv
```

### 全データとスキーマをSQLとして出力

```sql
.dump
```

### 特定テーブルだけ出力

```sql
.dump テーブル名
```

## デバッグ・開発補助


### クエリ実行時間を表示

```sql
.timer on
```

### 実行中のSQLを表示

```sql
.echo on
```

### クエリ実行計画を表示（`EXPLAIN QUERY PLAN`と同等）

```sql
.eqp on
```

### クエリ統計を表示

```sql
.stats on
```

### 変更された行数を表示

```sql
.changes on
```

## システム・ユーティリティ

### コマンド一覧を表示

```sql
.help
```

### シェルコマンドを実行（例：`.shell ls`）

```sql
.shell コマンド
```

### カレントディレクトリを変更

```sql
.cd ディレクトリ
```

### プロンプト文字列を変更

```sql
.prompt
```

## インデックス

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

### インデックスを確認

```sql
PRAGMA index_list('<テーブル名>');
```

### インデックスの使用状況を確認

```sql
EXPLAIN QUERY PLAN
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

### 全文検索インデックス（FTS5）

```sql
CREATE VIRTUAL TABLE <仮想テーブル名> USING fts5(<
  カラム名,
  [カラム名, ...,]
  content=<元テーブル名>,
  content_rowid=<元テーブルのIDカラム名>
>);

-- 検索
SELECT <カラム名> FROM <テーブル名> WHERE <カラム名> MATCH <キーワード>;
```

- 通常の SQLite テーブルとは別に「仮想テーブル」を作る
- 内部に全文検索専用のインデックスを持つ
- 軽量だが性能は高い
- 文字列検索部分は検索エンジン実装に近い
- 通常のテーブルとは別構造（同期のためのトリガーが必要）

### インデックスの注意

- 小さいDBではインデックスの読み込みコストの方が大きくなることがある。
- `SELECT` を早くする代わり、 `INSERT` `UPDATE` `DELETE` のコストが増える。
- `PRIMARY KEY` と `UNIQUE` 制約のカラムは自動的にインデックスが作られる。

## トリガー

```sql
CREATE TRIGGER <トリガー名>
  <BEFORE|AFTER|INSTEAD OF>
  <INSERT|UPDATE|DELETE>
  ON <テーブル名>
BEGIN
  -- 実行したい処理
  -- OLD.<カラム名>で変更前の値を参照
  -- NEW.<カラム名>で変更後の値を参照
END;
```

- `INSTEAD OF` トリガーを使えば、ビューに `INSERT` `UPDATE` `DELETE` を受付けて、元テーブルに書き込むような挙動を作ることが可能

## ビュー

### ビューを作成

```sql
CREATE VIEW <ビュー名> AS SELECT ~
```

### ビューについて

- クエリ結果をテーブルのように扱う
- 複雑なSQLを扱いやすくする
- アプリ側に必要な情報だけ渡したいときに使える

## Tips

- SQLiteは**サーバ不要**でファイル単体で動作。
- `.mode` と `.headers on` を組み合わせると見やすい出力に。
- `.dump` でバックアップ、`.read` で復元できる。
- CSVインポート前に `.mode csv` を設定しないと正しく読み込めない。
- `sqlite3 ファイル.db ".tables"` のようにワンライナーでも使える。

## よく使う組み合わせ例

```bash
# 新規DBを作成してテーブルを作る
sqlite3 sample.db
sqlite> CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);
sqlite> .tables
users

# CSVインポート
sqlite> .mode csv
sqlite> .import data.csv users

# 出力整形
sqlite> .headers on
sqlite> .mode column
sqlite> SELECT * FROM users;

# バックアップ
sqlite> .backup backup.db
```
