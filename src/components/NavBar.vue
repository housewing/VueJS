<template>
    <div class="header">
        <div class="container">
            <nav v-if="isLogin">
                <router-link to="/">Home</router-link>
                <a href="#" @click="logout"> Logout </a>
            </nav>
            <nav v-else>
                <router-link to="/register">Register</router-link>
                <router-link to="/login">Login</router-link>
            </nav>
        </div>
    </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '../store/auth'
  
  const authStore = useAuthStore();
  const { logout } = authStore;
  const { isLogin } = storeToRefs(authStore);

</script>

<style scoped>
.header {
    width: 100%;
    position: fixed;
    background: #333;
    padding: 10px 0;
    color: #fff;
}
.header {
    top: 0;
}
.container {
    width: 80%;
    margin: 0 auto;
}
nav a {
    color: #42b983;
    padding: 7px 25px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
}
</style>
