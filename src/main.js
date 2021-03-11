import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import firebase from 'firebase'

let app = null

firebase.auth().onAuthStateChanged(() =>{
    if (!app) {
      app = new Vue({
        router,
        render: h => h(App)
      }).$mount('#app')
    }
  })

createApp(App).use(router).mount('#app')
