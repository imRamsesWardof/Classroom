import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { VictoryChart, VictoryGroup, VictoryArea, VictoryLegend, VictoryLabel, VictoryAxis} from "victory-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Routes/MobileRoutes";
import { SERVER_IP } from "@env";
import { Card } from "react-native-paper";

//CALENDAR LIBRARY
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function Histograma() {
  //TOKEN
  const { auth } = useContext(AuthContext);
  const [dataChart, setDataChart] = useState([]);
  const [datos, setDatos] = useState({
    array: [],
    top1: [],
    top2: [],
    top3: [],
    top4: [],
    top5: [],
  });

  useEffect(() => {
    const route = `http://192.168.118.138:4000/Mobile/GetHistogrma`;
    console.log('HISTOGRAMA', route);
    fetch(route, {
      method: "GET",
      headers: {
        mode: "CORS",
        Authorization: `BEARER ${auth.token}`,
      },
    })
      .then((response) => {
        const data = response.json();
        if (!response.ok) {
          return Promise.reject(`${response.status} ${response.statusText}`);
        }
        return data;
      })
      .then((data) => {
        const color = ["cyan", "red", "yellow", "green", "orange"]
        console.log('DATOS', data);
        const newArray = data.tops.map((tops, i) =>{
          return { name: tops.Title, symbol: { fill: color[i] } }
        })
        setDatos({ array: newArray ,top1: data.top1, top2: data.top2, top3: data.top3, top4: data.top4, top5: data.top5 });

        /* setDataChart(
          data.map((item) => ({
            ...item,
            Student_Grade: parseFloat(item.Student_Grade),
          }))
        ); */
      }).then(() => {})
      .catch((error) => {});
  }, []);

  useEffect(() => {
    console.log("TOP1-----------------", datos.top1);
  }, [datos]);

  const handlePointPress = (event, props) => {
    console.log("Point pressed:", props.datum);
  };

  const [startdate, setStartdate] = useState(null);
  const [enddate, setEnddate] = useState(null);

  const handleDayPress = (day) => {
    if (startdate === null) {
      setStartdate(day.dateString);
    } else if (enddate === null && day.dateString > startdate) {
      setEnddate(day.dateString);
    } else if (enddate !== null) {
      setStartdate(day.dateString);
      setEnddate(null);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Top 3 Clases con más tareas en 2023" />
        <Card.Content style={styles.card}>
          {/*  {<Image style={{width: "100%", }} source={require('../assets/miedo.jpg')} />} */}
          <VictoryChart width={400} height={400}>
          <VictoryLegend x={280} y={0}
              gutter={50}
              style={{title: {fontSize: 20 } }}
              data={datos.array}
            />
            
        <VictoryGroup
          style={{
            data: { strokeWidth: 3, fillOpacity: 0.4}
          }}
          
        >
          <VictoryArea
          
            style={{
              data: { fill: "cyan", stroke: "cyan" }
            }}
            data={datos.top1}
          />
          <VictoryArea
            style={{
              data: { fill: "red", stroke: "red" }
            }}
            data={datos.top2}
          />
          <VictoryArea
            style={{
              data: { fill: "yellow", stroke: "yellow" }
            }}
            data={datos.top3}
          />
          {/* <VictoryArea
            style={{
              data: { fill: "yellow", stroke: "yellow" }
            }}
            data={datos.top4}
          />
          <VictoryArea
            style={{
              data: { fill: "green", stroke: "green" }
            }}
            data={datos.top5}
          /> */}
        </VictoryGroup>
        <VictoryAxis  crossAxis tickLabelComponent={<VictoryLabel angle={-45} y={370} />} />
        <VictoryAxis dependentAxis crossAxis tickLabelComponent={<VictoryLabel angle={0} />} />
      </VictoryChart>

       {/*  <View>
            <View style={{backgroundColor: "cyan", width:20, height:10}}></View>
            <Text>Español</Text>
        </View> */}

          {/*         SELECTOR DE FECHAS COMPONENTE
           */}

          {/* <Calendar
            onDayPress={handleDayPress}
            markedDates={{
              [startdate]: {
                selected: true,
                startingDay: true,
                color: "green",
              },
              [enddate]: { selected: true, endingDay: true, color: "green" },
            }}
            markingType={"period"}
          />

          <View>
            <Text>
              StartDate: {startdate} 
              EndDate:{enddate}
            </Text>
          </View> */}
        </Card.Content>
        <Card.Actions></Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "skyblue",
    margin: "auto",
  },
  card: {
    margin: "auto",
    backgroundColor: "#fff",
    minWidth: "90%",
    maxWidth: "90%",
  },
  cardBody: {
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    minHeight: "100%",
    backgroundColor: "#000",
    margin: "auto",
  },
  textinput: {
    flex: 1,
  },
});
