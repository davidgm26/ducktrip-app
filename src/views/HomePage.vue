<template>
    <NavigationTopBar />
    <div>
        <SearchFlight />
    </div>
    <FamousPlaces />
    <ProgressBar />
    <TipsResume />
</template>

<script>
import FamousPlaces from '../components/FamousPlaces.vue';
import NavigationTopBar from '../components/NavigationTopBar.vue';
import SearchFlight from '../components/SearchFlight/SearchFlight.vue';
import ProgressBar from '../components/ProgressBar.vue';
import TipsResume from '../components/TipsResume.vue';

export default {
    name: 'HomePage',
    components: {
        NavigationTopBar,
        SearchFlight,
        FamousPlaces,
        ProgressBar,
        TipsResume
    }
}
</script>

<style scoped></style>