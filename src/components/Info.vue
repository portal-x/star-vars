<template>
  <div class="about">
    <Spinner v-if="!list.length" />
    <div v-else-if="!person" class="info">
      <input type="text" placeholder="search" v-model="filter" />
      <ul>
        <Item
          v-for="person of filteredItems"
          :key="person[naming]"
          v-bind:item="person"
          v-on:select="showInfo"
        />
      </ul>
    </div>
    <Description v-bind:info="person" v-if="person" v-on:back="goBack" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import getData from "@/features/getData";
import Spinner from "@/components/Spinner.vue";
import Description from "@/components/Description.vue";

export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    naming: {
      type: String,
      required: true,
    },
  },
  components: {
    Item,
    Spinner,
    Description,
  },
  data() {
    return {
      list: [],
      filter: "",
      person: null,
    };
  },
  methods: {
    showInfo(personInfo) {
      this.person = personInfo;
    },
    goBack() {
      this.person = null;
    },
  },
  computed: {
    filteredItems() {
      return this.list.filter((item) =>
        item[this.naming].toLowerCase().startsWith(this.filter.toLowerCase())
      );
    },
  },
  mounted() {
    const apiURL = this.url;
    getData(apiURL).then((res) => (this.list = res));
  },
};
</script>
