<template>
    <NavigationTopBar />
    <div>
        <FlightCard />
    </div>
    <FooterSection style="position: fixed;" />
</template>
<script>
import FlightCard from '../components/FlightCard.vue';
import FooterSection from '../components/FooterSection.vue';
import NavigationTopBar from '../components/NavigationTopBar.vue';
export default {
    name: 'FlightPage',
    components: {
        NavigationTopBar,
        FlightCard,
        FooterSection
    }
}
</script>
<style scoped></style>
