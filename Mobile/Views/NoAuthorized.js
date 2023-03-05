import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Card, Text } from 'react-native-paper';


export default function NoAuthorized( {navigation} ) {
    return (
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
                        <Button onPress={()=>navigation.goBack()}>Regresar</Button>
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

