/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7c01b52d4f886ed6ea8fa008f8e994cd"
  },
  {
    "url": "about/index.html",
    "revision": "b7282bfe6cbd921cd4c27ceb4e7c86f4"
  },
  {
    "url": "archives/index.html",
    "revision": "627c913ff4ad2cd6d373dfe8d27b0f3d"
  },
  {
    "url": "assets/css/0.styles.f7ee0e6a.css",
    "revision": "a012faac808fb91ae6ee292b49fa594f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b62cc3f1.js",
    "revision": "d166c3be4a8f84495caadadb1b576e40"
  },
  {
    "url": "assets/js/11.81c1b460.js",
    "revision": "4a25aacbf52812479b215ea1a4b01e0d"
  },
  {
    "url": "assets/js/12.99453db1.js",
    "revision": "fd734f6299be091543bad99191d4d16d"
  },
  {
    "url": "assets/js/13.74ff9676.js",
    "revision": "93e0d0ce6bfca75551c86d50158a4697"
  },
  {
    "url": "assets/js/14.302795ce.js",
    "revision": "b151b7eeef9852da69c03b9bcb56c476"
  },
  {
    "url": "assets/js/15.ec4400d2.js",
    "revision": "6ad8eea5f0a2febb95c08b29a3e95176"
  },
  {
    "url": "assets/js/16.ec553d3b.js",
    "revision": "3e759aaec54d88c12ee9bdc5b384c85d"
  },
  {
    "url": "assets/js/17.1bcbf5dc.js",
    "revision": "2e47d2d36bf7f0afef3507f69a8dd3da"
  },
  {
    "url": "assets/js/18.b35060fd.js",
    "revision": "a6d0d8d1835fb1f07d16981fdf3f0a4a"
  },
  {
    "url": "assets/js/19.e6216dcb.js",
    "revision": "d05f9eb74cddd06f83b8805ed1d9da45"
  },
  {
    "url": "assets/js/20.4d75808e.js",
    "revision": "c115ec8f6bdc29812455e1491c2a7513"
  },
  {
    "url": "assets/js/21.0e9d9ebd.js",
    "revision": "e200efb4c15c6566b160d7a786d9c201"
  },
  {
    "url": "assets/js/22.3d38d908.js",
    "revision": "3873123fbaffc031b83f27bdcac82b4b"
  },
  {
    "url": "assets/js/23.3627fbbf.js",
    "revision": "e41fbcbd3365264a7c0e2974aae63bb7"
  },
  {
    "url": "assets/js/24.f35e0bb0.js",
    "revision": "fc49ba4d529e09058543ad607a18b1d8"
  },
  {
    "url": "assets/js/25.d76e3ff5.js",
    "revision": "634f85a1a27a586105400961525986d2"
  },
  {
    "url": "assets/js/26.ec41c3d5.js",
    "revision": "1d3738edae0a64b6a4f3f86af3d25308"
  },
  {
    "url": "assets/js/27.b5faabc9.js",
    "revision": "2d635ae6842e87b9afc06e3c7221d85e"
  },
  {
    "url": "assets/js/28.faa3ed6d.js",
    "revision": "31ac864b3456b28ccc39b8c1fa485d4e"
  },
  {
    "url": "assets/js/29.3fe7391f.js",
    "revision": "bfe3910cf0474201f2b10127f127e0c0"
  },
  {
    "url": "assets/js/3.5f960c14.js",
    "revision": "ea4bd257b0b5d3a72bae9f9332841ac9"
  },
  {
    "url": "assets/js/30.6989e660.js",
    "revision": "1fe8e7fb903f7730f6761feec8dd4453"
  },
  {
    "url": "assets/js/31.7edbe166.js",
    "revision": "e4a9b77d511488138e29946b18756c88"
  },
  {
    "url": "assets/js/32.7d39af3a.js",
    "revision": "00b953ade8f2274173da6da5096f061e"
  },
  {
    "url": "assets/js/33.b8773975.js",
    "revision": "f8d79e9e62f61d0faece325b2b5dc6ce"
  },
  {
    "url": "assets/js/34.6ff123fc.js",
    "revision": "d543555bd5f885ef79eec75b9d43e8f8"
  },
  {
    "url": "assets/js/35.2ca5e222.js",
    "revision": "34015eed4cc4ebd1fba0deb25d6cca25"
  },
  {
    "url": "assets/js/36.1ff7dfaa.js",
    "revision": "7c0bc2d70f186f11ccd2db1360e5b0ce"
  },
  {
    "url": "assets/js/37.53bc09e1.js",
    "revision": "f1360b1e6cd2fa57307a3b7412d2f411"
  },
  {
    "url": "assets/js/38.4afa1b16.js",
    "revision": "c06d16e605fa8794b4d4b991cf7f466d"
  },
  {
    "url": "assets/js/39.84e18610.js",
    "revision": "afd7cbb91a6af7d874b7c88c421db53f"
  },
  {
    "url": "assets/js/4.4d96b94a.js",
    "revision": "ac477989f51f3e70c4fb4219fdf07028"
  },
  {
    "url": "assets/js/40.da3972ed.js",
    "revision": "2d16ddc8776b3aa4c0448d3f03037985"
  },
  {
    "url": "assets/js/41.28fabbfe.js",
    "revision": "71d793e7eeb7e09ba0e35be62eccea06"
  },
  {
    "url": "assets/js/42.f99bb255.js",
    "revision": "b9f46f11a04da4be0ae31c87fec9a14f"
  },
  {
    "url": "assets/js/5.8ee74237.js",
    "revision": "5ebba1942893294d0d176b2b53609aab"
  },
  {
    "url": "assets/js/6.c4ebe0ae.js",
    "revision": "5f02449e0bb228e1c242cdfaaf88f484"
  },
  {
    "url": "assets/js/7.cb768440.js",
    "revision": "e879147568a31e05e526d3710f039e4d"
  },
  {
    "url": "assets/js/8.edaa198a.js",
    "revision": "a8ae83fd37e6a599b5518d3d46abdcd5"
  },
  {
    "url": "assets/js/9.3411675b.js",
    "revision": "165b2ce3e139e9bd0376149b087a2ecd"
  },
  {
    "url": "assets/js/app.ba4d12ab.js",
    "revision": "4b5839d2eff7f7f8c22144f8e39513e7"
  },
  {
    "url": "assets/js/vendors~docsearch.e5cbbbd0.js",
    "revision": "10e1f3b26be8b188aad0b2ed4aa1265b"
  },
  {
    "url": "categories/index.html",
    "revision": "aae65b4c1174e2a88a38dc6f3685fb62"
  },
  {
    "url": "friends/index.html",
    "revision": "3ca3ada74497e45b8114fb878487b599"
  },
  {
    "url": "icon-192x192.png",
    "revision": "0ca5064c2fd4ae4c52e8fa18e53fbbb5"
  },
  {
    "url": "icon-256x256.png",
    "revision": "9259a272a813a51279ff8a9aa0e1e6e9"
  },
  {
    "url": "icon-384x384.png",
    "revision": "5acc86301448d4513fd1b5fe70e5b063"
  },
  {
    "url": "icon-512x512.png",
    "revision": "3a123b5461268aee524cd868567c5d29"
  },
  {
    "url": "img/bg.jpeg",
    "revision": "bf3e56b6219d2cfcd39eda9b4d1ab69d"
  },
  {
    "url": "img/bg2.jpg",
    "revision": "528d8f4f8fb4bcf770750ce212a8b122"
  },
  {
    "url": "img/blog-author.jpg",
    "revision": "07004477eea5af1d76751629320d461e"
  },
  {
    "url": "img/gd_ml.png",
    "revision": "3e5813c48adc65b369c14aaac75e3089"
  },
  {
    "url": "img/gy_ml.png",
    "revision": "e3f3ee3541b2ceb687da0b698fc39134"
  },
  {
    "url": "img/img_ico/yhy_logo.png",
    "revision": "3846e6dce87fac31c5feedc089d6a76b"
  },
  {
    "url": "img/machine_ml.png",
    "revision": "e871a106625ef0ca5fda273cf326f9c0"
  },
  {
    "url": "img/panda-waving.png",
    "revision": "425e622d348abc7ea349245e7e8738c2"
  },
  {
    "url": "img/planet.png",
    "revision": "e1350fcbe62d444fb659b3861d423fe6"
  },
  {
    "url": "img/planet2.png",
    "revision": "c322e86827f627942bb3e6e52a4ba469"
  },
  {
    "url": "img/satelite.png",
    "revision": "ca849740bc04d58a4b9606b10edfe180"
  },
  {
    "url": "img/sc_ml.png",
    "revision": "af72f12b3d34add010e6f3720c064975"
  },
  {
    "url": "img/tec_ml.png",
    "revision": "4c3bd47d30d237b3ac23ec5d779f3e98"
  },
  {
    "url": "img/web_ml.png",
    "revision": "2ac0fb060491815a972fe3d489295e1f"
  },
  {
    "url": "img/yhy_logo.png",
    "revision": "3846e6dce87fac31c5feedc089d6a76b"
  },
  {
    "url": "img/yhy_logo2.png",
    "revision": "2ef4ef276f30880ac625f095da823a6b"
  },
  {
    "url": "img/yhy_n1.png",
    "revision": "90f4e490e13529c06e93d30a180f9430"
  },
  {
    "url": "img/yhy_n2.png",
    "revision": "d37ed2902fe43089e3268ddd54df7ca8"
  },
  {
    "url": "img/yhy_n3.png",
    "revision": "f922551e74db31728d7de8eddac17299"
  },
  {
    "url": "index.html",
    "revision": "72b9e3e558a32566cc4a348edd6b0f5f"
  },
  {
    "url": "live2d/haruto/assets/moc/haruto.2048/texture_00.png",
    "revision": "56ff69b411abfc80cb68d0b1267959c5"
  },
  {
    "url": "machine/index.html",
    "revision": "3075411a201e21bbdb309767dbdca49c"
  },
  {
    "url": "more/index.html",
    "revision": "851582bd6bb15a6c527ef16a505648fa"
  },
  {
    "url": "pages/0a09f8/index.html",
    "revision": "014fe59b85468d0ce2fef170e647e2aa"
  },
  {
    "url": "pages/0b36bc/index.html",
    "revision": "ab5958f24931f6204a089dfef1d41568"
  },
  {
    "url": "pages/0ded22/index.html",
    "revision": "a350cc1fb20ffe3cb6144f073d64fc35"
  },
  {
    "url": "pages/10f247/index.html",
    "revision": "d1af37ae3573bb9c26f65442978e1072"
  },
  {
    "url": "pages/1cf86e/index.html",
    "revision": "b83049ae532524a70d351464097515c8"
  },
  {
    "url": "pages/228067/index.html",
    "revision": "f294ec9712b19e7ff3f7309ef9680815"
  },
  {
    "url": "pages/2e777b/index.html",
    "revision": "da6ebab4ccb36b29a406c3ccadb174c5"
  },
  {
    "url": "pages/5a4bcd/index.html",
    "revision": "29d86eb47ce42306c184b47e7d93065c"
  },
  {
    "url": "pages/7c0a49/index.html",
    "revision": "ba4b9cd61f0754af6115609616cfe1e8"
  },
  {
    "url": "pages/853264/index.html",
    "revision": "a326cbea71cde0954a7bb3378e20f045"
  },
  {
    "url": "pages/960178/index.html",
    "revision": "c66dfe392698bcf4a2947329a95d4c73"
  },
  {
    "url": "pages/980fa1/index.html",
    "revision": "d6695938c502188d67f0df21b2512c54"
  },
  {
    "url": "pages/996325/index.html",
    "revision": "2cd2c21f75f7aae076e3b57694dc679c"
  },
  {
    "url": "pages/b63b5a/index.html",
    "revision": "97f257514c83cab5e226fd86d53a0a76"
  },
  {
    "url": "pages/beb6c0bd8a66cea6/index.html",
    "revision": "d5085b0abb93db6d907db637339a92d4"
  },
  {
    "url": "pages/c17137/index.html",
    "revision": "1f6e7ff837ec3ae8522bc4262cf86c64"
  },
  {
    "url": "pages/d78202/index.html",
    "revision": "890152842372192a98547ed9ba70e813"
  },
  {
    "url": "pages/d93d13/index.html",
    "revision": "1359b7a72e83e7598fe28c961fc2967f"
  },
  {
    "url": "pages/da8ccc/index.html",
    "revision": "d4c243bb832aac50deb018b06d506399"
  },
  {
    "url": "pages/dd8b65/index.html",
    "revision": "dc0e9b256520bfb037bf02b94c74f0a6"
  },
  {
    "url": "pages/e90699/index.html",
    "revision": "83ad3a0255d5471f8e265cf770a46157"
  },
  {
    "url": "pages/ec259b/index.html",
    "revision": "590142c03334d0cd9c90d11287bfd213"
  },
  {
    "url": "pages/f9b963/index.html",
    "revision": "131ab905b2e3a894e5454c6ea42ee7b2"
  },
  {
    "url": "pages/fe8a9f/index.html",
    "revision": "8df90ec4fbfc91efe8ddf440a0fc3141"
  },
  {
    "url": "tags/index.html",
    "revision": "e55e26fa74b655c88a981c8a6d4a2f15"
  },
  {
    "url": "technology/index.html",
    "revision": "30854e54c9dc1f2a74561a0d3b7ec331"
  },
  {
    "url": "web/index.html",
    "revision": "a19a54f1caf9ea92237c0c07a5033034"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
