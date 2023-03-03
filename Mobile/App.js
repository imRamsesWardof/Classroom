import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { StyleSheet, View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Card, LeftContent } from 'react-native-paper';
import { createContext, useState } from 'react';
import MobileRoutes from './Routes/MobileRoutes'

export const AuthContext = createContext(null);

export default function App() {
  const [auth, setAuth] = useState({})
  return (
    <PaperProvider>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <MobileRoutes />
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent('Main', () => App);

