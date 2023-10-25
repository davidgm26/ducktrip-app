<template>
    <NavigationTopBar />
    <SearchFlight />
    <FamousPlaces />
    <TipsResume />
    <ProgressBar />
    <ButtonToTop />
    <FooterSection />
</template>

<script>
import FamousPlaces from '../components/FamousPlaces.vue';
import NavigationTopBar from '../components/NavigationTopBar.vue';
import SearchFlight from '../components/SearchFlight/SearchFlight.vue';
import ProgressBar from '../components/ProgressBar.vue';
import ButtonToTop from '../components/ButtonToTop.vue';
import TipsResume from '../components/TipsResume.vue';
import FooterSection from '../components/FooterSection.vue';

export default {
    name: 'HomePage',
    components: {
        NavigationTopBar,
        SearchFlight,
        FamousPlaces,
        ProgressBar,
        ButtonToTop,
        TipsResume,
        FooterSection
    }
}
</script>
<style scoped></style>
