import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../navigators/AppNavigator'
import { actionTypes as types } from '../actions/nav'

const back = ({ state, routeName, params }) =>
  AppNavigator.router.getStateForAction(
    NavigationActions.back(),
    state,
  )

const navigate = ({ state, routeName, params }) =>
  AppNavigator.router.getStateForAction(
    NavigationActions.navigate({ routeName, params }),
    state,
  )

const reset = ({ state, routeName, params }) =>
  AppNavigator.router.getStateForAction(
    NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName, params })]
    }),
    state
  )


const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'))

const reducerMap = {
  // default navigate action
  'Navigation/BACK': (state, { routeName, params }) => back({ state, routeName, params }),
  'Navigation/NAVIGATE': (state, { routeName, params }) => navigate({ state, routeName, params }),
  [types.NAV_DETAIL]: (state, { payload }) => navigate({ state, routeName: 'Detail', params: { ...payload } }),
  [types.NAV_HOME]: (state, { payload }) => navigate({ state, routeName: 'Home', params: { ...payload } })
}

const navReducer = (state = initialState, action) => {
  const newState = reducerMap[action.type]
    ? reducerMap[action.type](state, action)
    : state
  return newState
}

export default navReducer
