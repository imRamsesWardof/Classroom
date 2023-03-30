import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryAxis, VictoryLabel, VictoryLegend } from 'victory-native';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Routes/MobileRoutes';
import { SERVER_IP } from "@env"

export default function Top5() {
    const { auth } = useContext(AuthContext)
    const [dataChart, setDataChart] = useState([])
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
        console.log(dataChart)
    }, [dataChart])

    const handlePointPress = (event, props) => {
        console.log("Point pressed:", props.datum);
      }

    return (
        <View style={styles.container}>
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ x: [0, 5], y: [0, 20] }}
            >
                
    <VictoryLabel text="5 Estudiantes con más tareas"
        x={225} y={10}
        textAnchor="middle"
    />
                <VictoryScatter
                    
                    style={{ data: { fill: "#c43a31" } }}
                    size={8}
                    
                    data={dataChart}
                    bubbleProperty="Student_Grade"
                    maxBubbleSize={10}
                    minBubbleSize={5}
                    x="StudentName"
                    y="Homeworks_Done"                
                    labels={({ datum }) => [`${datum.StudentName}`, `Promedio: ${datum.Student_Grade}`]}
                    labelComponent={
                      <VictoryLabel angle={-45} textAnchor="middle"/>
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
        </View>)
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        margin: 'auto'
    },
});

