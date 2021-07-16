<template>
  <li v-on:click="$emit('select', item)">
    <span>{{ item.name || item.title }}</span>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
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
