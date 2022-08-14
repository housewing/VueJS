<template>
    <main class="login">
		<section class="forms">

			<form class="login" @submit.prevent="login">
				<h2>Login</h2>
				<input 
					type="text" 
					placeholder="Username"
					v-model="login_form.username" />
				<input 
					type="password" 
					placeholder="Password" 
					v-model="login_form.password" />
				<input 
					type="submit" 
					value="Login" />
			</form>

		</section>
	</main>
</template>

<script setup>
    import { reactive } from 'vue'
	import { useAuthStore } from '../store/auth'

	const authStore = useAuthStore();

    const login_form = reactive({
        username: 'test',
        password: 'secret'
    });
    
    const login = () => {
		// console.log(`login username: ${login_form.username}, password: ${login_form.password}`)
		const formData = new FormData();
		for ( let key in login_form ) {
			formData.append(key, login_form[key]);
		}
		authStore.login(formData);
    }

</script>

<style>
.forms {
	display: flex;
	min-height: 50vh;
}
form {
	flex: 1 1 0%;
	padding: 8rem 1rem 1rem;
}
h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
}
input {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}
input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}
input:focus:not([type="submit"]) {
	opacity: 1;
}
input::placeholder {
	color: inherit;
}
form.login input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}
form.login input[type="submit"] {
	background-color: rgb(245, 66, 101);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
</style>
