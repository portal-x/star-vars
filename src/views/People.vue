<template>
  <div class="about">
    <div class="header">
      <h1>Star wars heroes</h1>
      <hr />
    </div>
    <Info v-bind:url="url" />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  components: {
    Info,
  },
  data() {
    return {
      url: "https://swapi.dev/api/people",
    };
  },
};
</script>
