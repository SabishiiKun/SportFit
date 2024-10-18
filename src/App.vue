<template>
  <div>
    <AppHeader/>
  </div>
</template>

<script>

import AppHeader from './components/Header.vue';

 
export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

@import "./assets/css/style.scss";
</style>
