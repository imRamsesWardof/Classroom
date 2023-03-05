import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoAuthorized from './views/NoAuthorized';
import Statistics from './views/Statistics';
import Home from './views/Home';
import Login from './views/Login';

export const AuthContext = createContext(null);
const Stack = createNativeStackNavigator();

export default function App() {
  const [auth, setAuth] = useState({})
  return (
    
    <PaperProvider>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
          <Stack.Group>
                <Stack.Screen name="Home" component={Home} />
                </Stack.Group>
              {
            (auth?.role !== "Admin") ?
              (<Stack.Group>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="NoAutorizado" component={NoAuthorized} />
              </Stack.Group>)
              :
              (<Stack.Group>
                <Stack.Screen name="Estadisticas" component={Statistics} />
              </Stack.Group>)
            }
            </Stack.Navigator>
          </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}


