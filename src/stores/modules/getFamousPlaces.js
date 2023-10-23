import { getToken } from "./getFlights";

export async function getFamousPlaces() {
    let token = localStorage.getItem("token");
    console.log(token)
    if (!token) {
      const newToken = await getToken();
      token = newToken;
      localStorage.setItem("token", newToken);
    }
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer r0cPpK6vGIR9J3W2BLNcn9rHwEGI`,
      },
    };
    const BASE_URL = "https://test.api.amadeus.com/v1/travel/analytics/air-traffic/traveled?max=10&originCityCode=MAD&page%5Blimit%5D=10&page%5Boffset%5D=0&period=2017-01&sort=analytics.travelers.score"
    try {
      const res = await fetch(BASE_URL, options);
      const data = await res.json();
      console.log(localStorage.getItem('token'))
      console.log("data", data);

      // if (
      //   data &&
      //   data.errors &&
      //   data.errors.length > 0 &&
      //   data.errors[0].code === 38190
      // ) {
      //   localStorage.setItem("token", "");
      //   return "Vuelve a intentarlo";
      // }
      if (
        data &&
        data.errors &&
        data.errors.length > 0 &&
        data.errors[0].code === 38192
      ) {
        localStorage.setItem("token", "");
        return "El token ha expirado";
      }
      return data;
    } catch (err) {
      console.log(err);
      return "Error al encontrar vuelos";
    }
  }
  