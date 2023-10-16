<script>
import SearchFlight from './components/SearchFlight.vue';
//import FlightCard from './components/FlightCard.vue';

export default {
  name: "App",
  components: {
    SearchFlight,
    //FlightCard
  }

}

</script>

<template>
  <header>
    <SearchFlight />
  </header>
  <RouterView />
</template>

<style scoped></style>
