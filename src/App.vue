<template>
  <div id="nav">
    <router-link to="/">Films</router-link> |
    <router-link to="/people">People</router-link> |
    <router-link to="/starships">Starships</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  position: fixed;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

input {
  border: none;
  outline: none;
  border-bottom: 2px solid red;
  font-size: 18px;
  text-align: center;
  box-shadow: 8px 5px 5px rgb(229, 168, 168);
}
</style>
