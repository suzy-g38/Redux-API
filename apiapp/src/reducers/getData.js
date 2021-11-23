import {
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,
  LOAD_USERS_SUCCESS,
} from '../actions/index'

const initialState = {
  data: [],
  loading: false,
  error: '',
}

const getData = (state = initialState, action) => {
  console.log(initialState)
  switch (action.type) {
    case LOAD_USERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
      }
    }
    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      }
    }
    case LOAD_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    }
    default:
      console.log('default')
      return { ...state }
  }
}

export default getData
