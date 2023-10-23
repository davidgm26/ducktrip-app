<template>
    <div class="card-container">
        <div class="card" v-for="(place, index) in  places " :key="index"
            v-bind:style="{ backgroundImage: 'url(' + place.image + ')' }">
            <div class="place-info">
                {{ place.city }}
                <img :src="place.countryFlag" :alt="place.city">
            </div>
        </div>
    </div>
</template>

<script>
import SpainFlag from '../assets/images/Flags/SpainFlag.png'
import FranceFlag from '../assets/images/Flags/FranceFlag.svg'
import Sevilla from '../assets/images/Cities/sevilla.jpg'
import Teide from '../assets/images/Cities/tenerife.png'
import Cordoba from '../assets/images/Cities/cordoba.jpg'
import Paris from '../assets/images/Cities/paris.jpg'
import { getFamousPlaces } from '../stores/modules/getFamousPlaces'


export default {
    name: 'FamousPlaces',
    data() {
        return {
            places: []
        }
    },
    methods: {
        async getSitiosFamosos() {
            this.places = await getFamousPlaces()
            console.log(this.places)

        }
    },
    mounted() {
        this.getSitiosFamosos()
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

.card {
    width: 100%;
    background-color: blue;
    display: flex;
    flex-direction: row;
    margin: 3px;
    border-radius: 50px;

    & .place-info {
        width: 100%;
        height: 20px;
        border-radius: 50px;
        margin: 20px;
    }

    .place-info img {
        width: 5%;
    }
}
</style>