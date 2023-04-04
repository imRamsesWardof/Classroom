import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { VictoryChart, VictoryLabel, VictoryStack, VictoryBar, VictoryAxis, VictoryTooltip } from 'victory-native';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Routes/MobileRoutes';
import { SERVER_IP } from "@env"

export default function AC_HW() {
    const { auth } = useContext(AuthContext)
    const [Completed, setCompleted] = useState([])
    const [Assigned, setAssigned] = useState([])
    const [maxRange, setMaxRange] = useState(0)
    useEffect(() => {
        const route = `${SERVER_IP}/Mobile/GetAssignedCompletedHW`
        fetch(route, {
            method: 'GET',
            headers: {
                'mode': 'CORS',
                'Authorization': `BEARER ${auth.token}`
            }
        })
            .then(response => {
                const data = response.json()
                if (!response.ok) {
                    return Promise.reject(`${response.status} ${response.statusText}`);
                }
                return data;
            })
            .then((data) => {
                
                setCompleted(data.map(item => ({
                    x: item.Title,
                    y: item.Completed,
                    label: ["Completed", item.Completed]
                })))

                setAssigned(data.map(item => ({
                    x: item.Title,
                    y: item.Assigned - item.Completed,
                    label: ["Assigned", item.Assigned]
                })))
            })
            .catch(error => {
                alert(error);
            });
    }, [])

    useEffect(() => {
        setMaxRange(Math.max(...Assigned.map((datum) => datum.y)))
    }, [Assigned])

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="Tareas Asignadas y Completadas" />
                <Card.Content style={styles.card}>
                    <VictoryChart width={325}
                        domain={{ x: [0, 3], y: [0, maxRange+6] }}>
                        <VictoryLabel 
                            x={225} y={10}
                            textAnchor="middle"
                        />
                        <VictoryAxis
                            dependentAxis orientation="left"
                            tickFormat={(x) => (x)} label="NÚMERO DE TAREAS" PADDING={0}
                        />
                        <VictoryAxis 
                            tickValues={[1, 2, 3, 4]} label="CLASES"
                        />
                        <VictoryStack
                            colorScale={"warm"} domainPadding={{ x: 0 }}   
                        >
                            <VictoryBar 
                                data={Assigned} labelComponent={<VictoryLabel dy={0}/>}
                            />
                            <VictoryBar  labelComponent={<VictoryTooltip/>}
                                data={Completed}
                            />
                        </VictoryStack>
                    </VictoryChart>
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
        maxWidth: '80%',
    },
    cardBody: {
        flex: 1,
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

