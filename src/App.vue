<!-- <script setup> -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>


<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<template>
  <div id="app" class="">


    <Header />

    <RouterView />
  </div>

</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
