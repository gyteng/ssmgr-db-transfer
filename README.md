# ssmgr-db-transfer

## 使用方法

1. MySQL -> SQLite

```
node index username:password@xxx.xxx.xxx.xxx:ooo/dbname ./db.sqlite
```

2. SQLite -> MySQL

```
node index ./db.sqlite username:password@xxx.xxx.xxx.xxx:ooo/dbname
```