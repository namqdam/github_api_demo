import { actionTypes as types } from '../actions/person'

const initialState = {
  avatar_url: undefined,
  name: undefined,
  location: undefined
}

const reducerMap = {
  [types.UPDATE_PROFILE]: ({ avatar_url, name, location }, state) =>
    (
      {
        ...initialState,
        avatar_url,
        name,
        location
      }
    )
}

const personReducer = (state = initialState, action) => {
  const newState = reducerMap[action.type]
    ? reducerMap[action.type](action.payload, state)
    : state
  return newState
}

export default personReducer
