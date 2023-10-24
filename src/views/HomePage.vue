<template>
    <NavigationTopBar />
    <div>
        <div>
            <SearchFlight />
        </div>
        <FamousPlaces />
        <ProgressBar />
        <ButtonToTop />
    </div>
    <FooterSection />
</template>
<script>
import FamousPlaces from '../components/FamousPlaces.vue';
import NavigationTopBar from '../components/NavigationTopBar.vue';
import SearchFlight from '../components/SearchFlight/SearchFlight.vue';
import ProgressBar from '../components/ProgressBar.vue';
import ButtonToTop from '../components/ButtonToTop.vue';
import FooterSection from '../components/FooterSection.vue';

export default {
    name: 'HomePage',
    components: {
        NavigationTopBar,
        SearchFlight,
        FamousPlaces,
        ProgressBar,
        ButtonToTop,
        FooterSection
    }
}
</script>
<style scoped></style>
