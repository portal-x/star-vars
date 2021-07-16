<template>
  <div>
    <div class="container">
      <table cellpadding="10" align="center">
        <tr v-for="(value, key) in descript" :key="key">
          <td>{{ key }}</td>
          <td v-for="description of value" :key="description" class="descript">
            <span>{{ description }}</span>
          </td>
        </tr>
      </table>
    </div>
    <button v-on:click="$emit('back')">back</button>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  computed: {
    descript() {
      const hendled = {};
      for (let name in this.info) {
        const value = [];
        if (typeof this.info[name] === "string") {
          value.push(this.info[name]);
        } else {
          value.push(...this.info[name]);
        }
        hendled[name] = value;
      }
      return hendled;
    },
  },
};
</script>

<style scoped>
.descript {
  display: flex;
  flex-flow: column wrap;
}
button {
  text-decoration: none;
  display: inline-block;
  width: 400px;
  padding: 10px 30px;
  margin: 10px 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid #08921b;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  color: #098b3f;
  transition: 0.2s ease-in-out;
}
button:before {
  content: "";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  height: 50px;
  width: 300px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
button:hover {
  background: #96ecb0;
  color: rgb(211, 72, 72);
}
button:hover:before {
  left: 250px;
  transition: 0.5s ease-in-out;
}
</style>
