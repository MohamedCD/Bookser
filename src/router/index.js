import {createRouter, createWebHistory} from 'vue-router'
import Books from '../views/Books.vue'
import Series from '../views/Series.vue'
import Book from '../views/Books.vue'
import Serie from '../views/Series.vue'
import EditBook from '@/views/EditBook.vue'
import EditSerie from '@/views/EditSerie.vue'
import Index from '@/views/Index.vue'
import SignUp from "@/views/SignUp.vue";
import firebase from 'firebase';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: SignUp
  },
  {
    path: '/editBook/:id',
    name: 'EditBook',
    component: EditBook
   },
   {
    path: '/book/:id',
    name: 'Book',
    component: Book
   },
   {
    path: '/editSerie/:id',
    name: 'EditSerie',
   component: EditSerie
  },
  {
    path: '/serie/:id',
    name: 'Serie',
   component: Serie
  },
  {
    path: '/series',
    name: 'Series',
    component: Series,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next)=>{
  if (to.matched.some(rec => rec.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if(user){
      next();
    }else{
      next({
        name: 'Login'
      })
    }
  }else{
    next();
  }
})

export default router
