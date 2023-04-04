import * as React from "react";
import { StyleSheet, View } from 'react-native';
import Login from '../Views/Login'
import NoAuthorized from '../Views/NoAuthorized'
import Home from '../Views/Home'
import LogOut from '../components/LogOut'
import { useContext, createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StatisticsRoutes } from './StatisticsRoutes'
export const AuthContext = createContext(null);

const DrawerContent = (props) => {
  const { auth } = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <DrawerContentScrollView {...props}>
    {(auth?.role === 'Admin') ? <LogOut /> : <></>}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default function MobileRoutes() {
  const [auth, setAuth] = useState({})
  const Drawer = createDrawerNavigator();
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Group>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Group>
        {
          (auth?.role !== "Admin") ?
            (<Drawer.Group>
              <Drawer.Screen name="Login" component={Login} />
              <Drawer.Screen name="NoAutorizado" component={NoAuthorized} />
            </Drawer.Group>)
            :
            (<Drawer.Group>
              <Drawer.Screen name="Estadisticas" component={StatisticsRoutes} />
              
            </Drawer.Group>)
        }
      </Drawer.Navigator>
    </NavigationContainer>
      </AuthContext.Provider>
  );
}
