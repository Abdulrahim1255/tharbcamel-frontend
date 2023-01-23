import React from 'react'
import Header from '../Header/Header'
import "./PreviousReports.scss"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TextField,Button,IconButton } from '@mui/material'
import TwoBDialog from '../utils/TwoBDialog'
import axios from 'axios'
import {connect} from 'react-redux'
function PreviousReports(props) {
  const [allReports,setAllReports] = React.useState([])
  const [searchText,setSearchText]=React.useState("")
  const [open,setOpen]=React.useState(false)
  const [singleReport,setSingleReport]=React.useState(null)

  const getAllReports = ()=>{
    axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/report/getAllReports`,{headers:{token:props.user.user}})
    .then(res=>{
      setAllReports(res.data.result)
    })
  }

  React.useEffect(()=>{
    getAllReports()
  },[])

  const handleSearch = ()=>{
    axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/report/searchReport`,{reportNumberString:searchText},{headers:{token:props.user.user}})
    .then(res=>{
      console.log(res)
      if(res.data.result){
        setAllReports([res.data.result])
      }
    })
  }

  const handleSubmit = ()=>{
    axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/report/deleteReport`,{reportId:singleReport._id},{headers:{token:props.user.user}})
    .then(res=>{
      console.log(res)
      setOpen(false)
      getAllReports()
    })
  }

  return (
    <div>
      <Header id="3" />
      <TwoBDialog 
      open={open}
      setOpen={setOpen}
      handleSubmit={handleSubmit}
      title="Delete Report"
      description="Are you sure you want to delete this report"
      leftButton="Cancel"
      rightButton="Delete"
      />
      <section className="previous-reports">
        <h1>Previous Reports</h1>
        <div className="search-bar-div row mb-5 mx-auto align-items-center">
          <div className="col-10">
            <TextField onChange={(e)=>setSearchText(e.target.value)} variant='outlined'fullWidth id="outlined-basic" label="Enter Report Number" />
          </div>
          <div className="col-2">
            <Button onClick={()=>handleSearch()} variant="contained">Search</Button>
          </div>
        </div>
        <table className="ui celled table">
        <thead>
          <tr><th>Report Name</th>
          <th>Work Order ID</th>
          <th>Date Created</th>
          <th>Date Updated</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr></thead>
        <tbody>
          {
            allReports.length>0&&allReports.map((item,index)=>(
              <tr key={index}>
              <td>{item.reportNumberString}</td>
              <td>{item.workOrder.initials}-B{item.workOrder.incrementalValue}</td>
              <td>{item.createdAt}</td>
              <td>{item.updatedAt}</td>
              <td><IconButton onClick={()=>props.history.push("/generatereport",item)}><EditIcon /></IconButton></td>
              <td><IconButton onClick={()=>{
                setOpen(true)
                setSingleReport(item)
              }} color="error"><DeleteOutlineIcon /></IconButton></td>
            </tr>
            ))
          }

        </tbody>
      </table>
      </section>
    </div>
  )
}
const mapStateToProps = ({EventUser})=>{
  return {
      user:EventUser
  }
}
export default connect(mapStateToProps)(PreviousReports)