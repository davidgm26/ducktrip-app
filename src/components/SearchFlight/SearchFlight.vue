<template>
  <div class="nav">
    <h3 class="nav-tittle">Millones de Vuelos al mejor precio</h3>
    <div class="nav-form">
      <div class="nav-options">
        <div class="option-wrapper">
          <label class="nav-info">Desde {{ departureIata }}</label>
          <input
            v-debounce:500ms="getSuggestion"
            class="nav-description"
            placeholder="País, ciudad o aeropuerto"
            @input="updateFlight"
            @focus="toggleDropdownLocation"
            :value="departureIata"
          />
          <DropDownLocation
            :isVisible="showDropDownLocation"
            :suggestion="suggestionDeparture"
            :setIsVisible="setDropDownLocationVisibility"
          />
        </div>
        <div class="option-wrapper">
          <label class="nav-info">A {{ arrivalIata }}</label>
          <input
            v-debounce:500ms="getSuggestionArrival"
            class="nav-description"
            placeholder="País, ciudad o aeropuerto"
            @input="uptdateArrivalIata"
            @focus="toggleDropdownArrival"
            :value="arrivalIata"
          />
          <DropDownArrival
            :isVisible="showDropDownArrival"
            :suggestion="suggestionArrival"
            :setIsVisible="setDropDownArrivalVisibility"
          />
        </div>
        <div class="option-wrapper">
          <label class="nav-info"
            >Ida {{ prevDate ? formatDate(prevDate) : "" }}</label
          >
          <VueDatePicker
            v-model="prevDate"
            :format="formatDate"
          ></VueDatePicker>
        </div>
        <!-- 
                    Posible feed
                    <div class="option-wrapper">
                    <label class="nav-info">Vuelta</label>
                    <input class="nav-description" type="date">
                </div> -->
        <div class="option-wrapper">
          <label class="nav-info" @click="toggleDropdown">Viajeros</label>
          <span class="nav-description" @click="toggleDropdown">
            {{ adult }} adultos
          </span>
          <DropDown
            :isVisible="isDropdownOpen"
            :adultCount="adult"
            :incrementAdults="incrementAdultCount"
            :decrementAdults="decrementAdults"
            :onReadyClick="handleReadyClick"
          />
        </div>
      </div>
      <router-link class="search" to="/flights" @click="fetchFlightOffers"
        >Buscar</router-link
      >
    </div>
  </div>
</template>

<script>
import { suggestLocation } from "../../stores/modules/getFlights.js";
import { flightSearchStore } from "../../stores/counter.js";
import { mapActions, mapState } from "pinia";
import DropDown from "./components/DropDown/DropDown.vue";
import DropDownLocation from "./components/DropDown/DropDownLocation.vue";
import { vue3Debounce } from "vue-debounce";
import DropDownArrival from "./components/DropDown/DropDownArrival.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { getFlights } from "../../stores/modules/getFlights.js";

export default {
  components: {
    DropDown,
    DropDownLocation,
    DropDownArrival,
    VueDatePicker,
  },
  data() {
    return {
      isDropdownOpen: false,
      isDropdownOpenLocation: false,
      isDropdownOpenArrival: false,
      dataFromDropDown: "",
      suggestionDeparture: {},
      suggestionArrival: {},
      prevDate: "",
    };
  },
  directives: {
    debounce: vue3Debounce({}),
  },
  computed: {
    ...mapState(flightSearchStore, [
      "departureIata",
      "arrivalIata",
      "departureDate",
      "adult",
    ]),
    showDropDownLocation() {
      return this.isDropdownOpenLocation && !!this.departureIata.length;
    },
    showDropDownArrival() {
      return this.isDropdownOpenArrival && !!this.arrivalIata.length;
    },
  },
  methods: {
    updateFlight(e) {
      this.setdepartureIata(e.target.value);
    },
    uptdateArrivalIata(e) {
      this.setarrivalIata(e.target.value);
    },
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
      this.suggestionDeparture =
        this.departureIata.length &&
        (await suggestLocation(this.departureIata));
      console.log("sugestionDepart", this.suggestionDeparture);
    },
    async getSuggestionArrival() {
      this.suggestionArrival =
        this.departureIata.length && (await suggestLocation(this.arrivalIata));
    },
    toggleDropdownLocation() {
      this.isDropdownOpenLocation = !this.isDropdownOpenLocation;
    },
    setDropDownLocationVisibility(newVisibility) {
      this.isDropdownOpenLocation = newVisibility;
    },
    toggleDropdownArrival() {
      this.isDropdownOpenArrival = !this.isDropdownOpenArrival;
    },
    setDropDownArrivalVisibility(newVisibility) {
      this.isDropdownOpenArrival = newVisibility;
    },
    formatDate(date) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formatedDate = `${year}-${month}-${day}`;
      this.setdepartureDate(formatedDate);
      return formatedDate;
    },
    async fetchFlightOffers() {
      const data = await getFlights(
        this.departureIata,
        this.arrivalIata,
        this.departureDate,
        this.adult
      );
      this.setFlightOffers(data);
    },
    ...mapActions(flightSearchStore, [
      "setdepartureIata",
      "setarrivalIata",
      "setdepartureDate",
      "incrementAdultCount",
      "decrementAdults",
      "setFlightOffers",
    ]),
  },
};
</script>

<style>
:root {
  --dp-border-radius: 0px;
  --dp-background-color: #d9e2f2;
}

.dp__theme_light {
}

.nav {
  background-color: #1b55b0;
  width: 100%;
  padding: 1rem 2rem;
}

.nav-tittle {
  color: #ffffff;
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
  color: #ffffff;
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

.search {
  border-radius: 10px;
  background: rgb(0, 32, 72);
  color: #ffffff;
  border: none;
  font-size: 26px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.1s ease-in;

  &:hover {
    background: #ffffff;
    color: rgb(0, 32, 72);
  }
}

.nav-info {
  color: #393838;
  text-shadow: 0px 4px 4px #00000040;
}

.nav-description {
  padding: 0.5rem;
  background-color: #ffffff;
  border: 1px solid #ddd;
  color: #393838;
  font-size: 1rem;
  line-height: 1rem;
  transition: all 0.1s ease-in;

  &:hover {
    border: 1px solid #aaaeb7;
  }

  &:focus {
    outline: none;
  }
}

.nav-description:hov .search {
  border-radius: 10px;
  background: rgba(0, 33, 72, 0.5);
  color: #ffffff;
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
