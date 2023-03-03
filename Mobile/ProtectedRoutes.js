import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput, Card } from 'react-native-paper';
import { useState, useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigate, Outlet } from "react-router-native";
import { AuthContext } from './App'
import Statistics from './Views/Statistics'
import NoAuthorized from './Views/NoAuthorized'


export default function ProtectedRoutes() {
    const { auth } = useContext(AuthContext)
    return (
        (auth.role === "Admin") ? <Outlet/> : <NoAuthorized/>
    )
}

