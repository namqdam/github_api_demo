import { StatusBar } from 'react-native'

const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

// DO SOME TRACKING STUFFS HERE
const changeState = {
  Default: () => { }
}

const tracking = ({ getState }) => next => (action) => {
  const currentScreen = getCurrentRouteName(getState().nav)
  const result = next(action)
  const nextScreen = getCurrentRouteName(getState().nav)

  if (Object.prototype.hasOwnProperty.call(changeState, nextScreen)) {
    changeState[nextScreen]()
  } else {
    changeState.Default()
  }

  return result
}

export default tracking
