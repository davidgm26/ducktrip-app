<template>
    <div class="container">
        <div class="img">
            <img src="https://www.consumoteca.com/wp-content/uploads/Vueling-logo.jpg" alt="" srcset="">
        </div>
        <div class="info">
            <div class="departures-arrivals">
                <img src="../assets/icons/departures.svg" alt="" srcset="">
                <div class="hour">
                    18:00
                </div>
                <div class="airport-name">
                    Aeropuerto Internacional de Sevilla-San Pablo
                </div>

            </div>
            <div class="departures-arrivals">
                <img src="../assets/icons/arrivals.svg" alt="" srcset="">
                <div class="hour">
                    18:00
                </div>
                <div class="airport-name">
                    Aeropuerto Internacional de Sevilla-San Pablo
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getFlights } from '../stores/modules/getFlights.js'
import { getAirlineLogo } from '../stores/modules/getAirlineLogo.js'


export default {
    name: "FlightCard",

    data() {
        return {
            OriginIataCity: "MAD",
            DestinyIataCity: "SEV",
            FlightsOffers: "",
            AirlineLogo: []
        }
    },
    methods: {
        async getData() {
            this.FlightsOffers = await getFlights(this.OriginIataCity, this.DestinyIataCity)
            console.log(this.FlightsOffers);

            this.AirlineLogo = await Promise.all(this.FlightsOffers.data.map(async (flight) => {
                const airlineCode = flight.validatingAirlineCodes[0]
                console.log(flight.validatingAirlineCodes[0]);
                const airlineInfo = await getAirlineLogo(airlineCode)
                if (airlineInfo && airlineInfo.length > 0 && airlineInfo[0].logo_url) {
                    return airlineInfo[0].logo_url
                }
            }));
            console.log(this.AirlineLogo);
        }
    },
}
</script>
<style scoped>
.container {
    width: 800px;
    background-color: #D8E7FD;
    height: 200px;
    border-radius: 50px;
    margin: auto;
    display: flex;
    margin-top: 16px;
}

.img {
    width: 30%;
    background-color: red;
    border-radius: 50px;
    margin: 15px;
}

.img img {
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