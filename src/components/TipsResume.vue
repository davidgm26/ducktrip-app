<template>
  <div class="tips-resume-container">
    <div class="waves">
      <div class="wave circulo a"></div>
      <div class="wave circulo b"></div>
      <div class="wave circulo c"></div>
    </div>
    <div class="content">
      <div class="tips-card">
        <div class="tips-card-content">
          <h2 class="tips-card-title">CONSEJOS PARA VIAJAR</h2>
          <p class="tips-card-text">
            Te ofrecemos los mejores consejos para que los pongas en práctica en
            tu próximo viaje
          </p>
          <a class="tips-link" href="/tips" target="_blank">¡VER TIPS!</a>
        </div>
        <img
          class="tips-vuelos"
          src="@/assets/images/tips-header.jpg"
          alt="viajero con maletas"
        />
      </div>
      <div class="tips-resume">
        <h1 class="tips-resume-title">Descubre todos los vuelos</h1>
        <div class="resume-text-icon">
          <p class="tips-resume-text">
            Usa nuestro buscador y encuentra más vuelos que peces en el mar
          </p>
          <img src="@/assets/icons/icon-fish.png" alt="icono de pez" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TipsResume",
};
</script>

<style>
.content {
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  z-index: 10;
}

.tips-card {
  max-width: 800px;
  width: 100%;
  border-radius: 1.5rem;
  display: flex;
  background: linear-gradient(88.33deg, #1b55b0, #f44f5a);
  box-shadow: 4px 4px 25px rgb(0 0 0 / 10%);
  position: relative;
  overflow: hidden;
}

.tips-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1rem;
}

.tips-card-title {
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.tips-card-text {
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.tips-link {
  border-radius: 10px;
  background: #ffff;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 600;
  color: #1b55b0;
  width: 6rem;
}

.tips-vuelos {
  width: 100%;
  height: 100%;
  border-radius: 49% 0% 10% 10% / 58% 9% 0% 0%;
}

.tips-resume-container {
  min-height: 100vh;
  background: #0f9bf6;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
}

.tips-resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.tips-resume-title {
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.resume-text-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.tips-resume-text {
  color: #ffffff;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.waves {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 527px;
  width: 100%;
  overflow: hidden;
}

.wave {
  position: absolute;
  left: -180px;
  bottom: 0;
  width: 2402px;
  height: 427px;
  background: url(@/assets/images/tips-wave.png) center bottom no-repeat;
  animation: 5s wave ease-in-out infinite alternate;
}

.wave.a {
  background-position: 0 -854px;
}

.wave.b {
  background-position: 0 -427px;
  animation-delay: 0.6s;
}

.wave.c {
  background-position: 0 0;
  animation-delay: 1.2s;
}

@media (max-width: 800px) {
  .tips-resume-icon {
    flex-direction: column;
  }

  .tips-card {
    flex-direction: column-reverse;
  }

  .tips-vuelos {
    border-radius: 0% 0% 50% 50% / 0% 0% 15% 15%;
  }
}

@keyframes wave {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(160px, 15px);
  }

  100% {
    transform: translate(-80px, 30px);
  }
}
</style>
