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
      <BookCreate/>
      <BookList/>
    </div>
  </div> 
</template>

  <script>
  import BookCreate from '@/components/BookCreate.vue'
  import BookList from '@/components/BookList.vue'
  import firebase from 'firebase'

  export default {
      data(){
        return {
          serie: null,
          name: '',
          email: '',
          password: '',
        }
      },
      name: 'Books',
      components: {
        BookCreate,
        BookList
      },
      methods: {
        logout(){
          firebase.auth().signOut().then(() =>{
            this.$router.push({name: 'Index'})
          })
        },
      },
      created(){
        firebase.auth().onAuthStateChanged(serie => {
          if(serie){
            this.serie = serie
          } else {
            this.serie = null
          }
        })
      } 
  }
</script>
