import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'
//import rootReducer from './appReducers'

//export function configureStore(initialState) {
//const middleware = [thunk]
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk))
)
// return store
//}
export default store
