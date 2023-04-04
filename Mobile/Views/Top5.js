import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryAxis, VictoryLabel, VictoryLegend } from 'victory-native';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Routes/MobileRoutes';
import { SERVER_IP } from "@env"
import { Card} from 'react-native-paper';


export default function Top5() {
    const { auth } = useContext(AuthContext)
    const [dataChart, setDataChart] = useState([])
    const [maxRange, setMaxRange] = useState(0)
    
    useEffect(() => {
        const route = `${SERVER_IP}/Mobile/GetTopStudents`
        console.log(route)
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
                setDataChart(data.map(item => ({
                    ...item,
                    Student_Grade: parseFloat(item.Student_Grade)
                  })))
            })
            .catch(error => {
                alert(error);
            });
    }, [])

    useEffect(() => {
        setMaxRange(Math.max(...dataChart.map((datum) => datum.Homeworks_Done)))
    }, [dataChart])

    const handlePointPress = (event, props) => {
        console.log("Point pressed:", props.datum);
      }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="5 Estudiantes con más tareas"/>
                <Card.Content style={styles.card}>
                <VictoryChart
                width={350}
                theme={VictoryTheme.material}
                domain={{ x: [0, 5], y: [0, maxRange+6] }}
            >

                <VictoryScatter
                    
                    style={{ data: { fill: "#c43a31" } }}
                    size={8}
                    
                    data={dataChart}
                    bubbleProperty="Student_Grade"
                    maxBubbleSize={10}
                    minBubbleSize={5}
                    x="StudentName"
                    y="Homeworks_Done"                
                    labels={({ datum }) => [`${datum.StudentName} (${datum.Homeworks_Done})`, `Promedio: ${datum.Student_Grade}`]}
                    labelComponent={
                      <VictoryLabel angle={-45} textAnchor="middle" size={5}/>
                    }
                    events={[
                        {
                          target: "data",
                          eventHandlers: {
                            onPress: handlePointPress,
                          },
                        },
                      ]}
                />
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={["1o", "2o", "3o", "4o", "5o"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(y) => (`${y}`)}
                />
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
        minWidth: '90%',
        maxWidth: '90%'
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

