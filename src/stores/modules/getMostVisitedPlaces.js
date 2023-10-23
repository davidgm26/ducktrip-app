import { getFamousPlaces } from './fetchMostVisitedPlacesIATA'
import { getCityPhoto } from './getCityImage.js';
import { suggestLocation } from './getFlights.js';

export const getMostVisitedPlaces = async () =>{
    const mostVisited = await getFamousPlaces();
    const mostVisitedPlaces = await Promise.all(
        mostVisited.map(async (IATA) => {
            const name = await suggestLocation(IATA.destination);
            const city = name[0]?.address?.cityName
            const data = await getCityPhoto(city.toLowerCase());
            const image = data?.photos[0]?.image?.mobile || 'assets/images/defaultImage.png'
            return{
                image: image,
                name:city,
                iata:IATA.destination
            }
        })
    )

    return mostVisitedPlaces
}