const request = require(`request`)
require(`dotenv`).config()

darkSkyApiKey = process.env.DARKSKY_API_KEY
mapBoxApiKey = process.env.MAPBOX_API_KEY

const darkSkyUrl = `https://api.darksky.net/forecast/${darkSkyApiKey}/33.7490000,-84.3879800`
const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Atlanta.json?limit=1&access_token=${mapBoxApiKey}`


request({ url: darkSkyUrl, json: true }, (error, response) => {
  const currently = response.body.currently
  const summary = response.body.daily.data[0].summary
  console.log(`Today's forecast: ${summary}`)
  console.log(`It is currently ${currently.temperature} degrees outside. There is a ${currently.precipProbability}% chance of rain.`)
})

// Geocoding

request({ url: mapBoxUrl, json: true }, (error, response) => {
  const lat = response.body.features[0].center[1]
  const lng = response.body.features[0].center[0]
  const placeName = response.body.features[0].place_name
  console.log(`${placeName} coordinates: (${lat}, ${lng})`)
})

