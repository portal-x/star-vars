<template>
  <div class="about">
    <div class="header">
      <h1>Star wars heroes</h1>
      <hr />
    </div>
    <Info v-bind:url="url" v-bind:naming="naming" />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "People",
  components: {
    Info,
  },
  data() {
    return {
      url: "https://swapi.dev/api/people",
      naming: "name",
    };
  },
};
</script>
