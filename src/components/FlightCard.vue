<template>
  <div class="actual-info-container">
    <p>Origen: {{ departureIata }}</p>
    <p>Destino: {{ arrivalIata }}</p>
    <p>Fecha: {{ departureDate }}</p>
    <p>Nº de Adultos: {{ adult }}</p>
  </div>
  <div class="error-msg" v-if="flightOffers === 0">
    <p>NO SE HAN ENCONTRADO VUELOS</p>
  </div>
  <div class="container" v-for="Fligth in flightOffers.data" :key="Fligth">
    <div class="airline-logo">
      <h1 class="ariline-title">
        iata de aerolinea: {{ Fligth.validatingAirlineCodes[0] }}
      </h1>
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
        return `La duración es de ${hours}H y ${minutes}M`;
      } else if (hours > 0) {
        return `La duración es de ${hours}H`;
      } else if (minutes > 0) {
        return `La duración es de ${minutes}M`;
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
  color: black;
}

.airline-logo {
  width: 30%;
  border-radius: 50px;
  margin: 15px;
}

.airline-logo img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}

.ariline-title {
  color: #002148;
}

.info {
  display: flex;
  width: 70%;
  flex-direction: column;
}

.flight-segments {
  display: flex;
  align-items: center;
  height: 100%;
}

.departures-arrivals {
  width: 100%;
  height: 50%;
  margin: 4px;
  display: flex;

  & .hour {
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
</style>
