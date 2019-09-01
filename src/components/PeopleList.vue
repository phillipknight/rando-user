<template>
  <div>
    <h2>In Person List</h2>
    <div v-if="people.length">
      <div v-for="person in people" :key="person.id.value" @click="showPersonDetail(person)">
        <router-link :to="'/detail/' + person.id.value">
        <img :src="person.picture.medium" />
        {{ person.name.first }} {{ person.name.last }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { loadAllPeople } from "../data-service";

export default {
  name: 'PeopleList',
  data() {
    return {
      people: []
    };
  },
  mounted() {
    // using dataService without dot notation
    loadAllPeople().then(_people => {
      this.people = _people;
    });
  },
  methods: {
    showPersonDetail(_person) {
      this.$router.push({ 
        name: "detail",
        params: {userId: _person.id.value }
      });
    }
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
