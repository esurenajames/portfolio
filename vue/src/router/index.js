import{ createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Success from "../views/Success.vue";

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/success',
        name: 'success',
        component: Success
    },
];

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;