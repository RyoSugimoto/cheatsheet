# Docker CLI のチートシート

## 新しいコンテナを実行する

### イメージから新しいコンテナを起動する

```bash
docker run IMAGE
docker run nginx
```

### 名前を割り当てる

```bash
docker run --name CONTAINER IMAGE
docker run --name web nginx
```

### ポートを割り当てる

```bash
docker run -p HOSTPORT:CONTAINERPORT IMAGE
docker run -p 8080:80 nginx
```

### すべてのポートを割り当てる

```bash
docker run -P IMAGE
docker run -P nginx
```

### コンテナをバックグラウンドで起動する

```bash
docker run -d IMAGE
docker run -d nginx
```

### ホスト名を割り当てる

```bash
docker run --hostname HOSTNAME IMAGE
docker run --hostname srv nginx
```

### DNSエントリを追加する

```bash
docker run --add-host HOSTNAME:IP IMAGE
```

### コンテナにローカルディレクトリをマウントする

```bash
docker run -v ホストディレクトリ:コンテナ内ディレクトリ
例:
docker run -v /usr/share/nginx/html nginx
```

### イメージのエントリポイントを上書きする

```bash
docker run --entrypoint コマンド イメージ
docker run --entrypoint bash nginx
```

---

## コンテナの管理

### 実行中のコンテナの一覧を表示

```bash
docker ps
```

### すべてのコンテナ一覧を表示

```bash
docker ps -a
```

### コンテナを削除

```bash
docker rm web
```

### 実行中のコンテナを削除

```bash
docker rm -f web
```

### 停止中のコンテナを削除

```bash
docker container prune
```

### 実行中のコンテナを停止

```bash
docker stop web
```

### 停止中のコンテナを起動

```bash
docker start web
```

---

### コンテナからホストにファイルをコピー

```bash
docker cp コンテナ:パス ホストのパス
例:
docker cp nginx:/usr/src/index.html index.html
```

### ホストからコンテナにファイルをコピー

```bash
docker cp ホストのパス コンテナ:パス
```

### 実行中のコンテナでコマンドを実行する

```bash
docker exec -it web bash
```

### コンテナの名前を変更

```bash
docker rename OLD_NAME NEW_NAME
```

### コンテナからイメージを作成する

```bash
docker commit web
```

---

## イメージを管理する

### イメージをダウンロードする

```bash
docker pull IMAGE[:TAG]
docker pull nginx
```

### リポジトリにイメージをアップロードする

```bash
docker push IMAGE
docker push myimage:1.0
```

### イメージを削除

```bash
docker rmi IMAGE
```

### すべてのイメージをリスト表示

```bash
docker images
```

### 不要なイメージを削除する

```bash
docker image prune
```

### 未使用のイメージをすべて削除する

```bash
docker image prune -a
```

### Dockerfile からイメージをビルド

```bash
docker build DIRECTORY
docker build .
```

### Dockerfileから特定の名前でビルド

```bash
docker build -t IMAGE_NAME DIRECTORY
docker build -t myimage:1.0 .
```

### イメージを tar ファイルに保存

```bash
docker save -o FILE IMAGE
docker save -o nginx.tar nginx
```

### tar ファイルからイメージを読み込む

```bash
docker load -i ファイル
docker load -i nginx.tar
```

---

## 情報と統計

### コンテナログの表示

```bash
docker logs CONTAINER
docker logs web
```

### 実行中のコンテナの統計を表示

```bash
docker stats
```

### コンテナのプロセス表示

```bash
docker top CONTAINER
docker top web
```

### インストールされている Docker のバージョン確認

```bash
docker version
```

### オブジェクトに関する情報取得

```bash
docker inspect NAME
docker inspect nginx
```

### コンテナのファイル差分を表示

```bash
docker diff CONTAINER
docker diff web
```

### コンテナのマッピングされたポートを表示

```bash
docker port CONTAINER
docker port web
```


