<template>
  <nav class="container">
    <div class="top-side">
      <div>
        <router-link to="/" class="logo">
          <img src="../assets/images/logo.svg" alt="logo" />
        </router-link>
      </div>
      <div class="buttons">
        <router-link to="/about" class="button">About</router-link>
        <router-link to="/flights" class="button">Vuelos</router-link>
        <router-link to="/tips" class="button">Tips</router-link>
      </div>
    </div>
    <div class="bottom-side">
      <h1 class="nav-bar-tittle">Encuentra tu destino perfecto</h1>
      <p class="nav-bar-subtittle">Busca las mejores ofertas en Vuelos</p>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavigationTopBar",
};
</script>
<style>
:root {
  --words-color: #fff;
}

.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #3e86f5;
  padding: 1rem 2rem;
  gap: 1rem;

  & .top-side {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & .buttons {
      display: flex;
      gap: 2rem;
      justify-content: flex-end;
      align-items: center;

      & .button {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 80px;
        background-color: #002148;
        color: var(--words-color);
        border-radius: 20px;
        text-decoration: none;
      }
    }

    & .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: var(--words-color);
      text-decoration: none;

      & img {
        max-width: 120px;
      }
    }
  }

  & .bottom-side {
    width: 100%;

    & .nav-bar-tittle {
      font-size: 3em;
      color: var(--words-color);
      text-shadow: 1px 0.5px #000;
    }

    & .nav-bar-subtittle {
      color: var(--words-color);
      font-size: 1.5em;
    }
  }
}

@media (max-width: 800px) {
  .container {
    & .top-side {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
}
</style>
