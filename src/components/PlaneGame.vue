<template>
    <div class="game">
        <div class="instructions">Usa las flechas para mover el avión</div>
        <div class="entity destiny"></div>
        <div class="entity player" :style="{ left: playerX + 'px', top: playerY + 'px' }"></div>
        <div class="game-finished" v-if="isPlayerAtLocation">¡Lo has conseguido!</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            playerX: 80,
            playerY: 90,
        };
    },
    mounted() {
        window.addEventListener('keydown', this.movePlayer);
    },
    methods: {
        movePlayer(event) {
            event.preventDefault();
            if (this.isPlayerAtLocation) {
                return;
            }
            if (event.key === 'ArrowLeft' && this.playerX > 0) {
                this.playerX -= 10;
            } else if (event.key === 'ArrowRight' && this.playerX < 750) {
                this.playerX += 10;
            } else if (event.key === 'ArrowUp' && this.playerY > 0) {
                this.playerY -= 10;
            } else if (event.key === 'ArrowDown' && this.playerY < 450) {
                this.playerY += 10;
            }
        },
    },
    computed: {
        isPlayerAtLocation() {
            const matchesXCoordinate = this.playerX > 645 && this.playerX < 695;
            const matchesYCoordinate = this.playerY > 345 && this.playerY < 395;
            return matchesXCoordinate && matchesYCoordinate;
        }
    }
};
</script>

<style>
.game {
    width: 800px;
    height: 500px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    background-color: #f5f5dc;
    box-shadow: 0px 4px 4px #00000040;
    border-radius: 2rem;
    background-image: url('@/assets/images/error-page-mapa-mundi.png');
    background-size: cover;
}

.instructions {
    position: absolute;
    color: rgb(36, 36, 36);
    text-shadow: 0px 4px 4px #00000040;
    top: 0.5rem;
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
}

.entity {
    width: 50px;
    height: 50px;
    position: absolute;
    background-size: cover;
}

.destiny {
    background-image: url('@/assets/icons/icon-location.png');
    left: 670px;
    top: 370px;
}

.player {
    background-image: url('@/assets/icons/plane-player.png');
}

.game-finished {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #3d87f5b3;
    color: white;
    text-shadow: 0px 4px 4px #00000040;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
}
</style>