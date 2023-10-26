/* eslint-disable no-undef */
localStorage.getItem("token");

export async function getToken() {
  const url = "https://test.api.amadeus.com/v1/security/oauth2/token";
  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");
  data.append("client_id", `${import.meta.env.VITE_client_id}`);
  data.append("client_secret", `${import.meta.env.VITE_client_secret}`);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  });
  const responseData = await response.json();
  return responseData.access_token;
}

export async function getFlights(
  OriginIataCity,
  DestinyIataCity,
  departureDate,
  isNonStop,
  adult
) {
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
  const maxFlights = 10;
  const BASE_URL = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${OriginIataCity}&destinationLocationCode=${DestinyIataCity}&departureDate=${departureDate}&adults=${adult}&nonStop=${isNonStop}&max=${maxFlights}`;
  try {
    const res = await fetch(BASE_URL, options);
    const data = await res.json();
    // if (
    //   data &&
    //   data.errors &&
    //   data.errors.length > 0 &&
    //   data.errors[0].code === 38190
    // ) {
    //   localStorage.setItem("token", "");
    //   return "Vuelve a intentarlo";
    // }
    if (data?.errors?.length > 0) {
      if (data.errors[0].code === 38192) {
        localStorage.setItem("token", "");
        return { errorMessage: "El token ha expirado" };
      }
      if (data.errors[0].status === 400) {
        return {
          errorMessage: "Faltan campos por rellenar o se ha escrito algo mal",
        };
      }
      if (data?.errors.status === 401) {
        localStorage.removeItem("token");
      }
    }

    if (data?.data?.length === 0) {
      return {
        errorMessage: "No se ha encontrado ningun vuelo",
      };
    }
    return data;
  } catch (err) {
    return { errorMessage: "Error al encontrar vuelos" };
  }
}

export async function suggestLocation(location) {
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
  const BASE_URL = `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT,CITY&keyword=${location}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL`;
  try {
    const res = await fetch(BASE_URL, options);
    const data = await res.json();
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
    return "No hay ninguna coicidencia";
  }
}
