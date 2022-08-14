import { createRouter, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../store/auth'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Note from '../components/Note.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/note",
        name: "Note",
        component: Note,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/helloworld",
        name: "HelloWorld",
        component: () => import('../components/HelloWorld.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const testCookies = $cookies.get('test');
    // console.log("router: ", testCookies);
    
    const authStore = useAuthStore();
    const { isLogin } = storeToRefs(authStore);
    isLogin.value = testCookies ? true : false;
    
    if (to.path === '/login' && testCookies) {
        next('/')
        return;
    }

    if (to.matched.some(record => record.meta.requiresAuth && !testCookies)) {
        next('/login')
        return;
    }

    next();
})

export default router;