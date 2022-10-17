import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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
                path: '/edu/video',
                component: () => import('./view/videos/index.vue'),
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
                name: 'PlanInfo',
                path: '/edu/planInfo',
                component: () => import('./view/plan/PlanInfo.vue'),
            },
            {
                name: "question",
                path: '/edu/question',
                component: () => import('./view/course/question.vue'),
            },
            {
                name: "userInfo",
                path: '/edu/userInfo',
                component: () => import('./view/user/UserInfo.vue'),
            },
            {
                name: "userInfo",
                path: '/edu/userInfo',
                component: () => import('./view/user/UserInfo.vue'),
            },
            {
                name: "statistical",
                path: '/edu/Statistical',
                component: () => import('./view/course/statistical.vue'),
            },
            {
                name: "ErrorQuestionInfo",
                path: '/edu/errorQuestionInfo',
                component: () => import('./view/userInfo/ErrorQuestionInfo.vue'),
            },
            {
                name: "Extracurricular",
                path: '/edu/Extracurricular',
                component: () => import('./view/course/Extracurricular.vue'),
            },
            {
                name: "previewPdf",
                path: '/edu/pdf',
                component: () => import('./view/course/previewPdf.vue'),
            },
        ]
    }
];
const router = new Router({
    routes,
    mode: 'history',
});

export {
    router
};
