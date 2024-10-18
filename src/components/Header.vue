<template>
  <div>
    <div>
      <div class="logo">
        <span>
          Sport
          <span>Fit</span>
        </span>
        
      </div>
    </div>
    <button @click="toggleNav" class="menu-btn">☰</button>
    <div :class="['navbar-container', { open: isOpen }]">
      <div class="navbar">
        <RouterLink to="home" class="button-nav">Home</RouterLink>
        <RouterLink to="about" class="button-nav">About</RouterLink>
        <RouterLink to="services" class="button-nav">Classes & Services</RouterLink>
        <RouterLink to="blog" class="button-nav">Blog</RouterLink>
        <RouterLink to="contact" class="button-nav">Contact</RouterLink>
      </div>
    </div>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>

export default {
  name: 'AppHeader',

  data() {
    return {
      isOpen: false, 
    };
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen; 
    },
  },
};
</script>

<style>
@import '../assets/css/style.scss';

</style>