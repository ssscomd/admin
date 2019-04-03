<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./Home";
export default {
  name: 'App',
  components : {
    Home,
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
html,body,#app,.home {
  height: 100%;
}
body,html {
   overflow: hidden;

}
</style>
