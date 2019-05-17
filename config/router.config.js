export default[
  { path: '/login', component: '../pages/user/login',meta:{title:'首页'} },
  { path: '/', component: '../layouts',
  routes: [
    { path: '/user',component:'../pages/user/login' ,meta:{title:'基础'}},
    { path: '/user/detail', component: '../pages/user/detail.js',meta:{title:'高级'} },
  ],
  meta:{title:'按钮'}
},
]