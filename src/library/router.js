import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Experience from '@/views/Experience.vue'
import Projects from '@/views/Projects.vue'
import Resume from '@/views/Resume.vue'
import Misc from '@/views/Misc.vue'

const routes = [
    {
        path: '/', 
        name: 'Home', 
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/Experience',
        name: 'Experience',
        component: Experience,
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/Resume',
        name: 'Resume',
        component: Resume,
    },
    {
        path: '/Misc',
        name: 'Misc',
        component: Misc,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;