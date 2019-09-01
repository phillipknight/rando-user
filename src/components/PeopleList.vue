
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="greenish">
        <ion-title>In Person List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content >
        <ion-item color="yellowish" v-for="person in people" :key="person.id.value" @click="showPersonDetail(person)">
          <ion-avatar slot="start">
            <img :src="person.picture.medium" />
          </ion-avatar>
          <ion-label>
            <h1>{{person.name.first}} {{person.name.last}}</h1>
            <h2>{{person.email}}</h2>
          </ion-label>
        </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
import { loadAllPeople } from "../data-service";

export default {
  name: "PeopleList",
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
        params: { userId: _person.id.value }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
