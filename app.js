const request = require(`request`)
require(`dotenv`).config()

apiKey = process.env.API_KEY

const url = `https://api.darksky.net/forecast/${apiKey}/33.7490000,-84.3879800`

request({ url: url, json: true }, (error, response) => {
  const currently = response.body.currently
  const summary = response.body.daily.data[0].summary
  console.log(`Today's forecast: ${summary}`)
  console.log(`It is currently ${currently.temperature} degrees outside. There is a ${currently.precipProbability}% chance of rain.`)
})