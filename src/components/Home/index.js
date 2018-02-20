import React, { Component } from 'react'
import { TouchableHighlight, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { actions } from '../../actions'

const topFive = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh']

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTitleStyle: {
      color: 'white'
    }
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 8 }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>
          Top 5 GitHub Users
        </Text>
        <Text style={{ fontSize: 13, marginVertical: 12 }}>
          Tap the username to see more information
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {topFive.map((el, index) => (
            <TouchableHighlight
              key={`${el}_${index}`}
              onPress={() => {
                this.props.navDetail({ username: el })
              }}
              underlayColor="transparent"
            >
              <View style={{
                paddingHorizontal: 8, paddingVertical: 4, backgroundColor: '#2979FF', borderRadius: 3, marginRight: 8, marginBottom: 8
              }}
              >
                <Text style={{ fontSize: 14, color: 'white' }}>
                  {el}
                </Text>
              </View>
            </TouchableHighlight>
          ))
          }
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  navDetail: ({ username }) => dispatch(actions.navDetail({ username }))
})

export default connect(null, mapDispatchToProps)(Home)
