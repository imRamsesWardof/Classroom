import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { VictoryChart, VictoryGroup, VictoryArea } from 'victory-native';
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Routes/MobileRoutes';
import { SERVER_IP } from "@env"
import { Card} from 'react-native-paper';

//CALENDAR LIBRARY
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


export default function Histograma() {

    //TOKEN
    const { auth } = useContext(AuthContext)
    const [dataChart, setDataChart] = useState([])
    useEffect(() => {
        const route = `http://10.0.0.21:4000/Mobile/GetTopStudents`
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
               
            });
    }, [])

    useEffect(() => {
        console.log(dataChart)
    }, [dataChart])

    const handlePointPress = (event, props) => {
        console.log("Point pressed:", props.datum);
      }

      const [stardate, setStartdate] = useState(null)
       const [enddate, setEnddate] = useState(null)

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="Top 5 Clases con más tareas"/>
                <Card.Content style={styles.card}>
                
               {/*  {<Image style={{width: "100%", }} source={require('../assets/miedo.jpg')} />} */}
                {/* <VictoryChart width={400} height={400}>
        <VictoryGroup
          style={{
            data: { strokeWidth: 3, fillOpacity: 0.4 }
          }}
        >
          <VictoryArea
            style={{
              data: { fill: "cyan", stroke: "cyan" }
            }}
            data={[
              { x: "Enero", y: 1 },
              { x: "Febrero", y: 2 },
              { x: "Marzo", y: 4 },
              { x: "Abril", y: 4 },
              { x: "Mayo", y: 7 }
            ]}
          />
          <VictoryArea
            style={{
              data: { fill: "magenta", stroke: "magenta" }
            }}
            data={[
                { x: "Enero", y: 1 },
                { x: "Febrero", y: 0 },
                { x: "Marzo", y: 5 },
                { x: "Abril", y: 1 },
                { x: "Mayo", y: 2}
            ]}
          />
        </VictoryGroup>
      </VictoryChart>

        <View>
            <View style={{backgroundColor: "cyan", width:20, height:10}}></View>
            <Text>Español</Text>
        </View> */}

{/*         SELECTOR DE FECHAS COMPONENTE
 */
 
 }

<Calendar
onDayPress={day => {
  if(stardate === null){
    setStartdate({ [day.dateString] : {
      selected: true, startingDay: true, color: 'green', textColor: 'white'
    }})
    return 0;
  }
  if( enddate ==null){
    setEnddate({ [day.dateString] : {
      selected: true, endingDay: true, color: 'green', textColor: 'white'
    }})
    return 0;
  }
  
  console.log('selected day', day);
  console.log('startDate', stardate);
  console.log('endDate', enddate);
}}
markingType={'period'}
markedDates={{
  stardate,
  enddate

}}
></Calendar>

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

