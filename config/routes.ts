export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' },
      { name: '注册', path: '/user/register', component: './User/Register' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  { path: '/', redirect: 'add_chart' },
  { path: '/add_chart', name: '智能分析', icon: 'barChart', component: './AddChart' },
  { path: '/my_chart', name: '我的图表', icon: 'pieChart', component: './MyChart' },
  { path: '/my_info', name: '个人信息', icon: 'barChart', component: './Information' },

  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin', // 只有管理员能访问
    //component:'./Admin',
    routes: [
      { path: '/admin/user-manager', name: '用户管理', component: './Admin/UserManager' },
      { path: '/admin/chart-manager', name: '图表管理', component: './Admin/ChartManager' },
      { path: '/admin', redirect: '/admin/sub-page' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
