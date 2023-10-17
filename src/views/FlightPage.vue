<template>
    <NavigationTopBar />
    <div>
        <SearchFlight />
    </div>
</template>
<script>
import NavigationTopBar from '../components/NavigationTopBar.vue';
import SearchFlight from '../components/SearchFlight.vue'

export default {
    name: 'FlightPage',
    components: {
        SearchFlight,
        NavigationTopBar
    }

}
</script>