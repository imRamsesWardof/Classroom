import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { StyleSheet, View} from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Card, LeftContent } from 'react-native-paper';
import { useState } from 'react';
import Login from './Login'




export default function App() {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
}


AppRegistry.registerComponent(App, () => Main);