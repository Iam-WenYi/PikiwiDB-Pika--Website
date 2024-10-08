---
title: "快照式备份"
sidebar_position: 12
---

## 原理

不同于 Redis，Pika 的数据主要存储在磁盘中，这就使得其在做数据备份时有天然的优势，可以直接通过文件拷贝实现 实现

![](https://camo.githubusercontent.com/3dd59576cdef9a74b8b15f43e636621b5e617e5085ccf0f1989b26ae567db74e/687474703a2f2f7777342e73696e61696d672e636e2f6c617267652f633263643433303767773166366d373435637378736a3230666c30696f6a73732e6a7067)

## 流程

- 打快照：阻写(阻止客户端进行写 db 操作)，并在这个过程中获取快照内容
- 异步线程拷贝文件：通过修改 Rocksdb 提供的 BackupEngine 拷贝快照中文件，这个过程中会阻止文件的删除

## 快照内容

- 当前 db 的所有文件名
- manifest 文件大小
- sequence_number
- 同步点
  - binlog filenum
  - offset