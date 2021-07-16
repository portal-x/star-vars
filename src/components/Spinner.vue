<template>
  <div class="container">
    <div class="flex">
      <div class="row">
        <div class="col"><PulseLoader /></div>
        <div class="col">Data is loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    PulseLoader,
  },
};
</script>

<style scoped>
.col {
  display: inline-block;
  color: rgb(238, 9, 9);
  font-size: 30px;
  margin: 20px;
}
.flex {
  display: inline-block;
}
</style>
