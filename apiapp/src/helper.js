const address = 'http://localhost:5000/'

/**function fetchWeatherData(cityname) {
  console.log('fetchWeatherData')
  return (dispatch) => {
    dispatch(fetchPostsRequest())
    return apiGet(cityname).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchPostsSuccess(json))
      } else {
        dispatch(fetchPostsError())
      }
    })
  }
}
*/
const apiGet = (cityname) => {
  console.log('cityname is: ' + cityname)
  const URL = 'http://localhost:5000/' + cityname
  return fetch(URL, {
    method: 'GET',
  })
}

export default apiGet
