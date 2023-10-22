<template>
    <NavigationTopBar />
    <main class="main">
        <section class="tips">
            <h1 class="tips-title">Tips interesantes para viajar</h1>
            <img src="@/assets/images/tips-header.jpg" alt="viajero con maletas" class="header-image" />
            <p class="paragraph">En <b>DuckTrip</b>, nos dedicamos a hacer que tus sueños de viajar se hagan
                realidad,
                y estamos aquí para ayudar a todos los aventureros a sacar el máximo provecho de sus travesías. Nuestro
                enfoque
                se centra en facilitar la búsqueda de vuelos al mejor precio de manera sencilla y efectiva. Ya sea que estés
                planeando unas vacaciones emocionantes o un viaje de estudios en el extranjero, te ofrecemos consejos
                valiosos
                para economizar y disfrutar al máximo.</p>
            <p class="paragraph">Así que, <b>¿por qué no explorar nuestros consejos y ponerlos en práctica en tu próxima
                    búsqueda
                    de vuelos en DuckTrip?</b> ¡Estamos aquí para hacer que tu aventura sea aún más emocionante!
            </p>

            <div class="index-container">
                <h3 class="index-title">Tabla de contenidos</h3>
                <ol>
                    <li>
                        <a class="index-link" href="#title1">1. Investiga y planifica</a>
                    </li>
                    <li>
                        <a class="index-link" href="#title2">2. Packing inteligente</a>
                    </li>
                    <li>
                        <a class="index-link" href="#title3">3. Documentos importantes</a>
                    </li>
                    <li>
                        <a class="index-link" href="#title4">4. Seguro de viaje</a>
                    </li>
                    <li>
                        <a class="index-link" href="#title5">5. Presupuesto adecuado</a>
                    </li>
                    <li>
                        <a class="index-link" href="#title6">6. Aprende algunas frases locales</a>
                    </li>
                    <li>
                        <a class="index-link" href="#title7">7. Viaja ligero</a>
                    </li>
                    <li>
                        <a class="index-link" href="#title8">8. Mantén la mente abierta</a>
                    </li>
                    <li>
                        <a class="index-link" href="#title9">9. Interactúa con locales</a>
                    </li>
                    <li>
                        <a class="index-link" href="#title10">10. Haz copias de seguridad de tus fotos y documentos</a>
                    </li>
                </ol>
            </div>

            <h2 class="tip-title" id="title1">1. Investiga y planifica</h2>
            <img src="" alt="" class="tip-image">
            <p class="paragraph"></p>
            <h2 class="tip-title" id="title2">2. Packing inteligente</h2>
            <img src="" alt="" class="tip-image">
            <p class="paragraph"></p>
            <h2 class="tip-title" id="title3">3. Documentos importantes</h2>
            <img src="" alt="" class="tip-image">
            <p class="paragraph"></p>
            <h2 class="tip-title" id="title4">4. Seguro de viaje</h2>
            <img src="" alt="" class="tip-image">
            <p class="paragraph"></p>
            <h2 class="tip-title" id="title5">5. Presupuesto adecuado</h2>
            <img src="" alt="" class="tip-image">
            <p class="paragraph"></p>
            <h2 class="tip-title" id="title6">6. Aprende algunas frases locales</h2>
            <img src="" alt="" class="tip-image">
            <p class="paragraph"></p>
            <h2 class="tip-title" id="title7">7. Viaja ligero</h2>
            <img src="" alt="" class="tip-image">
            <p class="paragraph"></p>
            <h2 class="tip-title" id="title8">8. Mantén la mente abierta</h2>
            <img src="" alt="" class="tip-image">
            <p class="paragraph"></p>
            <h2 class="tip-title" id="title9">9. Interactúa con locales</h2>
            <img src="" alt="" class="tip-image">
            <p class="paragraph"></p>
            <h2 class="tip-title" id="title10">10. Haz copias de seguridad de tus fotos y documentos</h2>
            <img src="" alt="" class="tip-image">
            <p class="paragraph"></p>
        </section>
    </main>
</template>

<script>
import NavigationTopBar from '../components/NavigationTopBar.vue';

export default {
    name: 'TipsPage',
    components: { NavigationTopBar },
}
</script>

<style>
.main {
    background-color: #ffffff;
    width: 100%;
    min-height: 100vh;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tips {
    max-width: 960px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.tips-title {
    color: #00307A;
    text-shadow: 0px 4px 4px #00000040;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.tip-title {
    color: #3E86F5;
    text-shadow: 0px 4px 4px #00000040;
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.header-image,
.tip-image {
    border-radius: 1.5rem;
    box-shadow: 5px 5px 10px #3E86F5;
    margin: 1rem 0;
    width: 100%;
}

.paragraph {
    color: #00307A;
    text-shadow: 0px 4px 4px #00000040;
    font-size: 1rem;

    & b {
        font-weight: 700;
    }
}

.index-container {
    background-color: #ffffff;
    border: 1px solid #3E86F5;
    border-radius: 15px;
    display: table;
    margin: 0 auto 40px;
    max-width: 680px;
    padding: 16px;
    position: relative;
    width: 100%;
    padding: 1.5rem;
}

.index-title {
    color: #3E86F5;
    text-shadow: 0px 4px 4px #00000040;
    font-size: 25px;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 0.75rem;
}

.index-link {
    color: #3E86F5;
    text-shadow: 0px 4px 4px #00000040;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    text-decoration: none;
}
</style>