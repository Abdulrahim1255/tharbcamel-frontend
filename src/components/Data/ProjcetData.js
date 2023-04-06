// import React, { useState } from "react";
// import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
// import axios from "axios";
// // import "./olddata.css";
// import Box from '@mui/material/Box';
// var paper = [];
// const ProjcetData = (props) => {
//   const [data, setData] = useState([]);
//   const accessToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiX2lkIjoiNjNjNjdkM2NjMWY1YWFhNWE2YmIzM2I5IiwiaWF0IjoxNjc0NTY1MzU0fQ.2TwE_3f3HDCiZjOM1V9DsBFWXr5lRls55h3cqNcswqo";
//   const getAllReports = () => {
//     axios
//       .get(
//         // `${process.env.REACT_APP_DEVELOPMENT}/api/reportproject/getAllReports`,
//         `${process.env.REACT_APP_DEVELOPMENT}/api/reportproject/getAllUnwindReports`,
//         { headers: { token: accessToken } }
//       )
//       .then((res) => {
//         setData(res.data.result);
//       });
//   };
//   console.log(data);

//   data.map((item) => paper.push(item));
//   React.useEffect(() => {
//     getAllReports();
//   }, []);

 
 


//      const rows = data.map((row,id) => ({
//       id: id+1,
//       reportNumber: row.reportNumber.initials,
//       workOrder: row.workOrder.initials,
//       // batchArraymicrochip: row.batchArray.map((t)=>(t.microchip)),
//       // atchArrayneck: row.batchArray.map((t)=>t.neck),
   
//     }));

//    const columns = [
//  { field: 'id', headerName: 'Id', width: 70 },
//  { field: 'reportNumber', headerName: 'Report Number', width: 130 },
//  { field: 'workOrder', headerName: 'workOrder', width: 130 },
//  { field: 'Date', headerName: 'Date', width: 130 },

// // { field: 'Microchip', headerName: 'Microchip ', width: 150 },
// // { field: 'Microchip', headerName: 'Microchip',valueGetter:(param)=>param.row.microchip.map(item=><p>{item}</p>),width:150},
// { field: 'BAPAT', headerName: ' BAPAT ', width: 130 },
//  { field: 'BCT',  headerName: 'BCT', width: 150 },
//  { field: 'CELISA',  headerName: 'CELISA', width: 130 },
//  { field: 'JUDGMENT',  headerName: 'JUDGMENT', width: 130 },


// ]

  
//   return (
//    <div>

  


    
 


     
//       <Box sx={{ height: 900, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 100,
//             },
//           },
//         }}
//         pageSizeOptions={[100]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//    </div>
//   );
// };
// export default ProjcetData;

import React, { useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import axios from "axios";
import Box from '@mui/material/Box';
import moment from 'moment'
const ProjcetData = (props) => {
  const [data, setData] = useState([]);
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiX2lkIjoiNjNjNjdkM2NjMWY1YWFhNWE2YmIzM2I5IiwiaWF0IjoxNjc0NTY1MzU0fQ.2TwE_3f3HDCiZjOM1V9DsBFWXr5lRls55h3cqNcswqo";
  const getAllReports = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEVELOPMENT}/api/reportproject/getAllUnwindReports`,
        { headers: { token: accessToken } }
      )
      .then((res) => {
        console.log(res)
          setData(res.data.result);
      });
  };
  console.log(data);

  React.useEffect(() => {
    getAllReports();
  }, []);


   const columns = [
 { field: 'id', headerName: 'Id', width: 70 },
 { field: 'reportNumber', headerName: 'Report Number',valueGetter:(param)=>`${param.row.reportNumber.initials}-${param.row.reportNumber.incrementalValue}`, width: 130 },
 { field: 'workOrder', headerName: 'workOrder', valueGetter:(param)=>`${param.row.workOrder.initials}-${param.row.workOrder.incrementalValue}`, width: 130 },
 
 { field: 'Microchip', headerName: 'Microchip ', valueGetter:(param)=>`${param.row.result.microchip}`, width: 200 },
 { field: 'neck', headerName: 'Neck ', valueGetter:(param)=>`${param.row.result.neck}`, width: 150 },
 // { field: 'Microchip', headerName: 'Microchip',valueGetter:(param)=>param.row.batchArray.map(item=><p>{item.microchip}</p>),width:150},
 { field: 'BAPAT', headerName: ' BAPAT ', valueGetter:(param)=>`${param.row.result.bapat}`, width: 130 },
 { field: 'BCT',  headerName: 'BCT', valueGetter:(param)=>`${param.row.result.bct}`, width: 130 },
 { field: 'CELISA',  headerName: 'CELISA', valueGetter:(param)=>`${param.row.result.celisa}`, width: 130 },
 { field: 'JUDGMENT',  headerName: 'JUDGMENT', valueGetter:(param)=>`${param.row.result.judgement}`, width: 200 },
 {field:"createdAt",headerName:"Created At",valueGetter:(param)=>moment.parseZone(param.value).local().format("DD/MM/YY"),width:150},
]
  
  return (
   <div>

      <Box sx={{ height: 900, width: '100%' }}>
      <DataGrid
        rows={data.map((item,index)=>({...item,id:index}))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        pageSizeOptions={[100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
   </div>
  );
};
export default ProjcetData;