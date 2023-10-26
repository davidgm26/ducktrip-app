<template>
  <section class="famous-places">
    <h2 class="most-famous-tittle">
      Los destinos más seleccionados por los pasajeros
    </h2>
    <div v-if="places.length === 0" class="loader-container">
      <span class="loader"></span>
    </div>
    <div class="card-container">
      <div
        class="card"
        v-for="(place, index) in places"
        :key="index"
        :style="{ backgroundImage: `url(${place.image})` }"
      >
        <div class="card-info">
          <div class="place-info">
            {{ place.name }}
            <div class="card-score">
              <i class="score-icon"></i> {{ place.score }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getMostVisitedPlacesAwait } from "../stores/modules/getMostVisitedPlaces";

export default {
  name: "FamousPlaces",
  data() {
    return {
      places: [],
    };
  },
  methods: {
    async getSitiosFamosos() {
      this.places = await getMostVisitedPlacesAwait();
      /*Guardar fecha de caducidad (today + X) */
      localStorage.setItem("places", JSON.stringify(this.places));
    },
  },
  async mounted() {
    const placesString = localStorage.getItem("places") || "[]";
    const placesObject = JSON.parse(placesString);
    if (placesObject.length === 0) {
      await this.getSitiosFamosos();
    } else {
      this.places = placesObject;
    }
  },
};
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
}
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #3e86f5;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid #00307a;
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.famous-places {
  background-color: #ffffff;
  color: #00307a;
  text-shadow: 0px 4px 4px #00000040;
  padding: 1.5rem;
}

.card-container {
  min-height: 380px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  gap: 1rem;
}

.most-famous-tittle {
  font-size: 2em;
  padding-bottom: 3rem;
  text-align: center;
}

.card {
  background-color: #ffffff;
  display: grid;
  border-radius: 2rem;
  height: 20rem;
  background: center / cover no-repeat;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.card-info {
  width: max-content;
  height: 50px;
  border-radius: 50px;
  margin: 20px;
  background-color: #51465478;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  padding: 0.7rem;
}

.place-info {
  display: flex;
  align-items: center;
  color: #fff;
  text-shadow: 1px 1px black;
  gap: 0.7rem;
}

.card-score {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.score-icon {
  background: url("../assets/icons/score-icon.png");
  width: 1rem;
  height: 1rem;
  display: block;
  background-size: 1rem;
}
</style>
