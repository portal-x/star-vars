<template>
  <li v-on:click="$emit('select', item)">
    <span>{{ item.name }}</span>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    naming: {
      required: true,
    },
  },
  methods: {
    handleClick() {
      console.log("name:", this.item.name);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  padding: 5px;
  font-weight: bolder;
}
</style>
