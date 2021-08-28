<template>
  <form @submit.prevent="formPostReg">
    <h2>Autarization form</h2>
    <p>
      <label for="name">Your name:</label>
      <input type="text" id="name" v-model="name">
    </p>
    <p>
      <label for="email">Your email:</label>
      <input type="text" id="email" v-model="email">
    </p>
    <p>
      <label for="password">Your password:</label>
      <input type="text" id="password" v-model="password">
    </p>
    <p>
      <label for="password_confirmation">Your password_confirmation:</label>
      <input type="text" id="password_confirmation" v-model="password_confirmation">
    </p>
    <button type="button" name="button" v-on:click="getPosts()">Registration</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'formPostReg',
  data() {
    return {
        name:'',
        email:'',
        password: '',
        password_confirmation:'',
  }
},
 methods: {
    getPosts() {
      return axios.post('https://mobile.fakebook.press/api/register', { email: this.email,
          password: this.password, name: this.name, password_confirmation: this.password_confirmation
        
      }).then((response) => {
        console.log('email: ' + this.email);
        console.log('password: ' + this.password);
        console.log('response: ' + response);
      }).catch( error => { 
        console.log('error: ' + error); 
      });
    }
  }
}
</script>

<style>
</style>