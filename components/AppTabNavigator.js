import * as React from 'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Class from '../Screens/Class'
import HomeScreen from '../Screens/HomeScreen'

export const AppTabNavigator=createBottomTabNavigator({
          Class:{
                    screen:Class,
                    navigationOptions:{
                              tabBarLabel:"Classes"
                    }
          },
          HomeScreen:{
                    screen:Class,
                    navigationOptions:{
                              tabBarLabel:"HomeScreen"
                    }
          }

})