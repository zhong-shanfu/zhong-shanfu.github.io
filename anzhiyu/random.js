var posts=["2024/09/23/新博客/","2024/09/23/blog/","2024/09/21/World/","2024/09/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };