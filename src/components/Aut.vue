  
<template>
  <form >
    <h2>Autarization form</h2>
    
    <p>
      <label for="email">Your email:</label>
      <input type="text" id="email" v-model="user.email">
    </p>
    <p>
      <label for="password">Your password:</label>
      <input type="text" id="password" v-model="user.password">
    </p>
    <button type="button" name="button" v-on:click="getPosts()">Login</button>
  </form>
</template>

<script>
export default {
  name: 'formPost',
  data: () => ({
    user: {
        email:"",
        password: ""
  }
}),
 methods: {
    getPosts() {
            this.$store
              .dispatch("user/loginUser", this.user);
          }
        }
      };

</script>

<style>
</style>