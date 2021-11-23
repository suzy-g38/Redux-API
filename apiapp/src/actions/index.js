import apiGet from '../helper'

export const LOAD_USERS_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING'
export const LOAD_USERS_SUCCESS = 'REDUX_THUNK_LOAD_USERS_SUCCESS'
export const LOAD_USERS_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR'

console.log('actions index')
export const fetchWeather =  (cityName) => {
  console.log('fetchweather')
  console.log('dispatch')

  //const res = apiGet(cityName)
  //console.log(res)
  return async (dispatch) => {
    dispatch({
      type: LOAD_USERS_LOADING,
    })
    try {
      const res = await apiGet(cityName)
      console.log(res)
      if (!res.ok) {
        const resData = await res.json()
        throw new Error(resData.message)
      }
      const resData = await res.json()
      await dispatch({ type: LOAD_USERS_SUCCESS, payload: resData })
    } catch (error) {
      dispatch({
        type: LOAD_USERS_ERROR,
        payload: error.message || 'Unexpected Error!!!',
      })
    }
  }
}
/**const dispatcher = () => {
  return {
    type: LOAD_USERS_LOADING,
  }
}
/**export const fetchPostsRequest = () => {
  return {
    type: LOAD_USERS_LOADING,
  }
}

export const fetchPostsSuccess = (payload) => {
  return {
    type: LOAD_USERS_SUCCESS,
    payload,
  }
}

export const fetchPostsError=() =>{
  return {
    type: LOAD_USERS_ERROR,
  }
}
*/
/**export const fetchWeather = (cityName) => (dispatch) => {
  console.log('fetchWeather')
  dispatch({ type: LOAD_USERS_LOADING })
  console.log(cityName)
  async function apiJSON(cityName) {
    const response = await apiGet(cityName)
    const weather = await response.json()
    console.log(weather)
    return weather
  }
  apiGet(cityName).then(
    (data) => dispatch({ type: LOAD_USERS_SUCCESS, payload: data }),
    (error) =>
      dispatch({
        type: LOAD_USERS_ERROR,
        payload: error.message || 'Unexpected Error!!!',
      })
  )
}*/

/**const themeTypes = {
    LOADING_RIBON_TEXT: 'LOADING_RIBON_TEXT',
    LOADING_RIBON_TEXT_COMPLETE:'LOADING_RIBON_TEXT_COMPLETE',
}

export default themeTypes

 */
