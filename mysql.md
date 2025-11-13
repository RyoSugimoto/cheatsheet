# 🧠 MySQL CLI（mysql）チートシート

## 🔹 接続・終了系

| コマンド | 説明 |
|-----------|------|
| `mysql -u ユーザー名 -p` | パスワードを聞かれて接続 |
| `mysql -u ユーザー名 -p データベース名` | データベースを指定して接続 |
| `mysql -h ホスト -P ポート -u ユーザー名 -p` | リモートDBに接続 |
| `exit` または `\q` | MySQL を終了 |

---

## 🔹 データベース操作

| コマンド | 説明 |
|-----------|------|
| `SHOW DATABASES;` | データベース一覧を表示 |
| `CREATE DATABASE dbname;` | 新しいデータベースを作成 |
| `DROP DATABASE dbname;` | データベースを削除 |
| `USE dbname;` | 使用するデータベースを切り替え |

---

## 🔹 テーブル関連

| コマンド | 説明 |
|-----------|------|
| `SHOW TABLES;` | 現在のデータベース内のテーブル一覧を表示 |
| `DESCRIBE table_name;` または `DESC table_name;` | テーブル構造を表示 |
| `SHOW CREATE TABLE table_name;` | テーブル作成SQLを表示 |
| `CREATE TABLE table_name (...);` | テーブル作成 |
| `DROP TABLE table_name;` | テーブル削除 |

---

## 🔹 データ操作 (SQL)

| コマンド | 説明 |
|-----------|------|
| `SELECT * FROM table_name;` | テーブル内容をすべて表示 |
| `INSERT INTO table_name VALUES (...);` | データを挿入 |
| `UPDATE table_name SET col = val WHERE ...;` | データ更新 |
| `DELETE FROM table_name WHERE ...;` | データ削除 |
| `LOAD DATA INFILE '/path/file.csv' INTO TABLE table_name FIELDS TERMINATED BY ',' IGNORE 1 LINES;` | CSVをインポート |
| `SELECT * FROM table_name INTO OUTFILE '/path/file.csv' FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n';` | CSVにエクスポート |

---

## 🔹 情報・設定確認

| コマンド | 説明 |
|-----------|------|
| `SELECT VERSION();` | MySQLのバージョンを表示 |
| `SELECT DATABASE();` | 現在のデータベースを表示 |
| `SHOW VARIABLES LIKE 'char%';` | 文字コード設定を確認 |
| `SHOW GRANTS FOR 'user'@'host';` | 権限を確認 |
| `STATUS;` | 現在の接続情報を表示 |

---

## 🔹 ユーザーと権限

| コマンド | 説明 |
|-----------|------|
| `CREATE USER 'user'@'host' IDENTIFIED BY 'password';` | ユーザー作成 |
| `GRANT ALL PRIVILEGES ON dbname.* TO 'user'@'host';` | 権限付与 |
| `REVOKE ALL PRIVILEGES ON dbname.* FROM 'user'@'host';` | 権限削除 |
| `DROP USER 'user'@'host';` | ユーザー削除 |
| `FLUSH PRIVILEGES;` | 権限を再読み込み |

---

## 🔹 出力・表示整形

| コマンド | 説明 |
|-----------|------|
| `\G` | 結果を縦方向（1行1列）で表示 |
| `pager less -S` | 横長の結果を折り返さずに表示 |
| `\T ファイル名` | 出力をファイルに保存 |
| `tee ファイル名` | 実行履歴をファイルに記録 |
| `notee` | 記録を停止 |

---

## 🔹 ヘルプ・補助

| コマンド | 説明 |
|-----------|------|
| `help` または `\h` | コマンドヘルプを表示 |
| `\! コマンド` | シェルコマンドを実行（例：`\! ls`） |
| `source ファイル.sql` | SQLファイルを実行 |
| `system コマンド` | シェルコマンドを実行（同上） |

---

## 🔹 便利なテクニック

| コマンド | 説明 |
|-----------|------|
| `SHOW PROCESSLIST;` | 現在のクエリ実行状況を確認 |
| `KILL プロセスID;` | 実行中のクエリを強制終了 |
| `SHOW INDEX FROM table_name;` | インデックスを確認 |
| `SHOW ENGINE INNODB STATUS\G` | InnoDBの内部情報を確認 |
| `SET sql_safe_updates=0;` | WHEREなしUPDATE/DELETEを許可 |

---

## 💡 Tips

- SQL文の終わりには **`;`（セミコロン）** が必要。  
- `\G` で縦表示にすると長い行を見やすくできる。  
- `mysql -t` で枠付きのテーブル形式出力が可能。  
- バッチ処理は `mysql < script.sql` のように実行。  
- `mysqldump` コマンドでバックアップ可能：  
  ```bash
  mysqldump -u ユーザー名 -p データベース名 > backup.sql
