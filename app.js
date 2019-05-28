require(`dotenv`).config()
const geocode = require(`./utils/geocode`)
const weather = require(`./utils/weather`)

DARKSKY_API_KEY = process.env.DARKSKY_API_KEY
MAPBOX_API_KEY = process.env.MAPBOX_API_KEY

const location = process.argv[2]

if (location) {
  geocode(location, (error, geoData) => {
    if (error) {
      return console.log(error)
    }
  
    weather(geoData.lat, geoData.lng, (error, weatherData) => {
      if (error) {
        return console.log(error)
      }
      console.log(geoData.placeName)
      console.log(weatherData)
    })
  })
}
