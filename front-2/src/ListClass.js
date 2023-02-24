import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteModal from './DeleteModal'
import { Link } from 'react-router-dom';
import EDIT from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton'
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';



 export default function ActualList({ userList }) {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectionModel, setSelectionModel] = useState([])
  const [options,setOptions] =useState([])
  const [serch,setSerch]=useState(false)
  
 const HandleUpdate=()=>{
 setSerch(true)
}
  useEffect(() => {
    let url = '';
    let main_route = '/Admin/'
    let role = 'Classes'

    const columns = [
      
      { field:"Name" , headerName: "Nombre", },
      
    ];


    fetch('/Class/Get')
      .then((response) => response.json())
      .then((data) => {
       console.log(data)
      const rows=[];
      for(let key in data){
       

          rows.push ({key:data[0][key].value, Name:data[0][key].name })
        

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
               to={ main_route+role+'/Details/'+row.key} 
             ><EDIT/></IconButton>
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

        
        setColumns(columns);
        setRows(rows);
      });
      
  }, []);
  
  
  
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