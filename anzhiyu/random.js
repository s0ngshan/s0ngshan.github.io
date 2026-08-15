var posts=["2026/08/15/IoT逆向入门之固件分析/","2026/07/30/个人博客搭建（Hexo-anzhiyu）/","2026/07/30/160CrackMe-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };