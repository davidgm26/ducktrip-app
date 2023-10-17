<script>
import SearchFlight from './components/SearchFlight.vue';
import NavigationTopBar from './components/NavigationTopBar.vue';

export default {
  name: 'App',
  components: {
    SearchFlight,
    NavigationTopBar,
  }
}

</script>

<template>
  <header>
    <NavigationTopBar />
  </header>
  <main>
    <SearchFlight />
  </main>

  <RouterView />
</template>

<style scoped></style>
