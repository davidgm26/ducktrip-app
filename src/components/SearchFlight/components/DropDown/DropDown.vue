<template>
    <div v-if="isVisible" class="dropdown">
        <div class="dropdown-elements">
            <div class="dropdown-row">
                <p class="dropdown-adults">Adultos</p>
                <div class="dropdown-counter">
                    <button class="dropdown-negative" @click="decrementAdults">-</button>
                    <span class="dropdown-info">{{ adultCount }}</span>
                    <button class="dropdown-positive" @click="incrementAdults">+</button>
                </div>
            </div>
            <button class="dropdown-ready" @click="onReadyClick">Listo</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isVisible: Boolean,
        adultCount: Number,
        incrementAdults: Function,
        decrementAdults: Function,
        onReadyClick: Function,
        updateAdult: Function
    },
};


</script>

<style>
.dropdown {
    position: absolute;
    top: 70px;
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
</style>