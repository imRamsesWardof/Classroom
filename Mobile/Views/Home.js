import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Card, Text } from 'react-native-paper';
import { AuthContext } from '../Routes/MobileRoutes'
import { useContext } from 'react';

export default function Home({ navigation }) {
    const { auth, setAuth } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="Bienvenido" subtitle="Classroom" />
                <Card.Content style={styles.card}>
                    <Text variant="bodyMedium">
                        Classroom es una aplicación para cursos, generados por Eje4
                    </Text>
                </Card.Content>
                <StatusBar style="auto" />
                <Card.Actions>
                    {(auth?.role === "Admin")
                        ?
                        (<Button onPress={() => navigation.navigate('Estadisticas')}>Ver Estadisticas</Button>)
                        :
                        (<Button onPress={() => navigation.navigate('Login')}>Login</Button>)}
                </Card.Actions>
            </Card>
        </View>

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

