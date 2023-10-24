<template>
    <NavigationTopBar />
    <ProgressBar />
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
            <img src="@/assets/images/tips-image1.jpg" alt="Investigar y planiificar el viaje" class="tip-image">
            <p class="paragraph">Investiga sobre tu <b>destino</b>, su <b>cultura</b>, <b>costumbres</b> y
                <b>atracciones</b> antes de
                viajar. Planificar con antelación te ayudará a sacar el máximo provecho de tu viaje.
            </p>
            <p class="paragraph">Además, te permiten <b>anticipar</b> posibles desafíos y te brindan la confianza
                necesaria para disfrutar al máximo de tu aventura sin preocupaciones innecesarias.
            </p>
            <h2 class="tip-title" id="title2">2. Packing inteligente</h2>
            <img src="@/assets/images/tips-image2.jpg" alt="Hacer la maleta de forma inteligente" class="tip-image">
            <p class="paragraph">Haz tu maleta de forma inteligente, lleva <b>solo lo necesario</b> y elige <b>ropa
                    versátil</b>.
                No
                olvides
                elementos esenciales como adaptadores de corriente y artículos de cuidado personal.</p>
            <p class="paragraph">Para ello, te recomendamos hacer una <b>lista</b> como la siguiente que te ayude a evitar
                olvidos
                de último minuto:</p>

            <div class="list-container">
                <ul>
                    <h4 class="list-title">Fin de semana:</h4>
                    <li v-for="(item, index) in listaMaleta" :key="index">
                        <label class="list-item">
                            <input type="checkbox" v-model="item.checked">
                            <span :class="{ checked: item.checked }" @click="toggleItem(item)">{{ item.name }}</span>
                        </label>
                    </li>
                </ul>
            </div>

            <h2 class="tip-title" id="title3">3. Documentos importantes</h2>
            <img src="@/assets/images/tips-image3.jpg" alt="Llevar los documentos necesarios" class="tip-image">
            <p class="paragraph">Asegúrate de llevar contigo todos los documentos necesarios, como <b>pasaporte</b>,
                <b>DNI</b>, <b>visas</b>,
                <b>tickets</b> y <b>copias de seguridad electrónicas</b> de los mismos.
            </p>
            <h2 class="tip-title" id="title4">4. Seguro de viaje</h2>
            <img src="@/assets/images/tips-image4.jpg" alt="Obtener un seguro de viaje" class="tip-image">
            <p class="paragraph">Considera la posibilidad de obtener un seguro de viaje que cubra <b>emergencias
                    médicas</b>,
                <b>cancelaciones</b> y <b>pérdida de equipaje</b>. Proporciona tranquilidad en caso de imprevistos.
            </p>
            <h2 class="tip-title" id="title5">5. Presupuesto adecuado</h2>
            <img src="@/assets/images/tips-image5.jpg" alt="Establecer un presupuesto" class="tip-image">
            <p class="paragraph">Establece un <b>presupuesto</b> para tu viaje y trata de ceñirte a él. Lleva un
                <b>registro</b> de
                tus
                gastos para evitar sorpresas desagradables.
            </p>
            <p class="paragraph">Te aconsejamos <b>tener en cuenta</b> lo siguiente:
            <ul class="budget-list">
                <li class="budget-item">• Establecer un presupuesto inicial</li>
                <li class="budget-item">• Seguimiento de gastos</li>
                <li class="budget-item">• Planificación de actividades</li>
                <li class="budget-item">• Considera gastos ocultos</li>
                <li class="budget-item">• Reserva con antelación</li>
                <li class="budget-item">• Efectivo y tarjetas</li>
                <li class="budget-item">• Fondo de contingencia en caso de emergencias</li>
                <li class="budget-item">• Conversión de divisas</li>
            </ul>>
            </p>
            <h2 class="tip-title" id="title6">6. Aprende algunas frases locales</h2>
            <img src="@/assets/images/tips-image6.jpg" alt="Aprender frases básicas en el idioma local" class="tip-image">
            <p class="paragraph">Aprender algunas <b>frases básicas</b> en el <b>idioma local</b> puede facilitar la
                comunicación y
                mostrar respeto por la cultura local.</p>
            <h2 class="tip-title" id="title7">7. Viaja ligero</h2>
            <img src="@/assets/images/tips-image7.jpg" alt="Llevar una mochila o maleta pequeña" class="tip-image">
            <p class="paragraph">Lleva una <b>mochila pequeña</b> o <b>maleta de mano</b> para evitar cargas innecesarias y
                agilizar el
                proceso de registro y desplazamiento.</p>
            <h2 class="tip-title" id="title8">8. Mantén la mente abierta</h2>
            <img src="@/assets/images/tips-image8.jpg" alt="Mantener la mente abierta" class="tip-image">
            <p class="paragraph">Sé <b>flexible</b> y dispuesto a <b>probar cosas nuevas</b>. Los viajes ofrecen
                oportunidades únicas para
                experimentar culturas diferentes.</p>
            <h2 class="tip-title" id="title9">9. Interactúa con locales</h2>
            <img src="@/assets/images/tips-image9.jpg" alt="Interactuar con la gente local" class="tip-image">
            <p class="paragraph">Conoce a la <b>gente local</b> y haz amigos. Ellos pueden proporcionarte <b>consejos
                    valiosos y
                    enriquecer tu experiencia</b>.</p>
            <h2 class="tip-title" id="title10">10. Haz copias de seguridad de tus fotos y documentos</h2>
            <img src="@/assets/images/tips-image10.jpg" alt="Utilizar servicios de almacenamiento en la nube"
                class="tip-image">
            <p class="paragraph">Utiliza <b>servicios de almacenamiento en la nube</b> para respaldar tus fotos y documentos
                importantes, como pasaportes y reservas de hotel, en caso de pérdida o robo.</p>
        </section>
        <ButtonToTop />
    </main>
    <FooterSection />
