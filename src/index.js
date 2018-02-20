import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import axios from 'axios'
import { Provider } from 'react-redux'

import configureStore from './store'
import AppWithNavigationState from './navigators/AppNavigator'

if (__DEV__) {
  axios.interceptors.request.use((request) => {
    console.log('Starting Request', request)
    return request
  })

  axios.interceptors.response.use((response) => {
    console.log('Response:', response)
    return response
  })
}

export default class App extends Component {
  constructor(props) {
    super(props)
    const { store } = configureStore()
    this.state = { store }
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true)
  }

  render() {
    if (!this.state.store) { return null }
    return (
      <Provider store={this.state.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
