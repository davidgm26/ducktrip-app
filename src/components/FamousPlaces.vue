<template>
    <div class="card-container">
        <div class="card" v-for="(place, index) in places" :key="index" :style="{ backgroundImage: `url(${place.image})` }">
            <p>{{ place.name }}</p>
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
        }
    },
    async mounted() {
        await this.getSitiosFamosos()
    }

}
</script>

<style scoped>
.card-container {
    margin: 15px;
    min-height: 380px;
    display: grid;
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
    height: 500px;
    background-size: cover;
    border: 1px red solid;


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