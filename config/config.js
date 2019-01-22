
export default {
    plugins: [
      ['umi-plugin-react', {
        antd: true, // 视图
        dva: true, // 数据
      }],
    ],
    routes: [{
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: 'Helloworld',
        },
        {
          path: '/helloworld',
          component: 'Helloworld'
        },
        {
          path: 'puzzlecards',
          component: './puzzlecards'
        },
        {
          path: '/dashboard',
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
          ]
        },
        {
          path: 'list', component: '../page/list'
        }
      ]
    }],
    singular: true
  };