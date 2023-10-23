<template>
    <NavigationTopBar />
    <div>
        <SearchFlight />
    </div>
    <ProgressBar />
</template>
<script>
import NavigationTopBar from '../components/NavigationTopBar.vue';
import SearchFlight from '../components/SearchFlight/SearchFlight.vue';
import ProgressBar from '../components/ProgressBar.vue';

export default {
    name: 'HomePage',
    components: { NavigationTopBar, ProgressBar, SearchFlight }
}
</script>
<style scoped></style>