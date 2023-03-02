import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput, Card } from 'react-native-paper';
import { useState, useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigate } from "react-router-native";
import { AuthContext } from '../App'


export default function Login() {
    const { setAuth } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [disableLogin, setDisableLogin] = useState(true)
    const Navigate = useNavigate()
    const loginAPI = () => {
        const payload = {
            Username: username,
            Password: password
        };
        fetch('http://localhost:4000/LoginMobile', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                'mode': 'CORS'
            }
        })
            .then(response => {
                if (!response.ok) {
                    alert(response.error)
                }
                setAuth({
                    jwt: response.Jwt,
                    role: response.Role
                })
                Navigate('/Estadisticas')
            }

            )
    }
    useEffect(() => {
        if (username.trim() !== '' && password.trim() !== '') {
            setDisableLogin(false)
        }
        else {
            setDisableLogin(true)
        }
    }, [username, password])
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Title title="Login" subtitle="Ingresa los Datos" />
                    <Card.Content style={styles.card}>
                        <TextInput
                            label="Email" 
                            style={styles.textinput}
                            value={username}
                            onChangeText={email => { setUsername(email) }}>
                        </TextInput>
                        <TextInput
                            styles={styles.textinput}
                            value={password}
                            secureTextEntry={showPassword}
                            label="Contraseña"
                            onChangeText={password => { setPassword(password) }}
                            right={<TextInput.Icon icon="eye" onPress={e => setShowPassword(!showPassword)} />}
                        >
                        </TextInput>
                    </Card.Content>


                    <StatusBar style="auto" />
                    <Card.Actions>
                        <Button disabled={disableLogin} onPress={() => loginAPI()}>Login</Button>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '100%',
        minHeight: '100%',
        backgroundColor: '#000',
        margin: 'auto',
        padding: 5
    },
    textinput: {
        marginTop: 10,
        marginBottom: 20 
    },
});

