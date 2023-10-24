<template>
    <div class="nav">
        <h3 class="nav-tittle">Millones de Vuelos al mejor precio</h3>
        <div class="nav-form">
            <div class="nav-options">
                <div class="option-wrapper">
                    <label class="nav-info">Desde {{ departureIata }}</label>
                    <input v-debounce:500ms="getSuggestion" class="nav-description" placeholder="País, ciudad o aeropuerto"
                        @input="updateFlight" @focus="toggleDropdownLocation" :value="departureIata">

                    <DropDownLocation :isVisible="showDropDownLocation" :suggestion=suggestionDeparture
                        :setIsVisible=setDropDownLocationVisibility />
                </div>
                <div class="option-wrapper">
                    <label class="nav-info">A {{ arrivalIata }}</label>
                    <input v-debounce:500ms="getSuggestionArrival" class="nav-description"
                        placeholder="País, ciudad o aeropuerto" @input="uptdateArrivalIata" @focus="toggleDropdownArrival"
                        :value="arrivalIata">
                    <DropDownArrival :isVisible="showDropDownArrival" :suggestion=suggestionArrival
                        :setIsVisible=setDropDownArrivalVisibility />
                </div>


                <div class=" option-wrapper">
                    <label class="nav-info">Ida {{ departureDate }}</label>
                    <input class="nav-description" type="date" @input="updateDepartureDate">
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
                    <DropDown :isVisible=isDropdownOpen :adultCount=adult :incrementAdults=incrementAdultCount
                        :decrementAdults=decrementAdults :onReadyClick=handleReadyClick />
                </div>
            </div>
            <router-link to="/flights"><button class="search" @click="getData">Buscar</button></router-link>

        </div>
    </div>
</template>

<script>
import { suggestLocation } from "../../stores/modules/getFlights.js"
import { flightSearchStore } from "../../stores/counter.js"
import { mapActions, mapState } from "pinia";
import DropDown from "./components/DropDown/DropDown.vue"
import DropDownLocation from "./components/DropDown/DropDownLocation.vue";
import { vue3Debounce } from 'vue-debounce'
import DropDownArrival from "./components/DropDown/DropDownArrival.vue"
export default {
    components: {
        DropDown,
        DropDownLocation,
        DropDownArrival
    },
    data() {
        return {

            isDropdownOpen: false,
            isDropdownOpenLocation: false,
            isDropdownOpenArrival: false,
            dataFromDropDown: "",
            FlightsOffers: "",
            AirlineLogo: [],
            suggestionDeparture: {},
            suggestionArrival: {}
        };
    },
    directives: {
        debounce: vue3Debounce({})
    },
    computed: {
        ...mapState(flightSearchStore, [
            'departureIata',
            'arrivalIata',
            'departureDate',
            'adult',
        ]),
        showDropDownLocation() {
            return this.isDropdownOpenLocation && !!this.departureIata.length
        },
        showDropDownArrival() {
            return this.isDropdownOpenArrival && !!this.arrivalIata.length
        }
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
        receiveDataFromDropDown(data) {
            this.dataFromDropDown = data;
        },
        handleReadyClick() {
            this.isDropdownOpen = false;
        },
        // end of DropDown functions
        async getSuggestion() {
            this.suggestionDeparture = this.departureIata.length && await suggestLocation(this.departureIata)
            console.log('sugestionDepart', this.suggestionDeparture)
        },
        async getSuggestionArrival() {
            this.suggestionArrival = this.departureIata.length && await suggestLocation(this.arrivalIata)
        },
        toggleDropdownLocation() {
            this.isDropdownOpenLocation = !this.isDropdownOpenLocation;
        },
        setDropDownLocationVisibility(newVisibility) {
            this.isDropdownOpenLocation = newVisibility
        },
        toggleDropdownArrival() {
            this.isDropdownOpenArrival = !this.isDropdownOpenArrival;
        },
        setDropDownArrivalVisibility(newVisibility) {
            this.isDropdownOpenArrival = newVisibility
        },
        ...mapActions(flightSearchStore, ['setdepartureIata', 'setarrivalIata', 'setdepartureDate', 'incrementAdultCount', 'decrementAdults']),
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