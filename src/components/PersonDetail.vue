<template>
  <div>
    <div>A Person Detail</div>
    <p>{{user.email}}</p>
    <div>
      <img :src="user.picture.large" />
    </div>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
import * as dataService from "../data-service";

export default {
  name: 'PersonDetail',
  props: {
    userId: String
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  },
  created() {
    this.user = dataService.getPersonById(this.userId);
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
