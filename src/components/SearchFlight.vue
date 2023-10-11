<template>
    <div class="nav">
        <h3 class="nav-tittle">Millones de Vuelos, Hoteles al mejor precio</h3>
        <div class="buttons-container">
            <a>Vuelos</a>
            <a>Hoteles</a>
            <a>Tiempo</a>
        </div>
        <div class="nav-options">
            <div>
                <label class="nav-info">Desde</label>
                <input class="nav-description" placeholder="País, ciudad o aeropuerto">
                <button class="reset-description"></button>
            </div>
            <div>
                <label class="nav-info">A</label>
                <input class="nav-description" placeholder="País, ciudad o aeropuerto">
                <button class="reset-description"></button>
            </div>
            <div>
                <label class="nav-info">Ida</label>
                <input class="nav-description">
                <button class="reset-description"></button>
            </div>
            <div>
                <label class="nav-info">Vuelta</label>
                <input class="nav-description">
                <button class="reset-description"></button>
            </div>
            <div>
                <label class="nav-info">Viajeros y clase del vuelo</label>
                <input class="nav-description">
                <button class="reset-description">
                    <span>2 viajeros, 1 habitación, Cualquier clase</span>
                </button>
            </div>
            <button class="search"></button>
        </div>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

