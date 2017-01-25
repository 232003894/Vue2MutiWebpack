self.$config = {
  nav: [
    // 首页
    {
      title: '首页',
      path: '/'
    },
    // Api
    {
      title: 'API',
      type: 'dropdown',
      exact: true,
      items: [{
          title: '所有API',
          path: '/md/api.md'
        },
        {
          type: 'sep'
        },
        {
          type: 'label',
          title: '类别'
        },
        {
          title: 'Utils',
          path: '/md/api/Utils.md'
        },
        {
          title: 'Date',
          path: '/md/api/Date.md'
        },
        {
          title: 'Env',
          path: '/md/api/Environment.md'
        },
        {
          title: 'Action',
          path: '/md/api/Action.md'
        },
        {
          title: 'Event',
          path: '/md/api/Event.md'
        },
        {
          title: 'Storage',
          path: '/md/api/Storage.md'
        },
        {
          title: 'Back',
          path: '/md/api/Back.md'
        },
        {
          title: 'Dialog',
          path: '/md/api/Dialog.md'
        },
        {
          title: '页面字典',
          path: '/md/api/页面字典.md'
        },
        {
          title: '窗体',
          path: '/md/api/窗体.md'
        },
        {
          title: 'Device',
          path: '/md/api/Device.md'
        },
        {
          type: 'sep'
        },
        {
          type: 'label',
          title: '使用环境'
        }, {
          title: '通用Web',
          path: '/md/api/通用.md'
        },
        {
          title: 'H5+扩展',
          path: '/md/api/H5Plus扩展.md'
        },
        {
          title: '组件扩展',
          path: '/md/api/组件扩展.md'
        },
        {
          type: 'sep'
        },
        {
          type: 'label',
          title: '日志'
        },
        {
          title: '更新历史',
          path: '/md/changes.md'
        },
        {
          title: 'TODO',
          path: '/md/todos.md'
        }
      ]
    },
    {
      title: '示例文档',
      path: '/md/demo.md'
    }
  ]
}
