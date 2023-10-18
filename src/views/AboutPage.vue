<template>
    <NavigationTopBar />
    <div class="about">
        <h1 class="about-title">Conoce al equipo</h1>
        <div class=""></div>
    </div>
</template>

<script>
import NavigationTopBar from '../components/NavigationTopBar.vue';

export default {
    name: 'AboutPage',
    components: { NavigationTopBar }
}
</script>

<style>
.about {
    background-color: #ffffff;
    width: 100%;
    padding: 1rem 2rem;
}

.about-title {
    color: #393838;
    text-shadow: 0px 4px 4px #00000040;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 2rem;
}
</style>