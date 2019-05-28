const request = require(`request`)
require(`dotenv`).config()
const geocode = require(`./utils/geocode`)
const weather = require(`./utils/weather`)

DARKSKY_API_KEY = process.env.DARKSKY_API_KEY
MAPBOX_API_KEY = process.env.MAPBOX_API_KEY

geocode(`atlanta`, (error, data) => {
  console.log(`Error`, error)
  console.log(`Data`, data)
})

weather(33.7491, -84.3902, (error, data) => {
  console.log(`Error`, error)
  console.log(`Data`, data)
})
