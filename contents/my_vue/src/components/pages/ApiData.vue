<template>
  <div>
    <h1>API Data</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.items = response.data
      })
      .catch(error => {
        console.error('There was an error!', error)
      })
  }
}
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
