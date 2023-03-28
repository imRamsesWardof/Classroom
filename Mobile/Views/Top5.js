import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
  
export default function Top5() {
    return (
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Title title="Bienvenido"  subtitle="Top5"/>
                    <Card.Content style={styles.card}>
                        <Text variant="bodyMedium">
                            Bienvenidos a las Estadísticas, Top5
                        </Text>
                    </Card.Content>
                    <Card.Actions>
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

