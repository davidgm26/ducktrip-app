import { defineStore } from "pinia";
export const flightSearchStore = defineStore("FlightSearch", {
  state: () => ({
    departureIata: "",
    arrivalIata: "",
    departureDate: "",
    adult: 1,
    flightOffers: {},
    errorMessage: undefined,
  }),
  actions: {
    setdepartureIata(departureIata) {
      this.departureIata = departureIata;
    },
    setarrivalIata(arrivalIata) {
      this.arrivalIata = arrivalIata;
    },
    setdepartureDate(departureDate) {
      this.departureDate = departureDate;
    },
    incrementAdultCount() {
      this.adult++;
      (this.adult);
    },
    decrementAdults() {
      this.adult = Math.max(this.adult - 1, 1);
    },
    setFlightOffers(newFlightOffers) {
      this.flightOffers = { ...newFlightOffers };
    },
    setErrorMessage(errorMessage) {
      this.errorMessage = errorMessage;
    },
  },
});
