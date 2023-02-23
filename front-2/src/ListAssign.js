import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton'
import { DataGrid } from '@mui/x-data-grid';
import {Button} from '@mui/material';
import Select from 'react-select'



export default function ListAssign({ userList }) {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectionModel, setSelectionModel] = useState([])
  const [dataSelect,setDataSelect] = useState([])
  

  let url = '';
  useEffect(() => {
    
    fetch('/Student/Get')
      .then((response) => response.json())
      .then((data) => {
        
        const columns = [
          { field: 'Name', headerName: 'Nombre' },
          { field: 'Username', headerName: 'Email' },
          { field: 'Date', headerName: 'Fecha' },
        ]
         const newdata=[]
       for(let key in data){
          newdata.push({Id:data[key].Id, Name:data[key].Name,Username:data[key].Username, Date:data[key].Date})
       }

        /*columns.push({
          field: null,
          headerName: "Acciones",
          sortable: false,
          filterable: false,
          disableColumnMenu: true,
          
          width: 120,
          renderCell: (params) => {
            const row = params.row;
            return (
              <div>

           <DeleteModal data={row}/>
           <UserData data ={row}/>
              </div>
            );
          },
        });*/

        setColumns(columns);
        setRows(newdata);
      });
  }, [userList]);



  const handleEnviarSeleccionadosClick = () => {
    fetch( url , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectionModel)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Respuesta del servidor: ${data}`);
      })
      .catch((error) => {
        console.error(`Error al enviar los datos al servidor: ${error}`);
      });
  }
   let selectClassUrl =''
  fetch(selectClassUrl,{method:'post'})
  .then((response)=>{
    response.json()
  })
  .then((data)=>{
  setDataSelect(data)
  })


  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Button variant="contained" color="primary" onClick={handleEnviarSeleccionadosClick}>
          Asignar seleccionados
        </Button>
        <Select options={dataSelect}/>
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
