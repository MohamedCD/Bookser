<template>
  <form class="box" @submit.prevent="update">
        <h1>Edit Serie</h1>
        <input type="text" v-model="form.name" placeholder="Name" required> 
        <input type="text" v-model="form.picture" placeholder="Picture" required> 
        <input min="1" type="number" v-model="form.episode" placeholder="Episodes" required> 
        <input min="0" max="10" type="number" v-model="form.score" placeholder="Score" required> 
        <input type="submit" name="" value="Update">
        <div v-if="error">{{ error }}</div>
    </form>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getSerie, updateSerie } from '@/firebase'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const serieId = computed(() => route.params.id)
    const form = reactive({ name: '', picture: '', episode: '', score: ''})
    onMounted(async () => {
      const serie = await getSerie(serieId.value)
      form.name = serie.name
      form.picture = serie.picture
      form.episode = serie.episode
      form.score = serie.score
    })
    const update = async () => {
      await updateSerie(serieId.value, { ...form })
      router.push('/series')
      form.name = ''
      form.picture = ''
      form.episode = ''
      form.score = ''
    }
    return {form, update}
  }
}
</script>