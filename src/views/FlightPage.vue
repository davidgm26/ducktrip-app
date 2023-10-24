<template>
    <NavigationTopBar />
    <SearchFlight />
    <div>
        <FlightCard />
    </div>
</template>
<script>
import FlightCard from '../components/FlightCard.vue';
import NavigationTopBar from '../components/NavigationTopBar.vue';
import SearchFlight from '../components/SearchFlight/SearchFlight.vue';
export default {
    name: 'FlightPage',
    components: {
        NavigationTopBar,
        FlightCard,
        SearchFlight
    }
}
</script>
<style scoped></style>
