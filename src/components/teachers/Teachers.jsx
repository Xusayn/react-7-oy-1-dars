import React, { useCallback, useEffect, useState } from 'react'
import './Teachers.scss'
import getax from '../../hooks/useaxios'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { Button, Typography } from '@mui/material'
const Teachers = () => {

  

const [teacher,setteacher]=useState([])





  const handldel= async(id)=>{
      const del=await axios.delete(`http://localhost:3000/teachers/${id}`)
    }
    
 const {loading,data,error}=getax(`http://localhost:3000/teachers`)
  
  return (
    
    <div>
      <NavLink to='/addt'><Button variant='contained'>Add teacher...</Button></NavLink>
     

    
      {loading?<><h1>Loading</h1></>:null}

        {data.map((tc)=>(
          <ul key={tc.id} className="st">
            <Typography variant='h5'>{tc.firstname}</Typography>
            <Typography variant='h5'>{tc.lastname}</Typography>
            <Typography variant='h5'>{tc.groups}</Typography>
          <i className="fa-solid fa-pen-to-square"></i>
          <i onClick={()=>handldel(tc.id)} className="fa-solid fa-trash"></i>
        </ul>
        ))}
        {error?<><h1>ERROR!</h1></>:null}
    </div>
  )
}

export default Teachers
