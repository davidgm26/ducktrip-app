<template>
    <nav class="container">
        <div class="top-side">
            <div>
                <router-link to="/" class="logo">
                    <p class="name">DUCKTRIP</p>
                    <img src="../assets/icons/logo.svg" alt="logo">
                </router-link>

            </div>
            <div class="buttons">
                <router-link to="/" class="button">Home</router-link>
                <router-link to="/flights" class="button">Vuelos</router-link>
                <!-- <router-link to="/" class="button">Tiempo</router-link> -->
                <!-- <router-link to="/" class="button">Hoteles</router-link> -->
            </div>
        </div>
        <div class="bottom-side">
            <h1 class="nav-bar-tittle">Encuentra tu destino perfecto</h1>
            <p class="nav-bar-subtittle">Busca ofertas en Hoteles, Vuelos y consulta el Tiempo</p>
        </div>
    </nav>
</template>
<script>

export default {
    name: 'NavigationTopBar',

}
</script>
<style>
:root {
    --words-color: #fff
}

.container {
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: #3E86F5;
    height: 200px;
    padding: 10px;

    & .top-side {
        width: 100%;
        height: 80px;
        padding: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & .buttons {
            display: flex;
            gap: 2rem;
            justify-content: flex-end;
            align-items: center;

            & .button {
                display: flex;
                text-align: center;
                align-items: center;
                justify-content: center;
                width: 80px;
                background-color: #002148;
                color: var(--words-color);
                border-radius: 20px;
                text-decoration: none;
            }
        }

        & .logo {
            padding: 5px;
            height: 50px;
            display: flex;
            align-items: center;
            gap: 1rem;
            color: var(--words-color);
            text-decoration: none;

            & img {
                max-width: 30px;
            }
        }
    }

    & .bottom-side {
        padding: 2px;
        width: 100%;
        height: 150px;
        margin-top: 5px;

        & .nav-bar-tittle {
            font-size: 3em;
            color: var(--words-color);
            text-shadow: 1px 0.5px #000;
        }

        & .nav-bar-subtittle {
            color: var(--words-color);
            font-size: 1.5em;
        }
    }

}
</style>