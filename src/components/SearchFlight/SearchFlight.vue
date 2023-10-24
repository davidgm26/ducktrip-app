<template>
    <div class="nav">
        <h3 class="nav-tittle">Millones de Vuelos, Hoteles al mejor precio</h3>
        <div class="buttons-container">
            <button class="nav-button">Vuelos</button>
            <button class="nav-button">Hoteles</button>
            <button class="nav-button">Tiempo</button>
        </div>
        <div class="nav-form">
            <div class="nav-options">
                <div class="option-wrapper">
                    <label class="nav-info">Desde {{ departureIata }}</label>
                    <input class="nav-description" placeholder="País, ciudad o aeropuerto" @input="departureCheck"
                        @focus="toggleDropdownLocation" :value="departureIata">
                    {{ OriginIataCity }}

                    <DropDownLocation :isVisible=isDropdownOpenLocation :suggestion=suggestion />
                </div>
                <div class="option-wrapper">
                    <label class="nav-info">A {{ arrivalIata }}</label>
                    <input class="nav-description" placeholder="País, ciudad o aeropuerto" v-model="DestinyIataCity"
                        @input="uptdateArrivalIata">
                </div>
                <div class=" option-wrapper">
                    <label class="nav-info">Ida {{ departureDate }}</label>
                    <input class="nav-description" type="date" v-model="OriginDate" @input="updateDepartureDate">
                    {{ OriginDate }}
                </div>
                <div class="option-wrapper">
                    <label class="nav-info">Vuelta</label>
                    <input class="nav-description" type="date">
                </div>
                <div class="option-wrapper">

                    <label class="nav-info" @click="toggleDropdown">Viajeros</label>
                    <span class="nav-description" @click="toggleDropdown">
                        {{ adult }} adultos
                    </span>
                    <DropDown :isVisible=isDropdownOpen :adultCount=adultCount :incrementAdults=incrementAdults
                        :decrementAdults=decrementAdults :onReadyClick=handleReadyClick />
                </div>
            </div>
            <button class="search" @click="getData">Buscar</button>
        </div>
    </div>
</template>

<script>
import { suggestLocation } from "../../stores/modules/getFlights.js"
import { flightSearchStore } from "../../stores/counter.js"
import { mapActions, mapState } from "pinia";
import DropDown from "./components/DropDown/DropDown.vue"
import DropDownLocation from "./components/DropDown/DropDownLocation.vue";
export default {
    components: {
        DropDown,
        DropDownLocation
    },
    data() {
        return {

            isDropdownOpen: false,
            isDropdownOpenLocation: false,
            dataFromDropDown: "",
            adultCount: 1,
            OriginIataCity: "",
            DestinyIataCity: "",
            FlightsOffers: "",
            AirlineLogo: [],
            OriginDate: "",
            DestinyDate: "",
            suggestion: {},
        };
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
        updateFlight(e) {
            this.setdepartureIata(e.target.value)
        },
        uptdateArrivalIata(e) {
            this.setarrivalIata(e.target.value);
        },
        updateDepartureDate(e) {
            this.setdepartureDate(e.target.value);
        },
        // DropDown functions
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        toggleDropdownLocation() {
            this.isDropdownOpenLocation = !this.isDropdownOpenLocation;
        },
        incrementAdults() {
            this.adultCount++;
            this.setadultCount(this.adultCount)
        },
        decrementAdults() {
            this.adultCount = Math.max(this.adultCount - 1, 1);
            this.setadultCount(this.adultCount)
        },
        receiveDataFromDropDown(data) {
            this.dataFromDropDown = data;
        },
        handleReadyClick() {
            this.isDropdownOpen = false;
        },
        // end of DropDown functions
        async getSuggestion() {
            this.suggestion = await suggestLocation(this.departureIata)
        },
        departureCheck(e) {
            this.updateFlight(e)
            this.getSuggestion()
        },
        ...mapActions(flightSearchStore, ['setdepartureIata', 'setarrivalIata', 'setdepartureDate', 'setadultCount']),
    }
}

</script>

<style>
.nav {
    background-color: #1b55b0;
    width: 100%;
    padding: 1rem 2rem;
}

.nav-tittle {
    color: #FFFFFF;
    text-shadow: 0px 4px 4px #00000040;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 2rem;
}

.buttons-container {
    display: flex;
    gap: 0.5rem;

}

.nav-button {
    border-radius: 10px;
    border: none;
    background: #00214880;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.25rem 1rem;
}

.nav-form {
    display: flex;
    gap: 1rem;
    padding-top: 0.5rem;
}

.nav-options {
    display: flex;
    gap: 0.25rem;
}


.option-wrapper {
    background-color: #ffffffd4;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    gap: 0.25rem;
    position: relative;
    min-width: 8rem;
}

.option-wrapper:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
}

.option-wrapper:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
}

.nav-info {
    color: #393838;
    text-shadow: 0px 4px 4px #00000040;
}

.nav-description {
    background-color: transparent;
    border: none;
    color: #393838;
    font-size: 0.9rem;
    line-height: 1rem;
}

.search {
    border-radius: 10px;
    background: rgba(0, 33, 72, 0.50);
    color: #FFFFFF;
    border: none;
    font-size: 26px;
    padding: 0 1rem;
}


@media (max-width: 1028px) {
    .nav-options {
        flex-direction: column;
    }

    .nav-form {
        flex-direction: column;
    }

    .option-wrapper:first-child {
        border-radius: 0.5rem 0.5rem 0 0;
    }

    .option-wrapper:last-child {
        border-radius: 0 0 0.5rem 0.5rem;
    }
}
</style>