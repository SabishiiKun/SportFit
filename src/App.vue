<template>
  <div id="app">
    <MiComponente></MiComponente>
    <div class="navbar-container">
                <div class="navbar">
                    <div class="logo">
                        Sport
                        <span>Fit</span>
                    </div>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Classes & Services</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
            </div>
  </div>
</template>

<script>
import MiComponente from './components/MiComponente.vue';
 
export default {
  name: 'App',
  components: {
    MiComponente
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
