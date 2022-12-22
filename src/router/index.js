import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('../views/Desktop.vue'),
        redirect: '1/:cover?',
        children: [
            {
                path: '1/:cover?',
                name: 'Home',
                component: () => import('../views/Desktop/1.vue'),
                props: true
            },
            {
                path: '2',
                name: 'Hello',
                component: () => import('../views/Desktop/2.vue')
            },
            {
                path: '3',
                name: 'Start',
                component: () => import('../views/Desktop/3.vue')
            },
            {
                path: '4',
                name: 'Stay',
                component: () => import('../views/Desktop/4.vue')
            },
            {
                path: '5',
                name: 'RDN',
                component: () => import('../views/Desktop/5.vue')
            },
            {
                path: '6',
                name: 'With',
                component: () => import('../views/Desktop/6.vue')
            },
            {
                path: '7',
                name: 'Time',
                component: () => import('../views/Desktop/7.vue')
            },
            {
                path: '8',
                name: 'About',
                component: () => import('../views/Desktop/8.vue')
            },
            {
                path: '9',
                name: 'Contact',
                component: () => import('../views/Desktop/9.vue')
            },
            {
                path: '10',
                name: 'Thanks',
                component: () => import('../views/Desktop/10.vue')
            }
        ]
    },
    {
        path: '/mobile',
        component: () => import('../views/Mobile.vue'),
        redirect: 'mobile/1/:cover?',
        children: [
            {
                path: '1/:cover?',
                name: 'HomeMobile',
                component: () => import('../views/Mobile/1.vue'),
                props: true
            },
            {
                path: '2',
                name: 'HelloMobile',
                component: () => import('../views/Mobile/2.vue')
            },
            {
                path: '3',
                name: 'StartMobile',
                component: () => import('../views/Mobile/3.vue')
            },
            {
                path: '4',
                name: 'StayMobile',
                component: () => import('../views/Mobile/4.vue')
            },
            {
                path: '5',
                name: 'RDNMobile',
                component: () => import('../views/Mobile/5.vue')
            },
            {
                path: '6',
                name: 'WithMobile',
                component: () => import('../views/Mobile/6.vue')
            },
            {
                path: '7',
                name: 'TimeMobile',
                component: () => import('../views/Mobile/7.vue')
            },
            {
                path: '8',
                name: '31',
                component: () => import('../views/Mobile/8.vue')
            },
            {
                path: '9',
                name: '32',
                component: () => import('../views/Mobile/9.vue')
            },
            {
                path: '10',
                name: '33',
                component: () => import('../views/Mobile/10.vue')
            },
            {
                path: '11',
                name: '41',
                component: () => import('../views/Mobile/11.vue')
            },
            {
                path: '12',
                name: '42',
                component: () => import('../views/Mobile/12.vue')
            },
            {
                path: '13',
                name: '43',
                component: () => import('../views/Mobile/13.vue')
            },
            {
                path: '14',
                name: '51',
                component: () => import('../views/Mobile/14.vue')
            },
            {
                path: '15',
                name: '52',
                component: () => import('../views/Mobile/15.vue')
            },
            {
                path: '16',
                name: '53',
                component: () => import('../views/Mobile/16.vue')
            },
            {
                path: '17',
                name: 'NavigationMobile',
                component: () => import('../views/Mobile/17.vue')
            },
            {
                path: '18',
                name: 'AboutMobile',
                component: () => import('../views/Mobile/18.vue')
            },
            {
                path: '19',
                name: 'ContactMobile',
                component: () => import('../views/Mobile/19.vue')
            },
            {
                path: '20',
                name: 'ThanksMobile',
                component: () => import('../views/Mobile/20.vue')
            }
        ]
    }
];

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
