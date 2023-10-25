<template>
    <div class="progress-bar">
        <div :style="{ width: progress + '%' }"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            progress: 0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.updateProgress);
    },
    methods: {
        updateProgress() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            this.progress = (scrollY / (documentHeight - windowHeight)) * 100;
        }
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.updateProgress);
    }
};
</script>

<style>
.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: transparent;
}

.progress-bar div {
    height: 100%;
    background-color: #F44F5A;
    border-radius: 0 0 50px 0;
    box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.25);
    transition: width .2s ease-out 0s;
    z-index: 99;
}
</style>