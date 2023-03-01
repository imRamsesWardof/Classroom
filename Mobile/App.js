import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { StyleSheet, View} from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Card, LeftContent } from 'react-native-paper';
import { createContext, useState } from 'react';
import MobileRoutes from './Routes/MobileRoutes'




export default function App() {
  const [jwt, setJwt] = useContext()
  const [role, setRole] = useContext()
  const AuthContext = createContext(jwt, setJwt, role, setRole)
  return (
    <PaperProvider>
      <MobileRoutes />
    </PaperProvider>
  );
}


AppRegistry.registerComponent(App, () => Main);