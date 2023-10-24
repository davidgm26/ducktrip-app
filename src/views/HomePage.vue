<template>
    <NavigationTopBar />
    <div>
        <SearchFlight />
    </div>
    <FamousPlaces />
    <ProgressBar />
    <FooterSection />
</template>
<script>
import FamousPlaces from '../components/FamousPlaces.vue';
import NavigationTopBar from '../components/NavigationTopBar.vue';
import SearchFlight from '../components/SearchFlight/SearchFlight.vue';
import ProgressBar from '../components/ProgressBar.vue';
import FooterSection from '../components/FooterSection.vue';

export default {
    name: 'HomePage',
    components: {
        NavigationTopBar,
        SearchFlight,
        FamousPlaces,
        ProgressBar,
        FooterSection
    }
}
</script>
<style scoped></style>
