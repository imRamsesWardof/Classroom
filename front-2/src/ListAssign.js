import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import Select from 'react-select'



export default function ListAssign() {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectionModel, setSelectionModel] = useState([])
  const [dataSelect, setDataSelect] = useState([])
  const [Url,setUrl]=useState([])


  
   useEffect(()=>{
    fetch('/Student/Get')

    .then((response) => response.json())
    .then((data) => {

      const columns = [
        { field: 'Name', headerName: 'Nombre' },
        { field: 'Username', headerName: 'Email' },
        { field: 'Date', headerName: 'Fecha' },
      ]
      const newdata = []
      for (let key in data) {
        if(data[key].IsActive.data[0]===1){

        newdata.push({ Id: data[key].Id, Name: data[key].Name, Username: data[key].Username, Date: data[key].Date })
        }
      }


      setColumns(columns);
      setRows(newdata);
    });
    
    fetch('/Class/Get')
.then((response) => response.json())
.then((data) => {
  
  const dataSelect = data[0].map((item) => ({
    label: item.name,
    value: item.value,
  }));
   
  setDataSelect(dataSelect)
  
})
.catch((error) => {
  console.error(error)
})
   },[])
    
    


  

const setIdClass=(event)=>{
  console.log(event.value)
 let  newUrl='/Class/Assign/'+event.value
  setUrl(newUrl)
}

  const handleEnviarSeleccionadosClick = () => {
    fetch(Url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectionModel)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(`Error al enviar los datos al servidor: ${error}`);
      });
  }
  
  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Button variant="contained" color="primary" onClick={handleEnviarSeleccionadosClick}>
          Asignar seleccionados
        </Button>
        <Select onChange={setIdClass} options={dataSelect} />
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        getRowId={(row) => row.Id}
        disableSelectionOnClick
        onSelectionModelChange={(newSelectionModel) => {
          console.log(newSelectionModel);
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}

      />
    </div>
  );
}
