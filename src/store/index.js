import { applyMiddleware, compose, createStore } from 'redux'
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import createSagaMiddleware from 'redux-saga'
import tracking from '../middlewares/tracking'
import reducers from '../reducers'
import AppSagas from '../sagas'


const sagaMiddleware = createSagaMiddleware()
const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav)
const middlewares = [tracking, sagaMiddleware, navMiddleware]

export const addListener = createReduxBoundAddListener('root')

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancers = composeEnhancers(applyMiddleware(...middlewares))

  const store = createStore(reducers, enhancers)
  sagaMiddleware.run(AppSagas)

  return { store }
}
