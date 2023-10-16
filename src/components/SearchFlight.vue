<template>
    <div class="nav">
        <h3 class="nav-tittle">Millones de Vuelos, Hoteles al mejor precio</h3>
        <div class="buttons-container">
            <button class="nav-button">Vuelos</button>
            <button class="nav-button">Hoteles</button>
            <button class="nav-button">Tiempo</button>
        </div>
        <div class="nav-form">
            <div class="nav-options">
                <div class="option-wrapper">
                    <label class="nav-info">Desde</label>
                    <input class="nav-description" placeholder="País, ciudad o aeropuerto">
                </div>
                <div class="option-wrapper">
                    <label class="nav-info">A</label>
                    <input class="nav-description" placeholder="País, ciudad o aeropuerto">
                </div>
                <div class="option-wrapper">
                    <label class="nav-info">Ida</label>
                    <input class="nav-description" type="date">
                </div>
                <div class="option-wrapper">
                    <label class="nav-info">Vuelta</label>
                    <input class="nav-description" type="date">
                </div>
                <div class="option-wrapper">
                    <label class="nav-info">Viajeros y clase del vuelo</label>
                    <input class="nav-description">
                    <!-- <span>2 viajeros, 1 habitación, Cualquier clase</span> -->

                </div>
            </div>
            <button class="search">Buscar</button>
        </div>
    </div>
</template>

<style>
.nav {
    background-color: rgb(27, 85, 176);
    width: 100%;
    padding: 1rem 2rem;
}

.nav-tittle {
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    background: rgba(0, 33, 72, 0.5);
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
    border-radius: 0.5rem;
    gap: 0.25rem;
    overflow: hidden;
}

.option-wrapper {
    background-color: rgba(255, 255, 255, 0.83);
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    gap: 0.25rem;
}

.nav-info {
    color: #393838;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.nav-description {
    background-color: transparent;
    border: none;
}

.search {
    border-radius: 10px;
    background: rgba(0, 33, 72, 0.50);
    color: #FFFFFF;
    border: none;
    font-size: 26px;
    padding: 0 1rem;
}
</style>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

