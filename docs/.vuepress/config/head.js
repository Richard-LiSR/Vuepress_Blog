// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/Richard-LiSR/PicBed/blog_img/yhy_1.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '这是一个还未开发完全的博客',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'blog-icon', href: '/icon-192x192.png' }],

  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  // 配置百度统计
  [
    "script",
    {},
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?f50554d8e721d0b8d1d3fd07a95431e7";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
})();`

  ]
]
