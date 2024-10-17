<template>
    <div>
    <div class="navbar-container">
      <div class="navbar">
        <span class="logo">
            Sport
          <span>Fit</span>
        </span>
        <RouterLink to="/home" class="button-nav">Home</RouterLink>
        <RouterLink to="about" class="button-nav">About</RouterLink>
        <RouterLink to="/home" class="button-nav">Classes & Services</RouterLink>
        <RouterLink to="about" class="button-nav">Blog</RouterLink>
        <RouterLink to="/home" class="button-nav">Contact</RouterLink>
      </div>
    </div>
  <main>
    <RouterView />
  </main>
</div>
</template>
<script>

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

@import "./assets/css/style.scss";
</style>