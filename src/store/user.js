import { defineStore } from "pinia";
import { ref } from 'vue'
import axios from "axios";

export const useUserStore = defineStore('user', () => {
    const user = ref({
        id: null,
        username: null
    });

    const userInfo = async () => {
        try {
            const testCookies = $cookies.get('test');
            const res = await axios.get('http://localhost:8000/user/me', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + testCookies
                }
            });
            // console.log(res.data);

            user.value.id = res.data.id;
            user.value.username = res.data.username;
        } catch (error) {
            console.log("userInfo error");
        }
    }

    return {
        user,
        userInfo,
    }
})