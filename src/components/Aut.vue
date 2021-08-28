<template>
  <form >
    <h2>Autarization form</h2>
    
    <p>
      <label for="email">Your email:</label>
      <input type="text" id="email" v-model="email">
    </p>
    <p>
      <label for="password">Your password:</label>
      <input type="text" id="password" v-model="password">
    </p>
    <button type="button" name="button" v-on:click="getPosts()">Login</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'formPost',
  data() {
    return {
        email:'',
        password: '',
  }
},
 methods: {
    getPosts() {
      return axios.post('https://mobile.fakebook.press/api/login',
        { email: this.email,
          password: this.password
        
      }).then((response) => {
        console.log('email: ' + this.email);
        console.log('password: ' + this.password);
      }).catch( error => { 
        console.log('error: ' + error); 
      });
    }
  }
}
</script>

<style>
</style>