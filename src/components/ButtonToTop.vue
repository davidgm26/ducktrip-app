<template>
    <button class="button-back" @click="backToTop" v-show="showButton">
        <img src="@/assets/icons/icon-arrow-top.png" alt="icono con flecha hacia arriba" />
    </button>
</template>

<script>
export default {
    data() {
        return {
            showButton: false
        };
    },
    methods: {
        backToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        handleScroll() {
            this.showButton = window.scrollY > 100;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style>
.button-back {
    display: block;
    border-radius: 50%;
    position: fixed;
    bottom: 50px;
    right: 50px;
    background-color: #3E86F5;
    box-shadow: 5px 5px 10px #3E86F5;
}
</style>