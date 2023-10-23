<template>
    Origen: {{ departureIata }} || Destino: {{ arrivalIata }} || Fecha de salida: {{ departureDate }}
    <div class="container" v-for="(Fligths, index) in FlightsOffers.data" :key="Fligths">
        <div class="airline-logo">
            iata de aerolinea: {{ FlightsOffers.data[index].validatingAirlineCodes[0] }}
            <img :src="`https://daisycon.io/images/airline/?width=900&iata=${FlightsOffers.data[index].validatingAirlineCodes[0]}`"
                alt="" srcset="">
            <!-- src="https://www.consumoteca.com/wp-content/uploads/Vueling-logo.jpg" -->
        </div>
        <div class="info">
            <div class="flight-duration">
                <h1>
                    {{ formatDuration(FlightsOffers.data[index].itineraries[0].duration) }}
                </h1>
            </div>
            <div class="departures-arrivals">
                <img src="../assets/icons/departures.svg" alt="" srcset="">
                <div class="hour">
                    {{ formatDateHour(FlightsOffers.data[index].itineraries[0].segments[0].arrival.at) }}
                </div>
                <div class="airport-name">
                    {{ FlightsOffers.data[index].itineraries[0].segments[0].arrival.iataCode }}
                </div>

            </div>
            <div class="departures-arrivals">
                <img src="../assets/icons/arrivals.svg" alt="" srcset="">
                <div class="hour">
                    {{ formatDateHour(FlightsOffers.data[index].itineraries[0].segments[0].departure.at) }}
                </div>
                <div class="airport-name">
                    {{ FlightsOffers.data[index].itineraries[0].segments[0].departure.iataCode }}
                </div>
            </div>
            <div class="final-price">
                <p>Total: {{ `${FlightsOffers.data[index].price.total} ${FlightsOffers.data[index].price.currency}` }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { getFlights } from '../stores/modules/getFlights.js'
import { flightSearchStore } from '../stores/counter'
import { mapState } from 'pinia'

export default {
    name: "FlightCard",

    data() {
        return {
            FlightsOffers: "",
            AirlineLogo: [],
            getFlightsOffers: {}
        }
    },

    computed: {
        ...mapState(flightSearchStore, [
            'departureIata',
            'arrivalIata',
            'departureDate',
            'adult',
        ])
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
            // Reemplazar "T" por un espacio
            return datehour.replace("T", " ");
        },
    },

    async mounted() {
        this.FlightsOffers = await getFlights(this.departureIata, this.arrivalIata, this.departureDate, this.adult)
        localStorage.setItem('FlightsOffers', JSON.stringify(this.FlightsOffers))
        this.getFlightsOffers = localStorage.getItem('FlightsOffers')

    }

}
</script>
<style scoped>
.container {
    width: 80%;
    height: 5%;
    background-color: #D8E7FD;
    border-radius: 50px;
    margin: auto;
    display: flex;
    margin-top: 16px;
    flex-direction: row;
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

.info {
    display: flex;
    width: 70%;
    flex-direction: column;
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
</style>