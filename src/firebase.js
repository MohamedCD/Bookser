import firebase from 'firebase'
import {ref, onUnmounted} from 'vue'

const firebaseConfig = {
  apiKey: "AIzaSyAxFxZCGLm6L23_bl23eBn8y9cVjA9fzAE",
  authDomain: "bookser-83c0f.firebaseapp.com",
  projectId: "bookser-83c0f",
  storageBucket: "bookser-83c0f.appspot.com",
  messagingSenderId: "852955753026",
  appId: "1:852955753026:web:2fe82e66decf5e908a1bdb"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const bookCollection = db.collection('book');
  const serieCollection = db.collection('serie');

//Book CRUD
  export const createBook = book =>{
    return bookCollection.add(book);
  }

  export const getBook = async id => {
    const book = await bookCollection.doc(id).get()
    return book.exists ? book.data() : null
  }

  export const updateBook = (id , book) => {
    return bookCollection.doc(id).update(book);
  }

  export const deleteBook = id => {
    return bookCollection.doc(id).delete()
  }

  export const useLoadBooks = () => {
    const books = ref([])
    const close = bookCollection.onSnapshot(snapshot => {
      books.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)

    return books
  }


//Serie CRUD
export const createSerie = serie =>{
    return serieCollection.add(serie); 
}

export const getSerie = async id => {
    const serie = await serieCollection.doc(id).get()
    return serie.exists ? serie.data() : null
}

export const updateSerie = (id , serie) => {
    return serieCollection.doc(id).update(serie);
}

export const deleteSerie = id => {
    return serieCollection.doc(id).delete()
}

export const useLoadSeries = () => {
    const series = ref([])
    const close = serieCollection.onSnapshot(snapshot => {
      series.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)

    return series
  }
