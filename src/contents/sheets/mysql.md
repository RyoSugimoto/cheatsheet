---
title: 'MySQL CLI（mysql）チートシート'
---

## 接続・終了系


### パスワードを聞かれて接続

```bash
mysql -u ユーザー名 -p
```

### データベースを指定して接続

```bash
mysql -u ユーザー名 -p データベース名
```

### リモートDBに接続

```bash
mysql -h ホスト -P ポート -u ユーザー名 -p
```

### MySQL を終了

```sql
exit` または `\q
```


## データベース操作


### データベース一覧を表示

```sql
SHOW DATABASES;
```

### 新しいデータベースを作成

```sql
CREATE DATABASE dbname;
```

### データベースを削除

```sql
DROP DATABASE dbname;
```

### 使用するデータベースを切り替え

```sql
USE dbname;
```


## テーブル関連


### 現在のデータベース内のテーブル一覧を表示

```sql
SHOW TABLES;
```

### テーブル構造を表示

```sql
DESCRIBE table_name;` または `DESC table_name;
```

### テーブル作成SQLを表示

```sql
SHOW CREATE TABLE table_name;
```

### テーブル作成

```sql
CREATE TABLE table_name (...);
```

### テーブル削除

```sql
DROP TABLE table_name;
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

### CSVをインポート

```sql
LOAD DATA INFILE '/path/file.csv' INTO TABLE table_name FIELDS TERMINATED BY ',' IGNORE 1 LINES;
```

### CSVにエクスポート

```sql
SELECT * FROM table_name INTO OUTFILE '/path/file.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';
```

## 情報・設定確認

### MySQLのバージョンを表示

```sql
SELECT VERSION();
```

### 現在のデータベースを表示

```sql
SELECT DATABASE();
```

### 文字コード設定を確認

```sql
SHOW VARIABLES LIKE 'char%';
```

### 権限を確認

```sql
SHOW GRANTS FOR 'user'@'host';
```

### 現在の接続情報を表示

```sql
STATUS;
```

## ユーザーと権限

### ユーザー作成

```sql
CREATE USER 'user'@'host' IDENTIFIED BY 'password';
```

### 権限付与

```sql
GRANT ALL PRIVILEGES ON dbname.* TO 'user'@'host';
```

### 権限削除

```sql
REVOKE ALL PRIVILEGES ON dbname.* FROM 'user'@'host';
```

### ユーザー削除

```sql
DROP USER 'user'@'host';
```

### 権限を再読み込み

```sql
FLUSH PRIVILEGES;
```

## 出力・表示整形

### 結果を縦方向（1行1列）で表示

```sql
\G
```

### 横長の結果を折り返さずに表示

```sql
pager less -S
```

### 出力をファイルに保存

```sql
\T ファイル名
```

### 実行履歴をファイルに記録

```sql
tee ファイル名
```

### 記録を停止

```sql
notee
```

## ヘルプ・補助

### コマンドヘルプを表示

```sql
help` または `\h
```

### シェルコマンドを実行（例：`\! ls`）

```sql
\! コマンド
```

### SQLファイルを実行

```sql
source ファイル.sql
```

### シェルコマンドを実行（同上）

```sql
system コマンド
```

## 便利なテクニック

### 現在のクエリ実行状況を確認

```sql
SHOW PROCESSLIST;
```

### 実行中のクエリを強制終了

```sql
KILL プロセスID;
```

### インデックスを確認

```sql
SHOW INDEX FROM table_name;
```

### InnoDBの内部情報を確認

```sql
SHOW ENGINE INNODB STATUS\G
```

### WHEREなしUPDATE/DELETEを許可

```sql
SET sql_safe_updates=0;
```

## Tips

- SQL文の終わりには **`;`（セミコロン）** が必要。
- `\G` で縦表示にすると長い行を見やすくできる。
- `mysql -t` で枠付きのテーブル形式出力が可能。
- バッチ処理は `mysql < script.sql` のように実行。
- `mysqldump` コマンドでバックアップ可能：
  ```bash
  mysqldump -u ユーザー名 -p データベース名 > backup.sql
  ```
