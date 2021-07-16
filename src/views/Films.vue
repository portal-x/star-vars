<template>
  <div class="about">
    <div class="header">
      <h1>Star wars films</h1>
      <hr />
    </div>
    <Info v-bind:url="url" v-bind:naming="naming" />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "Films",
  components: {
    Info,
  },
  data() {
    return {
      url: "https://swapi.dev/api/films",
      naming: "title",
    };
  },
};
</script>
