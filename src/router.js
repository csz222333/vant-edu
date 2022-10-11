import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/login'
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('./view/login'),
        meta: {
            title: '登入'
        },
    },
    {
        name: 'register',
        path: '/register',
        component: () => import('./view/login/register.vue'),
        meta: {
            title: '注册'
        },
    },
    {
        name: 'course',
        path: '/edu',
        component: () => import('./view/commpoents/layout.vue'),
        meta: {
            title: '课程'
        },
        children: [
            {
                path: '/edu/course',
                component: () => import('./view/course/index.vue'),
            },
            {
                path: '/edu/setting',
                component: () => import('./view/userInfo/index.vue'),
            },
            {
                path: '/edu/plan',
                component: () => import('./view/plan/index.vue'),
            },
            {
                name:"question",
                path: '/edu/question',
                component: () => import('./view/course/question.vue'),
            },
            {
                name:"userInfo",
                path: '/edu/userInfo',
                component: () => import('./view/user/UserInfo.vue'),
            },
            {
                name:"errorquestionList",
                path: '/edu/errorquestionList',
                component: () => import('./view/userInfo/ErrorQuestionList.vue'),
            },
        ]
    }
];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ 
    routes,
    mode: 'history',
});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export {
    router
};
