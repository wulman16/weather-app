const request = require(`request`)

const weather = (coords, callback) => {
  const url = `https://api.darksky.net/forecast/${darkSkyApiKey}/${coords.lat},${coords.lng}`
  request({ url: url, json: true}, (error, response) => {
    if (error) {
      callback(`Unable to connect to weather service!`)
    } else if (response.body.error) {
      callback(`Unable to find location! Try another search.`)
    } else {
      callback(undefined, {
        currently: response.body.currently,
        summary: response.body.daily.data[0].summary
      })
    }
  })
}

module.exports = weather
