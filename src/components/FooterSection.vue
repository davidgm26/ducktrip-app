<template>
  <footer>
    <div class="info-eoi">
      <p>Con la colaboracion de:</p>
      <img src="../assets/images/eoi.jpg" alt="" />
    </div>
    <div class="team-info">
      <p>Desarrollado por DapperDrake</p>
    </div>
    <div class="info-project">
      <a
        class="icon-twitter icon"
        href="https://twitter.com/DuckTrip_EOI"
        target="_blank"
      ></a>
      <a
        class="icon-github icon"
        href="https://github.com/Conce131/ducktrip"
        target="_blank"
      ></a>
      <a
        class="icon-gmail icon"
        href="mailto:ducktripeoi@gmail.com"
        target="_blank"
      ></a>
      <a
        class="icon-instagram icon"
        href="https://www.instagram.com/ducktripoficial/"
        target="_blank"
      ></a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: #3e86f5;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & .info-eoi {
    width: 30%;
    color: #fff;

    & p {
      margin: 8px;
    }
  }

  & .info-eoi img {
    width: 100%;
  }

  & .info-project {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & .team-info {
    width: 33.3%;

    & p {
      color: #fff;
    }
  }

  .icon-twitter {
    background: url("../assets/icons/twitter-icon.png");
    width: 2rem;
    height: 2rem;
    background-size: 2rem;
  }

  .icon-github {
    background: url("../assets/icons/white-github-icon.png");
    width: 2rem;
    height: 2rem;
    background-size: 2rem;
  }

  .icon-gmail {
    background: url("../assets/icons/gmail-icon.png");
    width: 2rem;
    height: 2rem;
    background-size: 2rem;
  }

  .icon-instagram {
    background: url("../assets/icons/instagram-icon.png");
    width: 2rem;
    height: 2rem;
    background-size: 2rem;
  }

  .icon {
    margin: 10px;
  }

  @media (max-width: 425px) {
    .info-project {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
