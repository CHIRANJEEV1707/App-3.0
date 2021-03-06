import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppTabNavigator from './components/AppTabNavigator'

import HomeScreen from './Screens/HomeScreen'

import Class from './Screens/Class'
import Class6 from './Screens/Class6'
import Class7 from './Screens/Class7'
import Class8 from './Screens/Class8'
import Class9 from './Screens/Class9'

import M9 from './Screens/M9'
import S9 from './Screens/S9'
import H9 from './Screens/H9'
import E9 from './Screens/E9'
import SS9 from './Screens/SS9'

import M9C1 from './Screens/M9C1'
import M9C2 from './Screens/M9C2'
import M9C3 from './Screens/M9C3'
import M9C4 from './Screens/M9C4'
import M9C5 from './Screens/M9C5'
import M9C6 from './Screens/M9C6'
import M9C7 from './Screens/M9C7'
import M9C8 from './Screens/M9C8'
import M9C9 from './Screens/M9C9'
import M9C10 from './Screens/M9C10'
import M9C11 from './Screens/M9C11'
import M9C12 from './Screens/M9C12'
import M9C13 from './Screens/M9C13'
import M9C14 from './Screens/M9C14'
import M9C15 from './Screens/M9C15'

import H9C1 from './Screens/H9C1'
import H9C2 from './Screens/H9C2'
import H9C3 from './Screens/H9C3'
import H9C4 from './Screens/H9C4'
import H9C5 from './Screens/H9C5'
import H9C6 from './Screens/H9C6'
import H9C7 from './Screens/H9C7'
import H9C8 from './Screens/H9C8'
import H9C9 from './Screens/H9C9'
import H9C10 from './Screens/H9C10'
import H9C11 from './Screens/H9C11'
import H9C12 from './Screens/H9C12'
import H9C13 from './Screens/H9C13'
import H9C14 from './Screens/H9C14'
import H9C15 from './Screens/H9C15'
import H9C16 from './Screens/H9C16'
import H9C17 from './Screens/H9C17'
import H9C18 from './Screens/H9C18'

import SS9C1 from './Screens/SS9C1'
import SS9C2 from './Screens/SS9C2'
import SS9C3 from './Screens/SS9C3'
import SS9C4 from './Screens/SS9C4'
import SS9C5 from './Screens/SS9C5'
import SS9C6 from './Screens/SS9C6'
import SS9C7 from './Screens/SS9C7'
import SS9C8 from './Screens/SS9C8'
import SS9C9 from './Screens/SS9C9'
import SS9C10 from './Screens/SS9C10'
import SS9C11 from './Screens/SS9C11'
import SS9C12 from './Screens/SS9C12'
import SS9C13 from './Screens/SS9C13'
import SS9C14 from './Screens/SS9C14'
import SS9C15 from './Screens/SS9C15'
import SS9C16 from './Screens/SS9C16'
import SS9C17 from './Screens/SS9C17'
import SS9C18 from './Screens/SS9C18'
import SS9C19 from './Screens/SS9C19'
import SS9C20 from './Screens/SS9C20'

import E9C1 from './Screens/E9C1'
import E9C2 from './Screens/E9C2'
import E9C3 from './Screens/E9C3'
import E9C4 from './Screens/E9C4'
import E9C5 from './Screens/E9C5'
import E9C6 from './Screens/E9C6'
import E9C7 from './Screens/E9C7'
import E9C8 from './Screens/E9C8'
import E9C9 from './Screens/E9C9'
import E9C10 from './Screens/E9C10'
import E9C11 from './Screens/E9C11'
import E9C12 from './Screens/E9C12'
import E9C13 from './Screens/E9C13'
import E9C14 from './Screens/E9C14'
import E9C15 from './Screens/E9C15'
import E9C16 from './Screens/E9C16'
import E9C17 from './Screens/E9C17'
import E9C18 from './Screens/E9C18'
import E9C19 from './Screens/E9C19'
import E9C20 from './Screens/E9C20'
import E9C21 from './Screens/E9C21'

import S9C1 from './Screens/S9C1'
import S9C2 from './Screens/S9C2'
import S9C3 from './Screens/S9C3'
import S9C4 from './Screens/S9C4'
import S9C5 from './Screens/S9C5'
import S9C6 from './Screens/S9C6'
import S9C7 from './Screens/S9C7'
import S9C8 from './Screens/S9C8'
import S9C9 from './Screens/S9C9'
import S9C10 from './Screens/S9C10'
import S9C11 from './Screens/S9C11'
import S9C12 from './Screens/S9C12'
import S9C13 from './Screens/S9C13'
import S9C14 from './Screens/S9C14'
import S9C15 from './Screens/S9C15'

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
     <AppContainer/>
     <AppTabNavigator/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lime',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,

  Class:Class,

  Class6:Class6,
  Class7:Class7,
  Class8:Class8,
  Class9:Class9,

  M9:M9,
  S9:S9,
  H9:H9,
  E9:E9,
  SS9:SS9,

  M9C1:M9C1,
  M9C2:M9C2,
  M9C3:M9C3,
  M9C4:M9C4,
  M9C5:M9C5,
  M9C6:M9C6,
  M9C7:M9C7,
  M9C8:M9C8,
  M9C9:M9C9,
  M9C10:M9C10,
  M9C11:M9C11,
  M9C12:M9C12,
  M9C13:M9C13,
  M9C14:M9C14,
  M9C15:M9C15,

H9C1:H9C1,
H9C2:H9C2,
H9C3:H9C3,
H9C4:H9C4,
H9C5:H9C5,
H9C6:H9C6,
H9C7:H9C7,
H9C8:H9C8,
H9C9:H9C9,
H9C10:H9C10,
H9C11:H9C11,
H9C12:H9C12,
H9C13:H9C13,
H9C14:H9C14,
H9C15:H9C15,
H9C16:H9C16,
H9C17:H9C17,
H9C18:H9C18,

SS9C1:SS9C1,
SS9C2:SS9C2,
SS9C3:SS9C3,
SS9C4:SS9C4,
SS9C5:SS9C5,
SS9C6:SS9C6,
SS9C7:SS9C7,
SS9C8:SS9C8,
SS9C9:SS9C9,
SS9C10:SS9C10,
SS9C11:SS9C11,
SS9C12:SS9C12,
SS9C13:SS9C13,
SS9C14:SS9C14,
SS9C15:SS9C15,
SS9C16:SS9C16,
SS9C17:SS9C17,
SS9C18:SS9C18,
SS9C19:SS9C19,
SS9C20:SS9C20,

E9C1:E9C1,
E9C2:E9C2,
E9C3:E9C3,
E9C4:E9C4,
E9C5:E9C5,
E9C6:E9C6,
E9C7:E9C7,
E9C8:E9C8,
E9C9:E9C9,
E9C10:E9C10,
E9C11:E9C11,
E9C12:E9C12,
E9C13:E9C13,
E9C14:E9C14,
E9C15:E9C15,
E9C16:E9C16,
E9C17:E9C17,
E9C18:E9C18,
E9C19:E9C19,
E9C20:E9C20,
E9C21:E9C21,

S9C1:S9C1,
S9C2:S9C2,
S9C3:S9C3,
S9C4:S9C4,
S9C5:S9C5,
S9C6:S9C6,
S9C7:S9C7,
S9C8:S9C8,
S9C9:S9C9,
S9C10:S9C10,
S9C11:S9C11,
S9C12:S9C12,
S9C13:S9C13,
S9C14:S9C14,
S9C15:S9C15,
});

const AppContainer = createAppContainer(AppNavigator);