<template>
    <form class="box" @submit.prevent="login">
        <h1>BOOKSER</h1>
        <input type="email" v-model="email" placeholder="Email"> 
        <input type="password" v-model="password" placeholder="Password"> 
        <div id="loginButtons">
            <input type="submit" name="" value="Login">
            <router-link value="SignUp" to="/signUp">Join us!</router-link>
        </div>
        <div v-if="error">{{ error }}</div>
    </form>
</template>

<script>
    import firebase from 'firebase';
    export default {
        data (){
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        name: 'Login',
        methods: {
            login() {
                this.error=''
                if (this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email , this.password)
                .then(user=>{
                    console.log(user)
                    this.$router.push({name: 'Books'})
                }).catch(err=>{
                    this.error = err.message
                })
                }else{
                    this.error = 'Error';
                }
            }
        }
    }
</script>

<style>
    
</style>