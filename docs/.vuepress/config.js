const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

const moment = require('moment');


module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题
  title: "Richard's blog",
  description: '这是一个简单的个人博客，目前还在开发中',
  // base: '/Vue_blog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  themeConfig,
  plugins,
  // 额外的插件，单独列出来
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',
      // 其他的 Vssue 配置
      owner: 'Richard-LiSR',
      repo: 'blogtalk_comment',
      clientId: '1cf123671363dec25388',
      clientSecret: 'a19a8f08b5cdfe5cf5709a6aa1cf7340ba1547f9',
      autoCreateIssue: true
    },
    'vuepress-plugin-helper-live2d': {
      // 是否开启控制台日志打印(default: false)
      log: false,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)>>>取值请参考：
        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: 'haruto',
        display: {
          position: "right", // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
          hOffset: 80, //  水平偏移(default: 65)
          vOffset: -20, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 1 // 模型透明度(default: 0.8)
        }
      }
    },
    // 谷歌分析
    'minimal-analytics': { ga: 'UA-207934743-1' },


    // 百度统计分析
    'vuepress-plugin-baidu-tongji-analytics': {
      hm: 'f50554d8e721d0b8d1d3fd07a95431e7',
      dev: true
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "有新内容更新，请记得查收哦！",
        buttonText: "刷新"
      }
    },
    '@vuepress/last-updated':// "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        dayjs.locale("zh_cn")
        return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
      }
    },

    // '@vuepress/last-updated':
    // {
    //   transformer: (timestamp, lang) => {
    //     // 不要忘了安装 moment
    //     const moment = require('moment')
    //     moment.locale("zh-cn")
    //     return moment(timestamp).fromNow('llll')
    //   }
    // },
  }
}