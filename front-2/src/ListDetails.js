import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import DeleteModal from './DeleteModal'
import { Link } from 'react-router-dom';
import EDIT from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton'
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import { useParams } from 'react-router-dom';
import { CardContent, CardHeader } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';


 export default function ListDetails(props) {

  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectionModel, setSelectionModel] = useState([])
  const [options,setOptions] =useState([])
  const [serch,setSerch]=useState(false)
  let id = useParams().id
  console.log(id)
  let route
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)
  const data = location.state 
 
  const HandleUpdate=()=>{
 setSerch(true)
}


  useEffect(() => {

    const columns = [
      { field:"Name" , headerName: "Nombre", },
      { field: "Username" , headerName: "Email", },
    ];


    fetch('/Class/Details/'+id)
      .then((response) => response.json())
      .then((data) => {
       console.log(data)
      const rows=[];
      for(let key in data){
       

          rows.push ({key:data[key].Id, Name:data[key].Name, Username:data[key].Username })
        

      }
    

        setColumns(columns);
        setRows(rows);
      });
      
  }, [serch]);
  
  
  
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