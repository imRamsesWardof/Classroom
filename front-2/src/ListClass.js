import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteModal from './DeleteModal'
import { Link } from 'react-router-dom';
import EDIT from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton'



 export default function ActualList({ userList }) {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectionModel, setSelectionModel] = useState([])
  const [options,setOptions] =useState([])
  
 const HandleUpdate=()=>{
  setRows([]);
  setColumns([]);
}
  useEffect(() => {
    let url = '';
    let main_route = '/Admin/'
    let role = ''
    let roleDelete
    const columns = [
      
      { field:"Name" , headerName: "Nombre", },
      { field: "Username" , headerName: "Email", },
    ];
    switch (userList) {
      case 'Teachers':
        url = '/Teacher/Get';
         role = 'Teachers'
         roleDelete='Teacher'
        break;
      case 'Classes':
        url = '/Class/Get';
        role = ''
        break;
      case 'Students':
        url = '/Student/Get';
        role = 'Students'
        roleDelete='Student'
        break;
      default:
        console.error('Valor de prop no válido:'+ userList);
        return;
    }
    
 console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
       console.log(data)
      const rows=[];
      for(let key in data){
        if(data[key].IsActive.data[0]==1){

          rows.push ({key:data[key].Id, Name:data[key].Name, Username:data[key].Username})
        }

      }
     
        columns.push({
          field: null,
          headerName: "Acciones",
          sortable: false,
          filterable: false,
          disableColumnMenu: true,
          width: 120,
          renderCell: (params) => {
            const row = params.row;
            console.log(row)
         
            return (
              <div display='flex'>
           <IconButton component={Link} 
           to={ main_route+role+'/Edit/'+row.key
            } 
            state= {{
                username:row.Username,
                name:row.Name,
                password:''
                
                }} ><EDIT/></IconButton>
              </div>
            );
          },
        });

        /*
        fetch(urlClases,{method:'GET'})
        .then((response)=> response.json())
        .then((data)=>{
          setOptions(data)
        })*/
           

        setColumns(columns);
        setRows(rows);
      });
  }, [userList, columns, rows]);
  
  
  
 /* const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });*/
 

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.key}
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