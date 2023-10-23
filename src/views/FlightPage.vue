<template>
    <NavigationTopBar />
    <div>
        <FlightCard />
    </div>
</template>
<script>
import FlightCard from '../components/FlightCard.vue';
import NavigationTopBar from '../components/NavigationTopBar.vue';
export default {
    name: 'FlightPage',
    components: {
        NavigationTopBar,
        FlightCard
    }
}
</script>