import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { VictoryChart, VictoryLabel, VictoryStack, VictoryLine, VictoryAxis, VictoryTooltip } from 'victory-native';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Routes/MobileRoutes';
import { SERVER_IP } from "@env";
import { timeFormat } from 'd3-time-format';
const formatDate = timeFormat('%e %B'); // Define el formato de fecha

export default function ClassProgress() {
    const { auth } = useContext(AuthContext)
    const [Class, setClassProgress] = useState([])
    useEffect(() => {
        const route = `${SERVER_IP}/Mobile/GetClassProgress`
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
                setClassProgress(data.map((item, index) => ([
                    {
                        x: Number(item.Startdate),
                        y: item.Title,
                        label: ["S", item.Startdate]
                    },
                    {
                        x: Number(item.Enddate),
                        y: item.Title,
                        label: ["E", item.Enddate]
                    }]
                )))
            })
            .catch(error => {
                alert(error);
            });
    }, [])

    useEffect(() => {
        console.log(Class);
    }, [Class])

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="Progreso en las clases (Mes Actual)" />
                <Card.Content style={styles.card}>
                    <VictoryChart width={350}
                        domain={{ x: [0, 30], y: [0,5] }}>
                        <VictoryLabel
                            x={225} y={10}
                            textAnchor="middle"
                        />
                        <VictoryAxis
                        />
                        <VictoryAxis dependentAxis
                        />
                        {Class.map((element) => (
                            <VictoryLine
                                style={{
                                    data: { stroke: "#c43a31" },
                                    parent: { border: "4px solid #ccc" }
                                }}
                                data={element}
                            />
                        ))}
                    </VictoryChart>
                </Card.Content>
                <Card.Actions>
                </Card.Actions>
            </Card>
        </View>
    )
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

