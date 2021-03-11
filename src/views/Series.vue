<template>
  <div class="home">
    <div id="nav">
      <div>
        <router-link to="/books">Books</router-link> |
        <router-link to="/series">Series</router-link>
      </div>
      <button id="logout" class="btn" @click.prevent="logout">Logout</button>
    </div>
    <div id="booksComponents">
      <SerieCreate/>
      <SerieList/>
    </div>
  </div>
</template>

<script>
import SerieCreate from '@/components/SerieCreate.vue'
import SerieList from '@/components/SerieList.vue'
import firebase from 'firebase'


export default {
  name: 'Series',
  components: {
   SerieCreate,
   SerieList
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() =>{
        this.$router.push({name: 'Index'})
      })
    },
  },
}
</script>
