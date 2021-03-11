<template>
    <div class="d-flex flex-row flex-wrap justify-content-center m-2" style="width: 100%">
        <div class="card bg-dark text-white m-2" style="width: 300px;" v-for="{id , name, picture, episode, score} in series" :key="id">
            <div class="img d-flex justify-content-center" style="width:100%"><img v-bind:src="picture" class="card-img-top" style="width: 300px; height:200px"></div>
            <div class="card-body">
                <h3 class="card-title text-center">{{name}}</h3>
                <p class="card-text"><b>Episodes:  </b>{{episode}}</p>
                <p class="card-text"><b>Score:  </b>{{score}}</p>
            </div>
            <div class="card-body">
                <router-link :to="`/editSerie/${id}`">
                    <button class="btn btn-info btn-sm me-2">
                        Edit
                    </button>
                </router-link>
                <button class="btn btn-warning btn-sm me-2" @click="deleteSerie(id)">
                        Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {useLoadSeries , deleteSerie} from '@/firebase'
    export default {
        setup(){
            const series = useLoadSeries()
            return {series , deleteSerie}
        },
    }
</script>