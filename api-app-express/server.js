const express = require('express')
const https = require('https')
const cors = require('cors')

const app = express()
app.use(cors())
console.log('Hi')
app.get('/:cityname', (req, res) => {
  console.log('hi1')
  const cityName = req.params.cityname
  const apiKey = '4ea201ffe16f12a13ec4b8464c89924d'
  const unit = 'metric'
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    cityName +
    '&appid=' +
    apiKey +
    '&units=' +
    unit

  https.get(url, function (response) {
    console.log(url)
    response.on('data', function (data) {
      const weatherData = JSON.parse(data)
      console.log(weatherData)
      res.send(weatherData)
    })
  })
})

app.listen(5000, () => {
  console.log('Server is listening on port no 5000....')
})
