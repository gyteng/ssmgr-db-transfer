# ssmgr-db-transfer

## 使用方法

1. MySQL -> SQLite

```
node index username:password@xxx.xxx.xxx.xxx:ooo/dbname ./db.sqlite [tableName]
```

2. SQLite -> MySQL

```
node index ./db.sqlite username:password@xxx.xxx.xxx.xxx:ooo/dbname [tableName]
```

* 注意，当省略`tableName`时则转换所有表