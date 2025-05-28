import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/nw-doc/',
  title: "能维文档",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/nw-doc/favicon.ico' }]],
  ignoreDeadLinks: true,// 忽略死链接
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端开发规范', link: '/web/README.md' },
      { text: 'OPEN-DLP介绍', link: '/opendlp/v1.0/README.md' }
    ],

    sidebar: {
      '/web/': [{
        text: '前端开发规范',
        items: [
          { text: '介绍',link: '/web/README' },
          { text: '工作流规范', link: '/web/chapter1' },
          { text: '技术栈规范', link: '/web/chapter2' },
          { text: '浏览器兼容规范', link: '/web/chapter3' },
          { text: '项目组织规范', link: '/web/chapter4' },
          { text: '编码规范', link: '/web/chapter5' },
          { text: '文档规范', link: '/web/chapter6' },
          { text: 'UI设计规范', link: '/web/chapter7' },
          { text: '测试规范', link: '/web/chapter8' },
          { text: '异常处理、监控和调试规范', link: '/web/chapter9' },
          { text: '前后端协作规范', link: '/web/chapter10' },
          { text: '培训/知识管理/技术沉淀', link: '/web/chapter11' }
        ]
      }],
      '/opendlp/': [
        {
          text: '产品介绍',
          items: [
            {
              text: '产品简介',
              link: '/opendlp/introduction/README'
            }
          ]
        },
        {
        text: 'v1.0',
        collapsed: false,
        items: [
          {
            text: '版本介绍',
            link: '/opendlp/v1.0/README'
          },
          {
            text: '实时监控',
            items: [
              {
                text: '数据监控',
                link: '/opendlp/v1.0/chapter1'
              }
            ]
          }, {
            text: '设备管理',
            items: [
              {
                text: '设备',
                link: '/opendlp/v1.0/chapter2'
              },
              {
                text: '设备类型',
                link: '/opendlp/v1.0/chapter3'
              },
              {
                text: '数据检索',
                link: '/opendlp/v1.0/chapter4'
              }, {
                text: '分屏展示',
                link: '/opendlp/v1.0/chapter5'
              }
            ]
          },{
            text: '配置管理',
            items: [
              {
                text: '采集器管理',
                link: '/opendlp/v1.0/chapter6'
              },
              {
                text: '空间管理',
                link: '/opendlp/v1.0/chapter7'
              },
            ],
          },{
            text: '系统管理',
            items: [
              {
                text: '用户管理',
                link: '/opendlp/v1.0/chapter8'
              }, {
                text: '角色管理',
                link: '/opendlp/v1.0/chapter9'
              }, {
                text: '个人中心',
                link: '/opendlp/v1.0/chapter10'
              }, {
                text: '字典管理',
                link: '/opendlp/v1.0/chapter11'
              }, {
                text: '菜单管理',
                link: '/opendlp/v1.0/chapter12'
              }, {
                text: '配置管理',
                link: '/opendlp/v1.0/chapter13'
              }, {
                text: '日志管理',
                items: [
                  {
                    text: '调用日志',
                    link: '/opendlp/v1.0/chapter14'
                  },
                ]
              }
            ]
          },
        ]
      },{
        text: 'v1.1',
        collapsed: true,
        items: [
          {
            text: '介绍',
            link: '/opendlp/v1.1/README'
          },
        ]
      }]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
