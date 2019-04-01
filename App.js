import React from 'react'

import HomeScreen from './screens/homeScreen'
import LyricsScreen from './screens/lyricsScreen'

import {createStackNavigator, createAppContainer} from 'react-navigation'


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Lyrics: LyricsScreen
},
{
  defaultNavigationOptions:{
    header: null
  }
}
)

export default createAppContainer(AppNavigator)
