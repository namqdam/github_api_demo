import { combineReducers } from 'redux'
import fetchReducer from './fetch'
import navReducer from './nav'
import personReducer from './person'

const reducers = combineReducers({
  fetch: fetchReducer,
  nav: navReducer,
  person: personReducer
})

export default reducers
