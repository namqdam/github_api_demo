import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../../actions'

class Detail extends Component {
  static navigationOptions = {
    title: 'Person',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: '#ffffff'
  }

  componentDidMount() {
    const { params: { username } } = this.props.navigation.state
    if (username) {
      this.props.fetchGithubUser({ username })
    }
  }

  render() {
    const { avatar_url, name, location } = this.props.person
    return (
      <View style={{ flex: 1, padding: 8 }}>
        <View style={{ flexDirection: 'row', marginHorizontal: 24 }}>
          <Image source={{ uri: avatar_url }} style={{ height: 48, width: 48, borderRadius: 24 }} />
          <View style={{
            flex: 1,
            marginLeft: 12,
            height: 48,
            justifyContent: 'center',
            borderBottomColor: '#BDBDBD',
            borderBottomWidth: StyleSheet.hairlineWidth
          }}
          >
            <Text style={{ fontSize: 14, fontWeight: '700' }} numberOfLines={1}>{name}</Text>
            <Text style={{ fontSize: 13, color: '#757575' }} numberOfLines={1}>{location}</Text>
          </View>
        </View>

      </View>
    )
  }
}

const mapStateToProps = state => ({
  person: state.person
})

const mapDispatchToProps = dispatch => ({
  fetchGithubUser: ({ username }) => dispatch(actions.fetchGithubUser({ username }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
