<template>
    <div class="d-flex flex-row flex-wrap justify-content-center m-2" style="width: 100%">
        <div class="card bg-dark text-white m-2" style="width: 300px;" v-for="{id , title, picture, author, page, score} in books" :key="id">
            <div class="img d-flex justify-content-center" style="width:100%"><img v-bind:src="picture" class="card-img-top" style="width: 200px; height:300px"></div>
            <div class="card-body">
                <h3 class="card-title text-center">{{title}}</h3>
                <p class="card-text"><b>Author: </b>{{author}}</p>
                <p class="card-text"><b>Pages:  </b>{{page}}</p>
                <p class="card-text"><b>Score:  </b>{{score}}</p>
            </div>
            <div class="card-body">
                <router-link :to="`/editBook/${id}`">
                    <button class="btn btn-info btn-sm me-2">
                        Edit
                    </button>
                </router-link>
                <button class="btn btn-warning btn-sm me-2" @click="deleteBook(id)">
                        Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {useLoadBooks , deleteBook} from '@/firebase'
    export default {
        setup(){
            const books = useLoadBooks()
            return {books, deleteBook}
        }
    }
</script>
