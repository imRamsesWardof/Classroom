import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Card, LeftContent } from 'react-native-paper';
import { useState } from 'react';
import {
    SafeAreaView
  } from 'react-native-safe-area-context';

export default function Login() {
    const [showPassword, setShowPassword] = useState(true)
    return (
        <SafeAreaView>
            <View styles={styles.container}>
                <Card >
                    <Card.Title title="Login" subtitle="Ingresa los Datos" />
                    <Card.Content>
                        <TextInput
                            label="Email">
                        </TextInput>
                        <TextInput
                            styles={styles.textinput}
                            secureTextEntry={showPassword}
                            label="Contraseña"
                            right={<TextInput.Icon icon="eye" onPress={e => setShowPassword(!showPassword)} />}
                        >
                        </TextInput>
                        <Button>Login</Button>
                    </Card.Content>


                    <StatusBar style="auto" />
                </Card>
            </View>
            </SafeAreaView>
        
    );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    textinput: {
        width: 20
    },
});

