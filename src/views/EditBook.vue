<template>
  <form class="box" @submit.prevent="update">
      <h1>Edit Book</h1>
      <input type="text" v-model="form.title" placeholder="Title"> 
      <input type="text" v-model="form.picture" placeholder="Picture"> 
      <input type="text" v-model="form.author" placeholder="Author"> 
      <input min="1" type="number" v-model="form.page" placeholder="Pages"> 
      <input min="0" max="10" type="number" v-model="form.score" placeholder="Score"> 
      <input type="submit" name="" value="Update">
      <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import {reactive, computed, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {getBook, updateBook} from '@/firebase'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const bookId = computed(() => route.params.id)
    const form = reactive({title: '', picture: '' , author: '', page: '', score: ''})
    onMounted(async () => {
      const book = await getBook(bookId.value)
      form.title = book.title
      form.picture = book.picture
      form.author = book.author
      form.page = book.page
      form.score = book.score
    })
    const update = async () => {
      await updateBook(bookId.value, { ...form })
      router.push('/books')
      form.title = ''
      form.picture = ''
      form.author = ''
      form.page = ''
      form.score = ''
    }
    return {form, update}
  }
}
</script>