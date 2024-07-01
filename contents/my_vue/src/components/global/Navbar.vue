<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/api-data">API Data</router-link></li>
      <li><router-link to="/list">Todo List</router-link></li>
      <li><router-link to="/gsap-example">GSAP Example</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
  background-color: #333;
  overflow: hidden;
}

nav ul li {
  float: left;
}

nav ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav ul li a:hover {
  background-color: #111;
}
</style>
