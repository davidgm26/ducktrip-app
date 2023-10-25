<template>
  <main>
    <NavigationTopBar />
    <SearchFlight />
    <div>
      <FlightCard />
    </div>
  </main>
  <FooterSection />
</template>
<script>
import FlightCard from "../components/FlightCard.vue";
import FooterSection from "../components/FooterSection.vue";
import NavigationTopBar from "../components/NavigationTopBar.vue";
import SearchFlight from "../components/SearchFlight/SearchFlight.vue";
export default {
  name: "FlightPage",
  components: {
    NavigationTopBar,
    FlightCard,
    SearchFlight,
    FooterSection,
  },
};
</script>
<style scoped>
main {
  background-color: white;
  padding-bottom: 4rem;
  min-height: 84vh;
}
</style>
