// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '👨🏻‍💻前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'Vue', link: '/pages/8143cc480faf9a11/' },
          // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
    ],
  },
  {
    text: '🐱‍💻技术',
    link: '/technology/',
    items: [
      { text: '编程语言',
        items:[
          {text: 'C语言教程', link:'/pages/0b36bc/'},
          {text:'python语言教程',link:''}
        ]},
      { text: '数据库',
        items:[
          {text:'mysql整理',link:'/pages/d78202/'}
        ]},
    ],
  },
    {
    text: '🐱‍🏍机器学习',
    link: '/machine/',
    items: [
      { text: 'pytorch', link: '' },
    ],
  },
  {
    text: '🙌更多',
    link: '/more/',
    items: [
      {text:'高等数学',link:''},
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '🤩关于', link: '/about/' },
  {
    text: '😻解忧杂货店', link: '/pages/beb6c0bd8a66cea6/'
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
