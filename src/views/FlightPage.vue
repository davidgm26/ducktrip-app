<template>
    <main>
        <NavigationTopBar />
        <SearchFlight />
        <div>
            <FlightCard />
        </div>
    </main>
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
<style scoped>
main {
    background-color: white;
}
</style>
