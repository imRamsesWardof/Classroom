import * as React from "react";
import { StyleSheet, View, Text, Icon } from 'react-native';
import Statistics from '../Views/Statistics'
import Top5 from '../Views/Top5'
import AC_HW from '../Views/AC_HW'
import ClassProgress from '../Views/ClassProgress'
import TotalUsers from '../Views/TotalUsers'
import Histograma from "../Views/Histograma";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
export const StatisticsRoutes = (props) => {
  return (
    <View style={styles.container}>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Statistics}></Tab.Screen>
            <Tab.Screen name="TotalUsers" component={TotalUsers}></Tab.Screen>
            <Tab.Screen name="Top5" component={Top5}></Tab.Screen>
            <Tab.Screen name="Assigned/Completed" component={AC_HW}></Tab.Screen>
            <Tab.Screen name="Class Progress" component={ClassProgress}></Tab.Screen>
            <Tab.Screen name="Histograma" component={Histograma}></Tab.Screen>
        </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

