import React, { Component } from 'react'
import { BackHandler, View } from 'react-native'
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Home from '../components/Home'
import Detail from '../components/Detail'
import { addListener } from '../store'

export const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: Detail }
  },
  {

  },
)

class AppWithNavigationState extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props
    if (nav.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  };


  render() {
    const { dispatch, nav } = this.props
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
      addListener
    })

    return (
      <View style={{ flex: 1 }}>
        <AppNavigator navigation={navigation} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
