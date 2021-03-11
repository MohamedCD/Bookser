<template>
    <form class="box" @submit.prevent="onSubmit">
        <h1>New Serie</h1>
        <input type="text" v-model="form.name" placeholder="Name"> 
        <input type="text" v-model="form.picture" placeholder="Picture"> 
        <input min="1" type="number" v-model="form.episode" placeholder="Episodes"> 
        <input min="0" max="10" type="number" v-model="form.score" placeholder="Score"> 
        <input type="submit" name="" value="Add">
        <div v-if="error">{{ error }}</div>
    </form>
</template>

<script>
    import {createSerie} from '@/firebase'
    import {reactive} from 'vue'
    export default {
        setup(){
            const form = reactive({title: '' , picture: '', episode: '' , score: ''})
            const onSubmit = async () => {
                await createSerie({ ...form})
                form.title = ''
                form.picture = ''
                form.episode = ''
                form.score = ''
            }
            return {form , onSubmit}
        }
    }
</script>