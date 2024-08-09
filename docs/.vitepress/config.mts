import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "能维前端规范",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端开发规范', link: '/web/README.md' }
    ],

    sidebar: [
      {
        text: '前端开发规范',
        items: [
          {
            text: '介绍', 
            link: '/web/README'
          },
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
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
