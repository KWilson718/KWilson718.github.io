import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Experience from '@/views/Experience.vue'
import Projects from '@/views/Projects.vue'
import Resume from '@/views/Resume.vue'
import Misc from '@/views/Misc.vue'

const routes = [
    {
        path: '/personal-portfolio/', 
        name: 'Home', 
        component: Home,
    },
    {
        path: '/personal-portfolio/about',
        name: 'About',
        component: About,
    },
    {
        path: '/personal-portfolio/Experience',
        name: 'Experience',
        component: Experience,
    },
    {
        path: '/personal-portfolio/Projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/personal-portfolio/Resume',
        name: 'Resume',
        component: Resume,
    },
    {
        path: '/personal-portfolio/Misc',
        name: 'Misc',
        component: Misc,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;