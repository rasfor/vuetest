<template>
  <div id="app">
    <router-view/>
    <Reg/>
  </div>
</template>

<script>
import Reg from './components/Reg.vue'
import Aut from './components/Aut.vue'
export default {
  name: 'App',
  components: { Aut, Reg },
 
}
</script>

<style>
</style>