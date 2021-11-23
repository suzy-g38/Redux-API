import getData from './getData'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
  getData,
})
//const store = createStore(rootReducer, applyMiddleware(thunk));

//export default store
export default rootReducer
