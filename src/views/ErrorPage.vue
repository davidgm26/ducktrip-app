<template>
    <NavigationTopBar />

    <main class="error-container">
        <PlaneGame />

        <div class="error-text">
            <h1 class="error-title">Lo sentimos, parece que el avión nos ha llevado a un destino equivocado.</h1>
            <h2 class="error-title">¡Recalculando...!</h2>
            <p class="error-back">Dirígete a la <a class="back-home" href="/">página de inicio</a> para configurar el
                destino
                perfecto para ti</p>
        </div>
    </main>
</template>

<script>
import NavigationTopBar from '../components/NavigationTopBar.vue';
import PlaneGame from '../components/PlaneGame.vue';

export default {
    name: 'ErrorPage',
    components: { NavigationTopBar, PlaneGame },
}
</script>

<style>
.error-container {
    background-color: #ffffff;
    width: 100%;
    min-height: 100vh;
    padding: 3rem 2rem;
}

.error-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 3rem 0;
}

.error-title {
    color: #00307A;
    text-shadow: 0px 4px 4px #00000040;
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.error-back {
    color: #3E86F5;
    text-shadow: 0px 4px 4px #00000040;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.back-home {
    color: #00307A;
}
</style>