<template>
    <NavigationTopBar />
    <div>
        <SearchFlight />
    </div>
</template>
<script>
import NavigationTopBar from '../components/NavigationTopBar.vue';
import SearchFlight from '../components/SearchFlight/SearchFlight.vue';

export default {
    name: 'HomePage',
    components: { NavigationTopBar, SearchFlight }
}
</script>
<style scoped></style>