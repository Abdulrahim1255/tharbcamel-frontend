import React from 'react'
import "./Home.scss"
import Header from './Header/Header'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
function Home(props) {
    return (
        <div className="home-head">
           <h1 className="">THARB CAMEL HOSPITAL</h1>
           <p className="sub-head">LogIn to Access Data Entry Mode</p>
           <Button onClick={()=>props.history.push("/tharbprojectgr")} className="m-3" sx={{fontSize:18}} variant="contained">Breeding farm project</Button>
           <Button onClick={()=>props.history.push("/generatereport")} className="m-3" sx={{fontSize:18}} variant="outlined">Tharb Hospital</Button>
           <div style={{textAlign:"center"}}>
                <Link to="/olduploads">View Old Data</Link>
           </div>
           <div className="content-div row m-auto justify-content-between">
                <div className="col-3">
                    <h2>About Us</h2>
                    <p>Quis esse excepteur occaecat adipisicing occaecat dolore id exercitation voluptate cillum. Dolor labore sint pariatur consectetur enim sint fugiat in. Velit do voluptate dolore labore aliqua ex excepteur in deserunt officia aute minim nisi. Cupidatat sunt cillum minim duis consectetur exercitation ad veniam irure aliquip. Eiusmod enim reprehenderit aute et. Mollit voluptate tempor nostrud cillum nulla nisi proident qui.</p>
                </div>
                <div className="col-3">
                    <h2>Workflow</h2>
                    <p>Quis esse excepteur occaecat adipisicing occaecat dolore id exercitation voluptate cillum. Dolor labore sint pariatur consectetur enim sint fugiat in. Velit do voluptate dolore labore aliqua ex excepteur in deserunt officia aute minim nisi. Cupidatat sunt cillum minim duis consectetur exercitation ad veniam irure aliquip. Eiusmod enim reprehenderit aute et. Mollit voluptate tempor nostrud cillum nulla nisi proident qui.</p>
                </div>
           </div>
        </div>
    )
}

export default Home
