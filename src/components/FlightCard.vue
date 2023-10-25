<template>
  <div class="actual-info-container">
    <p>Origen: {{ departureIata }}</p>
    <p>Destino: {{ arrivalIata }}</p>
    <p>Fecha: {{ departureDate }}</p>
    <p>Nº de Adultos: {{ adult }}</p>
  </div>
  <div class="error-msg" v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
  <div class="container" v-for="Fligth in flightOffers.data" :key="Fligth">
    <!-- <div class="flight-title-container">
      <h1 class="flight-title">Vuelo nº {{ Fligth.id }}</h1>
    </div> -->

    <div class="airline-logo">
      <h1 class="ariline-title">
        {{
          flightOffers.dictionaries.carriers[Fligth.validatingAirlineCodes[0]]
        }}
      </h1>
      <div class="divisor-line"></div>
      <img
        :src="`https://daisycon.io/images/airline/?width=900&iata=${Fligth.validatingAirlineCodes[0]}`"
        alt=""
        srcset=""
      />
    </div>
    <div class="info">
      <div class="flight-duration">
        <h1>
          {{ formatDuration(Fligth.itineraries[0].duration) }}
        </h1>
        <div class="divisor-line"></div>
      </div>
      <div
        class="flight-segments"
        v-for="segment in Fligth.itineraries[0].segments"
        :key="segment.number"
      >
        <div class="departures-arrivals">
          <img src="../assets/icons/departures.svg" alt="" srcset="" />
          <div class="hour">
            {{ formatDateHour(segment.departure.at) }}
          </div>
          <div class="airport-name">
            {{ segment.departure.iataCode }}
          </div>
        </div>
        <div class="departures-arrivals">
          <img src="../assets/icons/arrivals.svg" alt="" srcset="" />
          <div class="hour">
            {{ formatDateHour(segment.arrival.at) }}
          </div>
          <div class="airport-name">
            {{ segment.arrival.iataCode }}
          </div>
        </div>
      </div>
      <div class="divisor-line"></div>
      <div v-if="Fligth.itineraries[0].segments.length > 1">
        <p class="non-stop">VUELO CON ESCALA</p>
      </div>
      <div class="final-price">
        <p>
          Total:
          {{ Fligth.price.total }}
          {{ getSymbolForCurrency(Fligth.price.currency) }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { flightSearchStore } from "../stores/counter";
import { mapState } from "pinia";

export default {
  name: "FlightCard",
  computed: {
    ...mapState(flightSearchStore, [
      "departureIata",
      "arrivalIata",
      "departureDate",
      "adult",
      "flightOffers",
      "errorMessage",
    ]),
  },
  methods: {
    formatDuration(durationString) {
      const regex = /PT(\d*H)?(\d*M)?/;
      const match = durationString.match(regex);
      let hours = 0;
      let minutes = 0;
      if (match) {
        if (match[1]) {
          hours = parseInt(match[1], 10);
        }
        if (match[2]) {
          minutes = parseInt(match[2], 10);
        }
      }
      if (hours > 0 && minutes > 0) {
        return `Duración: ${hours}H y ${minutes}M`;
      } else if (hours > 0) {
        return `Duración: ${hours}H`;
      } else if (minutes > 0) {
        return `Duración: ${minutes}M`;
      } else {
        return "Duración desconocida";
      }
    },
    formatDateHour(datehour) {
      return datehour.replace("T", " ");
    },
    getSymbolForCurrency(Code) {
      const currencyCode = {
        USD: "$",
        EUR: "€",
        JPY: "¥",
        GBP: "£",
        CAD: "CA$",
        AUD: "A$",
      };
      return currencyCode[Code] || "";
    },
  },
};
</script>
<style scoped>
.container {
  width: 40%;
  height: 5%;
  background-color: #d8e7fd;
  color: black;
  border-radius: 50px;
  margin: auto;
  display: flex;
  margin-top: 3rem;
  flex-direction: row;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 25px #3e86f5;
    cursor: pointer;
  }
}

.actual-info-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #002148;
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 10;

  & p {
    display: flex;
    justify-content: center;
    background-color: #3e86f5;
    width: 9rem;
    border-radius: 4px;
  }
}

.error-msg {
  width: 100%;
  height: 17vw;
  color: black;
  display: flex;
  justify-content: center;
  & p {
    font-size: 3rem;
    animation: horizontal-shaking 0.35s;
  }
}

.airline-logo {
  display: flex;
  flex-direction: row;
  width: 30%;
  border-radius: 50px;
  margin: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.airline-logo img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}

.ariline-title {
  color: #002148;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info {
  display: flex;
  flex-direction: column;
  margin: 15px;
}

.flight-duration {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & h1 {
    text-align: center;
    padding-inline: 4px;
    border-radius: 0.5rem;
    width: 35%;
    color: white;
    background-color: #3e86f5;
  }
}

.flight-segments {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.departures-arrivals {
  width: 100%;
  height: 50%;
  margin: 4px;
  display: flex;

  & .hour {
    width: 36%;
    margin: 23px;
    display: flex;
    align-items: center;
  }

  & img {
    width: 10%;
  }

  & .airport-name {
    margin: 23px;
    display: flex;
    align-items: center;
  }
}

.non-stop {
  color: red;
}
.final-price {
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-end;
  & p {
    text-align: center;
    border-radius: 10px;
    padding: 3px;
    width: 24%;
    color: white;
    background-color: #002148;
  }
}

.divisor-line {
  margin-top: 2px;
  height: 0%;
  width: 100%;
  border: 1px solid transparent; /* Establece el borde inicialmente como transparente */
  border-image: linear-gradient(90deg, #d8e7fd 0%, #002148 50%, #d8e7fd 100%) 1; /* Define el gradiente como imagen y lo aplica al borde */
  border-image-slice: 1; /* Esto define cómo se corta la imagen, 1 significa que se usa la imagen completa */
  border-image-width: 1; /* Ancho del borde generado por la imagen, en este caso, 1px */
  border-image-outset: 0; /* Esto controla el espacio entre el borde y el contenido (en este caso, 0) */
  border-image-repeat: stretch; /* Controla cómo se repite la imagen a lo largo del borde */
}

@keyframes horizontal-shaking {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

@media (max-width: 1444px) {
  .error-msg {
    & p {
      font-size: 1.5rem;
    }
  }
  .container {
    flex-direction: column;
    width: 50%;
    align-items: center;
  }
  .airline-logo {
    width: 60%;
  }
  .flight-duration {
    & h1 {
      width: 45%;
    }
  }
}
@media (max-width: 425px) {
  .error-msg {
    & p {
      font-size: 1rem;
    }
  }
  .actual-info-container {
    & p {
      height: 32%;
      width: 22%;
      text-align: center;
      font-size: 0.6rem;
    }
  }
  .container {
    flex-direction: column;
    width: 75%;
    align-items: center;
    height: 7%;
  }
  .flight-segments {
    flex-direction: column;
    padding: 8px;
  }
  .flight-duration {
    & h1 {
      width: 75%;
    }
  }
  .info {
    width: 100%;
  }
  .airline-logo {
    width: 60%;
  }
  .non-stop,
  .final-price {
    padding-left: 2rem;
    margin-right: 0.5rem;
    & p {
      width: 45%;
    }
  }
}
</style>
