<script lang="ts" setup></script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
a {
  color: white;
}

nav {
  background-color: var(--darkgreen);
  display: flex;
  justify-content: center;
  height: 100vh;
  min-width: 200px;
}

ul {
  margin-top: 2rem;
  padding: 0;
}

li {
  font-size: 1rem;
  list-style: none;
  margin-bottom: 1rem;
}
</style>
