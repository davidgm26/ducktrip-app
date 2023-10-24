<template>
    <NavigationTopBar />
    <div class="about">
        <h1 class="about-title">Conoce al equipo</h1>
        <div class="about-background">
            <div class="member-team" v-for="member in members" :key="member.id">
                <div class="member-photo">
                    <img class="first-photo" :src="member.image" width="102" height="120" />
                    <img class="hover-photo" :src="member.hoverImage" width="102" height="120" />
                </div>
                <div class="member-info">
                    <div class="member-name">{{ member.name }}</div>
                    <div class="member-icons">
                        <a target="_blank" :href="member.github">
                            <img src="@/assets/icons/icon-GitHub.png" alt="icono de github" class="member-icon">
                        </a>
                        <a target="_blank" :href="member.linkedin">
                            <img src="@/assets/icons/icon-Linkedin.png" alt="icono de linkedin" class="member-icon">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterSection />
</template>

<script>
import NavigationTopBar from '../components/NavigationTopBar.vue';
import elenaImage from '@/assets/images/about-elena.png';
import elenaImageHover from '@/assets/images/about-elena-hover.jpg';
import davidImage from '@/assets/images/about-david.jpg';
import davidImageHover from '@/assets/images/about-david-hover.jpg';
import memberImage from '@/assets/images/about-member.png';
import FooterSection from '../components/FooterSection.vue';

export default {
    name: 'AboutPage',
    components: { NavigationTopBar, FooterSection },
    data() {
        return {
            members: [
                {
                    id: 1,
                    name: "Elena Expósito Lara",
                    image: elenaImage,
                    hoverImage: elenaImageHover,
                    github: "https://github.com/ElenaExposito",
                    linkedin: "https://www.linkedin.com/in/elena-exp%C3%B3sito-lara/"
                },
                {
                    id: 2,
                    name: "Carlos Andrés Concepción Rodríguez",
                    image: memberImage,
                    hoverImage: memberImage,
                    github: "https://github.com/Conce131",
                    linkedin: "https://www.linkedin.com/in/carlos-conce/"
                },
                {
                    id: 3,
                    name: "David García María",
                    image: davidImage,
                    hoverImage: davidImageHover,
                    github: "https://github.com/davidgm26",
                    linkedin: "https://www.linkedin.com/in/david-garciamar/"
                },
                {
                    id: 4,
                    name: "Alejandro Reguera Rodríguez",
                    image: memberImage,
                    hoverImage: memberImage,
                    github: "https://github.com/VassHigh",
                    linkedin: "https://www.linkedin.com/in/elena-exp%C3%B3sito-lara/"
                },
            ]
        }
    },
}
</script>

<style>
.about {
    background-color: #ffffff;
    width: 100%;
    min-height: 100vh;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-title {
    color: #393838;
    text-shadow: 0px 4px 4px #00000040;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 2rem;
}

.about-background {
    width: 100%;
    background-image: url(@/assets/images/about-world.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    flex: 1 1 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    row-gap: 7rem;
    column-gap: 17rem;
}

.member-team {
    width: 166px;
    height: 250px;
    flex-shrink: 0;
    border-radius: 193.5px;
    background: linear-gradient(180deg, #005EEF 0%, #C1D8FD 100%);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
}

.member-photo {
    position: relative;
    width: 102px;
    flex: 0 0 120px;
    transition: transform 0.3s;
    transform-style: preserve-3d;

    &:hover {
        transform: rotateY(180deg);
    }
}

.first-photo {
    height: 120px;
    position: absolute;
    border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
    border: 2px solid #3e86f5;
    filter: drop-shadow(0px 4px 4px #00000040);
    background-color: #ffffff;
    backface-visibility: hidden;
}

.hover-photo {
    height: 120px;
    position: absolute;
    border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
    border: 2px solid #3E86F5;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: #ffffff;
    backface-visibility: hidden;
    transform: rotateY(180deg);
}

.member-info {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.member-name {
    color: #00307A;
    text-shadow: 0px 4px 4px #00000040;
    text-align: center;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.member-icons {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.member-icon {
    width: 2rem;
    height: 2rem;
    transition: transform 0.3s;
}

.member-icon:hover {
    transform: scale(1.3);
}

@media (max-width: 656px) {
    .about-background {
        grid-template-columns: auto;
        grid-template-rows: auto;
        row-gap: 4rem;
        background-attachment: scroll;
        background-position: top;
        background-repeat: repeat;
    }
}
</style>