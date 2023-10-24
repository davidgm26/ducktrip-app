<template>
    <div v-if="isVisible" class="dropdown">
        <div class="iata-suggestion-container" v-for="(suggestion, index) in suggestion" :key="index">
            <div class="iata-suggestion" @click="selectSuggestion(suggestion.iataCode)">
                <p class="first-p">{{ suggestion.name }} ({{ suggestion.iataCode }})</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { flightSearchStore } from '../../../../stores/counter';

export default {

    props: {
        isVisible: Boolean,
        suggestion: Object,
        setIsVisible: Function,
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

        selectSuggestion(iataCode) {
            console.log(iataCode);
            console.log('suggestion', this.suggestion)
            this.setdepartureIata(iataCode);
            this.setIsVisible(false)
        },
        ...mapActions(flightSearchStore, ['setdepartureIata', 'setarrivalIata', 'setdepartureDate', 'setadultCount']),
    }
};


</script>


<style>
.dropdown {
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #ffffff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    display: block;
    z-index: 100;
}

.dropdown-elements {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.dropdown-row {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.dropdown-adults {
    color: #393838;
    text-shadow: 0px 4px 4px #00000040;
}

.dropdown-counter {
    align-items: center;
    border: 1px solid #959595;
    border-radius: 0.5rem;
    display: flex;
    overflow: hidden;
}

.dropdown-negative,
.dropdown-positive {
    color: #959595;
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-radius: 0;
    padding: 0.5rem 1rem;
    height: 100%;
}

.dropdown-info {
    color: #393838;
    text-shadow: 0px 4px 4px #00000040;
    padding: 0.5rem 1rem;
}

.dropdown-positive {
    color: #1b55b0;
}

.dropdown-negative:hover,
.dropdown-positive:hover,
.dropdown-ready:hover {
    background-color: #1b55b026;
}

.dropdown-ready {
    border-radius: 10px;
    color: #1b55b0;
    border: 1px solid #1b55b0;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: transparent;
}

.iata-suggestion-container {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    width: 15vw;

}

.iata-suggestion {
    width: 100%;
    display: flex;
    cursor: pointer;
    color: #1b55b0;
    padding: 10px;
    border-radius: 0.5rem;


}

.iata-suggestion:hover {
    background-color: #1b54b02a;
}
</style>