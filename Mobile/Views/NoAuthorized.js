import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Card, Text } from 'react-native-paper';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigate } from "react-router-native";


export default function NoAuthorized() {
    const Navigate = useNavigate()
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Title title="No autorizado" />
                    <Card.Content style={styles.card}>
                        <Text variant="bodyMedium">
                            Este contenido es sólo para administradores.
                        </Text>
                    </Card.Content>


                    <StatusBar style="auto" />
                    <Card.Actions>
                        <Button onPress={()=>Navigate('/Login')}>Login</Button>
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

