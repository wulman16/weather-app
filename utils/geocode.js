const request = require(`request`)

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=${MAPBOX_API_KEY}`
  request({ url: url, json: true}, (error, response) => {
    if (error) {
      callback(`Unable to connect to geolocation service!`)
    } else if (response.body.features.length === 0) {
      callback(`Unable to find location! Try another search.`)
    } else {
      callback(undefined, {
        lat: response.body.features[0].center[1],
        lng: response.body.features[0].center[0],
        placeName: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
