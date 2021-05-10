import React, { useState, useEffect, useContext } from "react";
import './App.css';
import { CamerasDataContext } from "./context";
import EventMoreData from './listItems'
import Moment from 'react-moment';
import {Card,Container,Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
function MoreData() {
   const [data, setData] = useState(['Cams'])
  useEffect(() => {
    const fetchData = async () => {
    const result =  await fetch('http://10.10.10.55:3001/cameras/cameraList')
      .then((response) => response.json()
        );
      setData(result)
      
    }
    setInterval(() => {
      fetchData()
    }, 5000);
    fetchData()
  },[])
  return (
    <>
      <div><ul>
        {data.map(cam => (
          console.log(cam.camsOnlineStatus.cam1),
            <li>{<Moment format="MM/DD/YYYY @ HH:MM">{cam.lastCheckIn}</Moment>}</li>
          ))}
      </ul></div>
    </>
  )
}

function App() {

  return (
    
    <React.Fragment>
    
          
            <MoreData/>
            <EventMoreData/>
          
        
     
    </React.Fragment>
  )
}


export default App