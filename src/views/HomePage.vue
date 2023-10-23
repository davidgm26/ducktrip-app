<template>
    <NavigationTopBar />
    <div>
        <SearchFlight />
    </div>
    <FamousPlaces />
</template>
<script>
import FamousPlaces from '../components/FamousPlaces.vue';
import NavigationTopBar from '../components/NavigationTopBar.vue';
import SearchFlight from '../components/SearchFlight/SearchFlight.vue';

export default {
    name: 'HomePage',
    components: {
        NavigationTopBar,
        SearchFlight,
        FamousPlaces
    }
}
</script>
<style scoped></style>