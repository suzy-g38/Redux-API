import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from './actions/index'
function App() {
  const [cityName, setCityName] = useState('')
  const currentState = useSelector((state) => state.getData)
  const dispatch = useDispatch()
  const date = new Date()
  console.log('app')

  const handleOnClick = (e) => {
    e.preventDefault()
    dispatch(fetchWeather(cityName))
  }

  return (
    <div className='container-fluid '>
      <form method='get'>
        <input
          className='search'
          type='text'
          name='cityName'
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder='Enter the City Name'
        />
        <button
          type='submit'
          className='btn btn-dark btn-lg search-btn'
          onClick={handleOnClick}
        >
          Search
        </button>
      </form>

      <div>{currentState.data}</div>
    </div>
  )
}

export default App
