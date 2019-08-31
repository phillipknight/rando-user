<template>
  <div id="app">
    <people-list></people-list>
  </div>
</template>

<script>
import PeopleList  from './components/PeopleList.vue'

export default {
  name: 'app',
  components: {
    PeopleList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
