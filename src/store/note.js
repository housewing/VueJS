import { defineStore } from "pinia";
import { ref } from 'vue'
import axios from "axios";
import router from '../router'

export const useNoteStore = defineStore('note', () => {
    const noteList = ref([]);

    const getNotes = async () => {
        try {
            const res = await axios.get('http://localhost:8000/getNotes');
            noteList.value = res.data;
            // console.log(res.data);
        } catch(error) {
            console.log("get notes error");
        }
    }

    const createNote = async (formData) => {
        try {
            const res = await axios.post('http://localhost:8000/createNote', formData);
            console.log(res.data);
            router.push('/');
        } catch(error) {
            console.log(error)
            console.log("create note error");
        }
    }

    const updateNote = async (formData) => {
        try {
            const res = await axios.post('http://localhost:8000/updateNote', formData);
            console.log(res.data);
            router.push('/');
        } catch(error) {
            console.log(error)
            console.log("update note error");
        }
    }

    const deleteNote = async (formData) => {
        try {
            if (confirm('Delete or not?')) {
                const idx = noteList.value.findIndex((val) => {
                    return val.id === formData.id;
                });
                
                if (idx > -1) {
                    noteList.value.splice(idx, 1)
                    const res = await axios.post('http://localhost:8000/deleteNote', formData);
                    console.log(res.data);
                };
            }
        } catch(error) {
            console.log(error)
            console.log("delete note error");
        }
    }

    return {
        noteList,
        getNotes,
        createNote,
        updateNote,
        deleteNote,
    }
})