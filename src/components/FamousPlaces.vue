<template>
    <h1 class="most-famous-tittle">Los destinos más seleccionados por los pasajeros</h1>
    <div class="card-container">
        <div class="card" v-for="(place, index) in places" :key="index" :style="{ backgroundImage: `url(${place.image})` }">
            <p class="place-info">{{ place.name }} {{ place.score }} ⭐</p>
        </div>
    </div>
</template>

<script>
import { getMostVisitedPlaces } from '../stores/modules/getMostVisitedPlaces'

export default {
    name: 'FamousPlaces',
    data() {
        return {
            places: [],
        }
    },
    methods: {
        async getSitiosFamosos() {
            this.places = await getMostVisitedPlaces();
            console.log('adios', this.places);
            /*Guardar fecha de caducidad (today + X) */
            localStorage.setItem('places', JSON.stringify(this.places))
        }
    },
    async mounted() {
        const placesString = localStorage.getItem('places') || '[]';
        const placesObject = JSON.parse(placesString);
        if (placesObject.length === 0) {
            await this.getSitiosFamosos()
        } else {
            this.places = placesObject
        }
    }

}
</script>

<style scoped>
.card-container {
    margin: 15px;
    min-height: 380px;
    display: flex;
    gap: 14px;
    flex-direction: row;


}

.most-famous-tittle {
    font-size: 2em;
    margin: 20px;

}

.card {
    width: 50%;
    background-color: #ffffff;
    display: grid;
    flex-direction: row;
    margin: 3px;
    border-radius: 50px;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    grid-template-columns: min-content;
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    & .place-info {
        width: max-content;
        height: 50px;
        border-radius: 50px;
        margin: 20px;
        color: #fff;
        text-shadow: 1px 1px black;
        background-color: #51465478;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: small;
        padding: 10px;
    }

}
</style>