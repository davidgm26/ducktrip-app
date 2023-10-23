import { getFamousPlaces } from './fetchMostVisitedPlacesIATA'
import { getCityPhoto } from './getCityImage.js';
import { suggestLocation } from './getFlights.js';
import defaultImg from '@/assets/images/defaultImage.png'

export const getMostVisitedPlaces = async () =>{
    const mostVisited = await getFamousPlaces();
    const mostVisitedPlaces = await Promise.all(
        mostVisited.map(async (IATA) => {
            const score = IATA.analytics.travelers.score;
            const name = await suggestLocation(IATA.destination);
            const city = name[0]?.address?.cityName
            const data = await getCityPhoto(city.toLowerCase());
            const image = data?.photos[0]?.image?.mobile || defaultImg
            return{
                image: image,
                name:city,
                score:score/10,
                iata:IATA.destination
            }
        })
    )

    return mostVisitedPlaces
}