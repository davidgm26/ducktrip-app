
export const getCityPhoto = async (city)=> {
    const data = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`)
    .then(resp => resp.json())
    return data.status !=404? data:null
}