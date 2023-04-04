import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button, TextInput, Card } from 'react-native-paper';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Routes/MobileRoutes'
import { SERVER_IP } from "@env"

export default function Login( {navigation} ) {
    const { auth, setAuth } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [disableLogin, setDisableLogin] = useState(true)

    useEffect(() => {
        console.log(auth)
        console.log(SERVER_IP)
    }, [auth])
    
    const loginAPI = () => {
        const payload = {
            Username: username,
            Password: password
        };
        const route = `${SERVER_IP}/LoginMobile`
        console.log(route)
        fetch(route, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                'mode': 'CORS'
            }
        })  
        .then(response => {
            console.log(response)
            if (!response.ok) {
              return response.json()
                .then(error => Promise.reject(`${response.status} ${response.statusText}: ${error.message}`));
            }
            return response.json();
          })
          .then((data) => {
            setAuth({ role: data.role, token: data.token })
            navigation.navigate('Estadisticas')
        })
          .catch(error => {
            console.log(error)
            alert(error);
          });
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>

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
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

    );
}


const styles = StyleSheet.create({
    container: {
        position: 'relative', 
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

