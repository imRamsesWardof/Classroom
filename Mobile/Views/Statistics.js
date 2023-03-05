import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogOut from '../components/LogOut'

export default function Statistics() {
    return (
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Title title="Bienvenido"  subtitle="Classroom"/>
                    <Card.Content style={styles.card}>
                        <Text variant="bodyMedium">
                            Bienvenidos a las Estadísticas
                        </Text>
                    </Card.Content>
                    <Card.Actions>
                        <LogOut/>
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

