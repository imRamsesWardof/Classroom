import * as React from "react";
import { NativeRouter, Routes, Route, Outlet } from "react-router-native";
import { StyleSheet, View, Text, Icon } from 'react-native';
import Login from '../views/Login'
import NoAuthorized from '../views/NoAuthorized'
import Statistics from '../views/Statistics'
import Home from '../views/Home'
import LogOut from '../components/LogOut'
import { useContext, createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

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
              <Drawer.Screen name="Estadisticas" component={Statistics} />
              
            </Drawer.Group>)
        }
      </Drawer.Navigator>
    </NavigationContainer>
      </AuthContext.Provider>
  );
}
