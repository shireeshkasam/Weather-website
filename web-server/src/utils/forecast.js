const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=93509cce6b639930a8ddf0c2ded2973e&query=${latitude},${longitude}`//${data.lattitude},${data.longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            //callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            callback(undefined,`In  ${body.location.name} the temperature is ${body.current.temperature} degree celcius and it looks like ${body.current.weather_descriptions[0]}`)

        }
    })
}

module.exports = forecast