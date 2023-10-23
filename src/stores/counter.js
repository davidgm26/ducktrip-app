import { defineStore } from "pinia";
export const flightSearchStore = defineStore("FlightSearch", {
  state: () => ({
    departureIata: "",
    arrivalIata: "",
    departureDate: "",
    adult: "1",
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
    setadultCount(adultCount) {
      this.adultCount = adultCount;
    },
  },
});
