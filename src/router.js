import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/login'
    },
    {
        name: 'user',
        component: () => import('./view/user'),
        meta: {
            title: '会员中心'
        }
    },
    {
        name: 'cart',
        component: () => import('./view/cart'),
        meta: {
            title: '购物车'
        }
    },
    {
        name: 'goods',
        component: () => import('./view/goods'),
        meta: {
            title: '商品详情'
        },
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
            
        ]
    }
];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

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
