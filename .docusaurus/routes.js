import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e83'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2a6'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'df6'),
            routes: [
              {
                path: '/docs/使用与运维/',
                component: ComponentCreator('/docs/使用与运维/', '5f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/page info 信息说明/',
                component: ComponentCreator('/docs/使用与运维/page info 信息说明/', 'eef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/Pika 最佳实践/',
                component: ComponentCreator('/docs/使用与运维/Pika 最佳实践/', '5e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/分片教程/',
                component: ComponentCreator('/docs/使用与运维/分片教程/', 'c6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/副本一致性（使用文档）/',
                component: ComponentCreator('/docs/使用与运维/副本一致性（使用文档）/', 'e86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/升级指南/',
                component: ComponentCreator('/docs/使用与运维/升级指南/', '9cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/升级指南/如何升级到 Pika 3.0/',
                component: ComponentCreator('/docs/使用与运维/升级指南/如何升级到 Pika 3.0/', 'bc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/升级指南/如何升级到 Pika 3.1 或 3.2/',
                component: ComponentCreator('/docs/使用与运维/升级指南/如何升级到 Pika 3.1 或 3.2/', 'f12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/升级指南/如何将 Pika 3.3.6 升级到 Pika 3.5/',
                component: ComponentCreator('/docs/使用与运维/升级指南/如何将 Pika 3.3.6 升级到 Pika 3.5/', 'b2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/多库版命令/',
                component: ComponentCreator('/docs/使用与运维/多库版命令/', '3c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/安装使用/',
                component: ComponentCreator('/docs/使用与运维/安装使用/', '3a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/差异化命令/',
                component: ComponentCreator('/docs/使用与运维/差异化命令/', 'fcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/数据目录/',
                component: ComponentCreator('/docs/使用与运维/数据目录/', 'd15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/管理指令/',
                component: ComponentCreator('/docs/使用与运维/管理指令/', '0bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/自动容灾/',
                component: ComponentCreator('/docs/使用与运维/自动容灾/', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/订阅/',
                component: ComponentCreator('/docs/使用与运维/订阅/', '18e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/使用与运维/配置文件说明/',
                component: ComponentCreator('/docs/使用与运维/配置文件说明/', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/开发文档/',
                component: ComponentCreator('/docs/开发文档/', '7cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/开发文档/编码规范/',
                component: ComponentCreator('/docs/开发文档/编码规范/', 'f7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/',
                component: ComponentCreator('/docs/性能与优化/', 'fd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/3.2.x 性能/',
                component: ComponentCreator('/docs/性能与优化/3.2.x 性能/', 'b31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Pika 3.5 参数优化手册/',
                component: ComponentCreator('/docs/性能与优化/Pika 3.5 参数优化手册/', 'e0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Pika 优化案例/',
                component: ComponentCreator('/docs/性能与优化/Pika 优化案例/', '088'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Pika 优化案例/喜马拉雅 Redis 与 Pika 缓存使用军规/',
                component: ComponentCreator('/docs/性能与优化/Pika 优化案例/喜马拉雅 Redis 与 Pika 缓存使用军规/', '51b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Pika 优化案例/调整 max-write-buffer-size 优化 pika 性能10倍的案例/',
                component: ComponentCreator('/docs/性能与优化/Pika 优化案例/调整 max-write-buffer-size 优化 pika 性能10倍的案例/', 'd3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Pika 内存使用/',
                component: ComponentCreator('/docs/性能与优化/Pika 内存使用/', 'c7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/性能与优化/Redis 与 Pika scan 性能对比/',
                component: ComponentCreator('/docs/性能与优化/Redis 与 Pika scan 性能对比/', '601'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/更新日志/',
                component: ComponentCreator('/docs/更新日志/', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/更新日志/版本日志/',
                component: ComponentCreator('/docs/更新日志/版本日志/', '8b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/更新日志/版本日志/v3.5.0/',
                component: ComponentCreator('/docs/更新日志/版本日志/v3.5.0/', '2dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/更新日志/版本日志/v3.5.1/',
                component: ComponentCreator('/docs/更新日志/版本日志/v3.5.1/', '9c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/更新日志/版本日志/v3.5.2/',
                component: ComponentCreator('/docs/更新日志/版本日志/v3.5.2/', '8d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/更新日志/版本日志/v3.5.3/',
                component: ComponentCreator('/docs/更新日志/版本日志/v3.5.3/', '072'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/更新日志/版本日志/v3.5.4/',
                component: ComponentCreator('/docs/更新日志/版本日志/v3.5.4/', 'c1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/更新日志/版本日志/v4.0.0/',
                component: ComponentCreator('/docs/更新日志/版本日志/v4.0.0/', '83a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/概况/',
                component: ComponentCreator('/docs/概况/', '769'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/概况/FAQ/',
                component: ComponentCreator('/docs/概况/FAQ/', '214'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/概况/Pika 介绍/',
                component: ComponentCreator('/docs/概况/Pika 介绍/', '5a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/概况/支持的 Redis 接口与兼容情况/',
                component: ComponentCreator('/docs/概况/支持的 Redis 接口与兼容情况/', 'eaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/',
                component: ComponentCreator('/docs/设计与实现/', '9ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/NoSQL 原理概述/',
                component: ComponentCreator('/docs/设计与实现/NoSQL 原理概述/', '472'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 与 Codis/',
                component: ComponentCreator('/docs/设计与实现/Pika 与 Codis/', 'f53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 传火计划/',
                component: ComponentCreator('/docs/设计与实现/Pika 传火计划/', '2f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 传火计划/主从同步/',
                component: ComponentCreator('/docs/设计与实现/Pika 传火计划/主从同步/', '911'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 传火计划/线程模型/',
                component: ComponentCreator('/docs/设计与实现/Pika 传火计划/线程模型/', '6ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 传火计划/读写流程/',
                component: ComponentCreator('/docs/设计与实现/Pika 传火计划/读写流程/', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 源码学习笔记/',
                component: ComponentCreator('/docs/设计与实现/Pika 源码学习笔记/', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 源码学习笔记/Pika 和 RockSDB 的对接/',
                component: ComponentCreator('/docs/设计与实现/Pika 源码学习笔记/Pika 和 RockSDB 的对接/', '9cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 源码学习笔记/Pika 的命令执行框架/',
                component: ComponentCreator('/docs/设计与实现/Pika 源码学习笔记/Pika 的命令执行框架/', '26a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 源码学习笔记/PubSub 机制/',
                component: ComponentCreator('/docs/设计与实现/Pika 源码学习笔记/PubSub 机制/', 'e15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/Pika 源码学习笔记/通信和线程模型/',
                component: ComponentCreator('/docs/设计与实现/Pika 源码学习笔记/通信和线程模型/', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/主从同步/',
                component: ComponentCreator('/docs/设计与实现/主从同步/', '4d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/全同步/',
                component: ComponentCreator('/docs/设计与实现/全同步/', '248'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/副本一致性/',
                component: ComponentCreator('/docs/设计与实现/副本一致性/', '97a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/增量同步/',
                component: ComponentCreator('/docs/设计与实现/增量同步/', 'ea1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/快照式备份/',
                component: ComponentCreator('/docs/设计与实现/快照式备份/', '1e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/整体技术架构/',
                component: ComponentCreator('/docs/设计与实现/整体技术架构/', 'ccd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/新存储方案：详细解析/',
                component: ComponentCreator('/docs/设计与实现/新存储方案：详细解析/', '948'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/新存储结构/',
                component: ComponentCreator('/docs/设计与实现/新存储结构/', '571'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/旧存储结构/',
                component: ComponentCreator('/docs/设计与实现/旧存储结构/', 'f6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/线程模型/',
                component: ComponentCreator('/docs/设计与实现/线程模型/', '334'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/设计与实现/锁的应用/',
                component: ComponentCreator('/docs/设计与实现/锁的应用/', '581'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
