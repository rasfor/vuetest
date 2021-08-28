<template>
  <form @submit.prevent="formPostReg">
    <h2>Autarization form</h2>
    <p>
      <label for="name">Your name:</label>
      <input type="text" id="name" v-model="user.name">
    </p>
    <p>
      <label for="email">Your email:</label>
      <input type="text" id="email" v-model="user.email">
    </p>
    <p>
      <label for="password">Your password:</label>
      <input type="text" id="password" v-model="user.password">
    </p>
    <p>
      <label for="password_confirmation">Your password_confirmation:</label>
      <input type="text" id="password_confirmation" v-model="user.password_confirmation">
    </p>
    <button type="button" name="button" v-on:click="getPosts()">Registration</button>
  </form>
</template>

<script>
export default {
  name: 'formPost',
  data: () => ({
    user: {
        name: "",
        email:"",
        password: "",
        password_confirmation: "",
  }
}),
 methods: {
    getPosts() {
            this.$store
              .dispatch("user/registUser", this.user);
          }
        }
      };

</script>
<style>
</style>