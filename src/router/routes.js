export const routes = [
    {
        path: '/',
        name: 'welcome',
        component: () => import('@/views/welcome'),

    },
    {
        path:'/about',
        name:'about',
        component:()=>import('@/views/about'),
    },
    {
        path:'/contact',
        name:'contact',
        component: () => import('@/views/contact'),
    },
    {
        path:'/blog',
        name:'posts.index',
        component: () => import('@/views/PostsIndex'),
    },
    {
        path:'/posts/create',
        name:'posts.create',
        component:()=>import('@/views/PostsCreate'),
    },
    {
        path:'/posts/:id/edit',
        name:'posts.edit',
        component:()=>import('@/views/PostsEdit'),
    },
    { 
        path: '/404',
        name: '404',
        component:()=>import('@/views/NotFound'),
        },
    { path: '*', redirect: '/404' },

];