</template>

<script>
import NavigationTopBar from '../components/NavigationTopBar.vue';
import ProgressBar from '../components/ProgressBar.vue';
import ButtonToTop from '../components/ButtonToTop.vue';
import FooterSection from '../components/FooterSection.vue';

export default {
    name: 'TipsPage',
    components: { NavigationTopBar, ProgressBar, ButtonToTop, FooterSection },
    data() {
        return {
            listaMaleta: [
                { name: "Ropa, ropa interior y calzado", checked: false },
                { name: "Bolsa de aseo", checked: false },
                { name: "Documento de identificación", checked: false },
                { name: "Dinero en efectivo y tarjetas", checked: false },
                { name: "Medicamentos y paraguas", checked: false },
                { name: "Cargador teléfono y adaptador", checked: false },
            ],
        };
    },
    methods: {
        toggleItem(item) {
            item.checked = !item.checked;
        },
    },
};
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

.header-image {
    border-radius: 1.5rem;
    box-shadow: 5px 5px 10px #3E86F5;
    margin: 1rem 0;
    width: 100%;
}

.tip-image {
    border-radius: 1.5rem;
    box-shadow: 5px 5px 10px #3E86F5;
    margin: 1rem 0;
    max-width: 600px;
    width: 100%;
}

.paragraph {
    color: #00307A;
    text-shadow: 0px 4px 4px #00000040;
    font-size: 1.2rem;
    padding: 0 2rem;

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

.list-container {
    width: 100%;
    background-image: url(@/assets/images/maleta.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    flex: 1 1 100%;
    display: table;
    margin: 0 auto 40px;
    max-width: 700px;
    padding: 4rem 2rem 2rem 2rem;
    position: relative;
    width: 100%;
}

.list-title {
    display: flex;
    justify-content: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px #00000040;
    font-size: 1rem;
    font-weight: 600;
}

.list-item {
    display: flex;
    justify-content: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px #00000040;
    font-size: 0.9rem;
    gap: 0.5rem;
}

.checked {
    text-decoration: line-through;
}

.budget-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.budget-item {
    display: flex;
    justify-content: center;
    background-color: #3E86F5;
    color: #ffffff;
    text-shadow: 0px 4px 4px #00000040;
    font-size: 1.1rem;
    gap: 0.5rem;
    border: 1px solid #3E86F5;
    border-radius: 15px;
    padding: 0.5rem;
}
</style>