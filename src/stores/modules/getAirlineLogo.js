export async function getAirlineLogo(airline) {
  const url = `https://api.api-ninjas.com/v1/airlines?iata=${airline}`;
  const options = {
    method: "GET",
    headers: { "X-Api-Key": "" },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return "No se ha podido cargar el logo";
  }
}
