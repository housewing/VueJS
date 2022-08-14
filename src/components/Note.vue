<template>
    <section class="forms">

        <form class="note" @submit.prevent="createOrEdidNote">
            <h2>Note
                <router-link to="/">
                    <img src="../assets/back.svg" width="16" height="16"/>
                </router-link>
            </h2>
            <input 
                type="text" 
                placeholder="Title"
                v-model="note_form.title" />
            <input 
                type="text" 
                placeholder="Content"
                v-model="note_form.content" />
            
            <input 
                type="submit" 
                value="Add" v-if="props.id === ''"/>
            <input 
                type="submit" 
                value="Edit" v-else/>
        </form>

    </section>

</template>

<script setup>
    import { ref } from 'vue'
    import { useNoteStore } from '../store/note'

    const props = defineProps(['id', 'title', 'content']);

    const noteStore = useNoteStore();

    const note_form = ref({
        title: props.title,
        content: props.content
    });

    const createOrEdidNote = () => {
        const formData = {
            id: props.id,
            title: note_form.value.title,
            content: note_form.value.content
        }
        
        if (props.id !== ''){
            noteStore.updateNote(formData);
        } else {
            noteStore.createNote(formData);
        }
    }

</script>

<style>
.table {
    width: 50%;
    margin:0 auto;
}

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
form.note input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}
form.note input[type="submit"] {
	background-color: rgb(245, 66, 101);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
</style>
