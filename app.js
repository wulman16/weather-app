const request = require(`request`)
require(`dotenv`).config()
const geocode = require(`./utils/geocode`)
const weather = require(`./utils/weather`)

darkSkyApiKey = process.env.DARKSKY_API_KEY
mapBoxApiKey = process.env.MAPBOX_API_KEY

geocode(`chicago`, (error, data) => {
  console.log(`Error`, error)
  console.log(`Data`, data)
})

weather({lat: 33.7490000, lng: -84.3879800}, (error, data) => {
  console.log(`Error`, error)
  console.log(`Data`, data)
})
