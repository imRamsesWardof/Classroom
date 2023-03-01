import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Card } from 'react-native-paper';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigate } from "react-router-native";


export default function NoAuthorized() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Title title="No autorizado" subtitle="No tiene los permisos suficientes para entrar a la página" />
                    <Card.Content style={styles.card}>
                        <TextInput
                            label="Email" style={styles.text}>
                        </TextInput>
                    </Card.Content>


                    <StatusBar style="auto" />
                    <Card.Actions>
                        <Button onPress={()=>Navigate('/Estadisticas')}>Login</Button>
                    </Card.Actions>
                </Card>
            </View>
            </SafeAreaView>
        
    );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'skyblue',
        margin: 'auto'
    },
    card: {
        margin: 'auto',
        backgroundColor: '#fff',
        minWidth: '80%'
    },
    cardBody: {
        
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
        minHeight: '100%',
        backgroundColor: '#000',
        margin: 'auto'
    },
    textinput: {
        flex: 1
    },
});

