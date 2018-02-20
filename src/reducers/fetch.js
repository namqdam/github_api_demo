import { actionTypes as types } from '../actions/fetch'

const initialState = {

}

const fetchReducer = (state = initialState, action) => {
  const [moduleName, actionName] = action.type.split('/')
  if (moduleName !== 'fetch') return state

  const [actionType, actionStatus] = actionName.split(':')

  if (actionStatus === 'PENDING') {
    return {
      ...state,
      [actionType]: {
        isLoading: true
      }
    }
  }
  return {
    ...state,
    [actionType]: {
      isLoading: false
    }
  }
}

export default fetchReducer
