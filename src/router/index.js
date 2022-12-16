import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Page00_Hello_World from '../pages/00-Hello-World.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About

        },
        {
            path: '/00-Hello-World',
            name: '00-Hello-World',
            component: Page00_Hello_World,

        },
        {
            path: '/12-Component-Events',
            name: '12-Component-Events',
            component: Page12_Component_Events,

        }

    ]
})

export default router