<template>
    <form class="box" @submit.prevent="onSubmit">
        <h1>New Book</h1>
        <input type="text" v-model="form.title" placeholder="Title"> 
        <input type="text" v-model="form.picture" placeholder="Picture"> 
        <input type="text" v-model="form.author" placeholder="Author"> 
        <input min="1" type="number" v-model="form.page" placeholder="Pages"> 
        <input min="0" max="10" type="number" v-model="form.score" placeholder="Score"> 
        <input type="submit" name="" value="Add">
        <div v-if="error">{{ error }}</div>
    </form>
</template>

<script>
import { createBook } from '@/firebase'
import { reactive } from 'vue'
export default {
    setup(){
        const form = reactive({title: '' , picture: '', author: '', page: '', score: ''})
        const onSubmit = async () => {
            await createBook({ ...form})
            form.name = ''
            form.picture = ''
            form.author = ''
            form.page = ''
            form.score = ''
        }
        
        return {form , onSubmit}
    }
}
</script>