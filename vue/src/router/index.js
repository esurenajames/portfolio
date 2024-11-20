import{ createRouter, createWebHistory} from "vue-router"
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Hero from "../views/Hero.vue";
import About from "../views/About.vue";
import Success from "../views/Success.vue";

const routes = [
    {
        path: '/hero',
        name: 'hero',
        component: Hero
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: RequestPassword
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPassword
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