import * as React from "react";
import { StyleSheet, View, Text, Icon } from 'react-native';
import Statistics from '../Views/Statistics'
import Top5 from '../Views/Top5'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
export const StatisticsRoutes = (props) => {
  return (
    <View style={styles.container}>
        <Tab.Navigator>
            <Tab.Screen name="Top5" component={Top5}></Tab.Screen>
            <Tab.Screen name="UserData" component={Statistics}></Tab.Screen>
        </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

