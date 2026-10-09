var posts=["2026/08/15/IoT逆向入门之固件分析/","2026/07/30/个人博客搭建（Hexo-anzhiyu）/","2026/07/30/160CrackMe-1/","2026/10/09/CVE-2018-5767环境复现/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };