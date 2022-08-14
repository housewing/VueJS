import { defineStore } from "pinia";
import { ref } from 'vue'
import axios from "axios";
import router from '../router'

export const useAuthStore = defineStore('auth', () => {
    const isLogin = ref(false);

    const register = async (formData) => {
        try {
            const res = await axios.post('http://localhost:8000/register', formData);
            console.log(res.data);
        } catch(error) {
            console.log("register error");
        }
    }

    const login = async (formData) => {
        try {
            const res = await axios.post('http://localhost:8000/login', formData);
            // console.log(res.data);

            $cookies.set('test', res.data.access_token, 5 * 60);
            isLogin.value = true;
            router.push('/');

        } catch(error) {
            console.log("login error");
        }
    }

    const logout = async () => {
        $cookies.remove('test');
        isLogin.value = false;
        router.push("/login");
    }

    return {
        isLogin,
        register,
        login,
        logout,
    }
})