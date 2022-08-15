<template>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hi. {{ user.username }}!</h1>
    <br>

    <section class="table">
        <hr>
        <br>
        <h2>
            Note List
            <router-link
                :to="{
                    name: 'Note',
                    params:{
                        id: '',
                        title: '',
                        content: ''
                    }
                }">
                <img src="../assets/add.svg" width="16" height="16"/>
            </router-link>
        </h2>
        
        <table class="grid" cellspacing="0" v-if="noteList.length !== 0">
            <tr>
                <td width="35%">Title</td>
                <td width="35%">Content</td>
                <td width="30%"></td>
            </tr>
            <tr v-for="note in noteList" :key="note.id">
                <td width="35%">{{ note.title }}</td>
                <td width="35%">{{ note.content }}</td>
                <td width="30%">
                    <router-link
                        :to="{ 
                            name: 'Note', 
                            params:{
                                id: note.id, 
                                title: note.title, 
                                content: note.content
                            }
                        }">
                        <img src="../assets/pencil.svg" width="16" height="16"/>
                    </router-link>
                     | 
                    <img src="../assets/trash.svg" width="16" height="16" @click.prevent="noteStore.deleteNote(note)"/>
                </td>
            </tr>
        </table>

    </section>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { useUserStore } from '../store/user'
    import { useNoteStore } from '../store/note';

    const userStore = useUserStore();
    const noteStore = useNoteStore();

    const { user } = storeToRefs(userStore);
    const { noteList } = storeToRefs(noteStore);

    const { userInfo } = userStore;
    const { getNotes } = noteStore;

    userInfo();
    getNotes();

</script>

<style>
table.grid {
    width:100%;
    border:none;
    background-color:#f1f1f1;
    padding:0px;
}
table.grid tr {
    text-align:center;
}
table.grid td {
    border:4px solid white;
    padding:10px;
}

img {
    cursor: pointer;
}
</style>
