<template>
    <main class="login">
		<section class="forms">

			<form class="register" @submit.prevent="register">
				<h2>Register</h2>
				<input 
					type="text" 
					placeholder="Username"
					v-model="register_form.username" />
				<input 
					type="password" 
					placeholder="Password" 
					v-model="register_form.password" />
				<input 
					type="submit" 
					value="Register" />
			</form>

		</section>
	</main>
</template>

<script setup>
    import { ref } from 'vue'
	import { useAuthStore } from '../store/auth'

	const authStore = useAuthStore();

    const register_form = ref({
		username: 'test1',
		password: 'secret1'
	});

    const register = () => {
		// console.log(`register username: ${register_form.value.username}, password: ${register_form.value.password}`)
		const formData = new FormData();
		for ( let key in register_form.value ) {			
			formData.append(key, register_form.value[key]);
		}
		authStore.register(formData);
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
form.register {
	color: #FFF;
	background-color: rgb(245, 66, 101);
	background-image: linear-gradient(
		to bottom right,
		rgb(245, 66, 101) 0%,
		rgb(189, 28, 60) 100%
	);
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
form.register input:not([type="submit"]) {
	color: #FFF;
	border-bottom: 2px solid #FFF;
}
form.register input[type="submit"] {
	background-color: #FFF;
	color: rgb(245, 66, 101);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
</style>
