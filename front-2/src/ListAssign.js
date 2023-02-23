import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import Select from 'react-select'



export default function ListAssign({ userList }) {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectionModel, setSelectionModel] = useState([])
  const [dataSelect, setDataSelect] = useState([])


  let url = '';

  useEffect(() => {

    const selectOptions = []
    fetch('/Class/Get')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        for (let key in data) {
          console.log(data[0][key])
          selectOptions.push({
            label: data[0][key].name,
            value: data[0][key].value,
          })
        }

       
        setDataSelect(selectOptions)
      })
      .catch((error) => {
        console.error(error)
      })
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
          newdata.push({ Id: data[key].Id, Name: data[key].Name, Username: data[key].Username, Date: data[key].Date })
        }


        setColumns(columns);
        setRows(newdata);
      });

  }, [userList]);



  const handleEnviarSeleccionadosClick = () => {
    fetch(url, {
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




  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Button variant="contained" color="primary" onClick={handleEnviarSeleccionadosClick}>
          Asignar seleccionados
        </Button>
        <Select options={dataSelect} />
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
