<template>
    <form class="box" @submit.prevent="signup">
        <h1>Sign Up</h1>
        <input type="email" v-model="email" placeholder="Email"> 
        <input type="password" v-model="password" placeholder="Password"> 
        <input type="submit" name="" value="SignUp">
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
    name: 'SignUp',
    methods: {
        signup() {
            this.error=''
             if (this.email && this.password) {
                firebase.auth().createUserWithEmailAndPassword(this.email , this.password)
                .then(user=>{
                    if(user) {
                        user.user.updateProfile({
                            displayName: this.name
                        }).then((u) =>{
                            this.email = ''
                            this.password = ''
                            this.$router.push({
                                name : 'Index'
                            })
                            console.log(u)
                            console.log(user)
                        }).catch(err =>{
                            this.error = err.message
                        })
                    }
                    this.email = ''
                    this.password = ''
                }).catch(err=>{
                    this.error = err.message
                })
             }else{
                 this.error = 'ERROR THE FORM DATA IS BAD';
             }
        }
    }
}
</script>