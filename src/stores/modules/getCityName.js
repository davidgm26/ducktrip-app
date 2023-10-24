import { getToken } from "./getFlights";

export async function getCityName(location) {
    let token = localStorage.getItem("token");
    if (!token) {
      const newToken = await getToken();
      token = newToken;
      localStorage.setItem("token", token);
    }
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const BASE_URL = `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=${location}&page%5Blimit%5D=1&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL`;
    try {
      const res = await fetch(BASE_URL, options);
      const data = await res.json();
      console.log("data", data);
      if (
        data &&
        data.errors &&
        data.errors.length > 0 &&
        data.errors[0].code === 38192
      ) {
        localStorage.setItem("token", "");
        return "El token ha expirado";
      }
      return data.data;
    } catch (err) {
      console.log(err);
      return "No hay ninguna coicidencia";
    }
  }