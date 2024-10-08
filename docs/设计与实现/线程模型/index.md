---
title: "线程模型"
sidebar_position: 1
---

pika使用的是多线程模型，使用多个工作线程来进行读写操作，由底层blackwidow引擎来保证线程安全，线程分为12种：

- PikaServer：主线程
- DispatchThread：监听1个端口，接收用户连接请求
- WorkerThread：存在多个(用户配置)，每个线程里有若干个用户客户端的连接，负责接收用户命令，然后将命令封装成一个Task扔到ThreadPool执行，任务执行完毕之后由该线程将reply返回给用户
- ThreadPool：线程池中的线程数量由用户配置，执行WorkerThread调度过来的Task, Task的内容主要是写DB和写Binlog
- PikaAuxiliaryThread：辅助线程，处理同步过程中状态机状态的切换，主从之间心跳的发送以及超时检查
- PikaReplClient：本质上是一个Epoll线程(与其他Pika实例的PikaReplServer进行通信)加上一个由若干线程组成的线程数组(异步的处理写Binlog以及写DB的任务)
- PikaReplServer：本质上是一个Epoll线程(与其他Pika实例的PikaReplClient进行通信)加上一个由若干线程组成的线程池(处理同步的请求以及根据从库返回的Ack更新Binlog滑窗)
- KeyScanThread：在这个线程中执行info keyspace 1触发的统计Key数量的任务
- BgSaveThread：对指定的DB进行Dump操作，以及全同步的时候发送Dump数据到从库（对一个DB执行全同步是先后向Thread中扔了BgSave以及DBSync两个任务从而保证顺序)
- PurgeThread：用于清理过期的Binlog文件
- PubSubThread：用于支持PubSub相关功能
