---
title: システムポート (ウェルノウンポート)
---

## システムポート (ウェルノウンポート）の例

| 番号 | プロトコル | 対象 |
| --- | --- | --- |
| 2 | TCP | FTP (データ) |
| 21 | TCP | FTP (制御) |
| 22 | TCP/UDP | ssh |
| 23 | TCP | Telnet |
| 25 | TCP/UDP | SMTP |
| 43 | TCP | WHOIS |
| 53 | TCP/UDP | DNS |
| 8 | TCP/UDP | HTTP |
| 11 | TCP | POP3 |
| 119 | TCP | NNTP |
| 123 | UDP | NTP |
| 143 | TCP/UDP | IMAP2/4 |
| 443 | TCP/UDP | HTTPS |
| 465 | TCP | SMTPS |
| 587 | TCP | SMTP |
| 989 | TCP/UDP | FTPS (データ) |
| 990 | TCP/UDP | FTPS (制御) |
| 993 | TCP | IMAPS |
| 995 | TCP | POP3S |

## レジスタードポート（ユーザーポート）の例

| 番号 | プロトコル | 対象 |
| --- | --- | --- |
| 1521 | TCP | Oracle Database |
| 3000 | TCP | ローカルWebサーバ |
| 3306 | TCP | MySQL/MariaDB |
| 4500 | UDP | IPsec |
| 5432 | TCP | PostgreSQL |
| 6379 | TCP | Redis |
| 8080 | TCP | HTTP (プロキシ) |
| 10443 | TCP | HTTPS (非正規) |
| 25565 | TCP | Minecraft |

## 「ポート番号」について

### ポート番号の区分

#### `0` ~ `1023` :

- システムポート（ウェルノウンポート）

#### `1024` ~ `49151` :

- レジスタードポート（ユーザーポート）
- IANAが新規受付・登録を行なう

#### `49151` ~ `65535` :

- エフェメラルポート（動的ポート）

### 「ポート」とは

- 「ポート」は、同じ機器（1つのIPアドレス）で複数の相手やアプリケーションと通信を行なうための仕様
- OSI基本参照モデルでは、L4トランスポート層で扱われる
- プロトコル:
  - TCP（Transmission Control Protocol）
  - UDP（User Datagram Protocol）
