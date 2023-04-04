import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card} from 'react-native-paper';
import { VictoryChart, VictoryPie, VictoryTheme, VictoryAxis, VictoryLabel, VictoryLegend } from 'victory-native';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Routes/MobileRoutes';
import { SERVER_IP } from "@env"

export default function TotalUsers() {
    const { auth } = useContext(AuthContext)
    const [dataChartUsers, setDataChartUsers] = useState([])
    useEffect(() => {
        const route = `${SERVER_IP}/Mobile/GetTotalUsers`
        console.log(route)
        fetch(route, {
            method: 'GET',
            headers: {
                'mode': 'CORS',
                'Authorization': `BEARER ${auth.token}`
            }
        })
            .then(response => {
                console.log(response)
                const data = response.json()
                if (!response.ok) {
                    return Promise.reject(`${response.status} ${response.statusText}`);
                }
                return data;
            })
            .then((data) => {
                setDataChartUsers(data)
            })
            .catch(error => {
                alert(error);
            });
    }, [])


    return (
        <View style={styles.container}>

            <Card style={styles.card}>
                <Card.Title title="Total de Usuarios"/>
                <Card.Content style={styles.card}>
            <VictoryLabel text="Total de usuarios"
                x={225} y={10}
                textAnchor="middle"
            />
            <VictoryPie
            
                theme={VictoryTheme.material}
                colorScale={["tomato", "orange", "gold"]}
                width={320}
                data={dataChartUsers}
                x="Role"
                y="users"
                
      labelRadius={({ innerRadius }) => innerRadius + 55}
      labelComponent={<VictoryLabel text={({ datum }) => datum.Role + ": " + datum.users} />}
            />
                </Card.Content>
                <Card.Actions>
                </Card.Actions>
            </Card>
        </View>)
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
        minWidth: '80%',
        maxWidth: '80%'
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

