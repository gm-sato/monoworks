<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newItem" @keyup.enter="addItem" placeholder="Add an item" />
    <button @click="addItem">Add</button>
    <transition-group name="list-item" tag="ul">
      <li v-for="(item, index) in items" :key="item" class="list-item">
        {{ item }}
        <button @click="removeItem(index)">Remove</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      items: []
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== '') {
        this.items.push(this.newItem.trim());
        this.newItem = '';
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.list-item {
  margin: 5px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
