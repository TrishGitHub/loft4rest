import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import BlogPage from '@/components/BlogPage';
import WorksPage from '@/components/WorksPage';
import AdminPage from '@/components/AdminPage';

import WaterPage from '@/components/WaterPage';

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage
        },
        {
            path: '/blog',
            name: 'BlogPage',
            component: BlogPage
        },
        {
            path: '/works',
            name: 'WorksPage',
            component: WorksPage
        },
        {
            path: '/admin',
            name: 'AdminPage',
            component: AdminPage
        },
        {
            path: '/water',
            name: 'WaterPage',
            component: WaterPage
        },
    ],
    mode: 'history'
});