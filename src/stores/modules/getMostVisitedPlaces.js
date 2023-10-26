import { getFamousPlaces } from "./fetchMostVisitedPlacesIATA";
import { getCityPhoto } from "./getCityImage.js";
import { getCityName } from "./getCityName";
import defaultImg from "@/assets/images/defaultImage.png";

export const getMostVisitedPlaces = async () => {
  const mostVisited = await getFamousPlaces();
  const mostVisitedPlaces = await Promise.all(
    mostVisited.map(async (city) => {
      const score = city.analytics.travelers.score;
      const name = await getCityName(city.destination);
      const cityName = name?.at(0)?.address?.cityName;
      const data = await getCityPhoto(cityName.toLowerCase());
      const image = data?.photos[0]?.image?.mobile || defaultImg;
      return {
        image: image,
        name: cityName,
        score: score / 10,
        iata: city.destination,
      };
    })
  );

  return mostVisitedPlaces;
};

export const getMostVisitedPlacesAwait = async () => {
  const mostVisited = await getFamousPlaces();
  const places = [];
  for (const city of mostVisited) {
    const score = city.analytics.travelers.score;
    const name = await getCityName(city.destination);
    const cityName = name?.at(0)?.address?.cityName;
    const data = await getCityPhoto(cityName.toLowerCase());
    const image = data?.photos[0]?.image?.mobile || defaultImg;
    const place = {
      image: image,
      name: cityName,
      score: score / 10,
      iata: city.destination,
    };
    places.push(place);
  }
  //   await mostVisited.forEach(async (city) => {
  //     const score = city.analytics.travelers.score;
  //     const name = await getCityName(city.destination);
  //     const cityName = name?.at(0)?.address?.cityName;
  //     const data = await getCityPhoto(cityName.toLowerCase());
  //     const image = data?.photos[0]?.image?.mobile || defaultImg;
  //     const place = {
  //       image: image,
  //       name: cityName,
  //       score: score / 10,
  //       iata: city.destination,
  //     };
  //     places.push(place);
  //   });
  return places;
};
