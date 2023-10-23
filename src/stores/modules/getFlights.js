localStorage.getItem("token");

export async function getToken() {
  const url = "https://test.api.amadeus.com/v1/security/oauth2/token";
  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");
  data.append("client_id", "ILwtcPEt40G8mDOrpB7LgJiROXJ3XFJj");
  data.append("client_secret", "KmKijFj51UOfDmNs");

  const tokenData = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  }).then((response) => response.json());
  return tokenData.access_token;
}

export async function getFlights(
  OriginIataCity,
  DestinyIataCity,
  departureDate,
  adult
) {
  localStorage.clear(token)
  let token = localStorage.getItem("token");
  if (!token) {
    const newToken = await getToken();
    token = newToken;
    localStorage.setItem("token", newToken);
  }
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer YfzzAeB8dj1wSWVTCbx6GwSe2x5y`,
    },
  };
  const maxFlights = 10;
  const BASE_URL = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${OriginIataCity}&destinationLocationCode=${DestinyIataCity}&departureDate=${departureDate}&adults=${adult}&nonStop=true&max=${maxFlights}`;
  try {
    const res = await fetch(BASE_URL, options);
    const data = await res.json();
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

export async function suggestLocation(location) {
  let token = localStorage.getItem("token");
  if (!token) {
    const newToken = await getToken();
    token = newToken;
    localStorage.setItem("token", newToken);
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
    return data;
  } catch (err) {
    console.log(err);
    return "No hay ninguna coicidencia";
  }
}
