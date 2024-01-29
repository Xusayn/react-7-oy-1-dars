import React, { useState } from 'react'
import './Students.scss'
import axios from 'axios'
import getax from '../../hooks/useaxios'
import { NavLink } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
const Students = () => {

    const handldelete= async(id)=>{
     try {
      const del=await axios.delete(`http://localhost:3000/students/${id}`)
      console.log(id);
     } catch (error) {
      console.log(error);
     }
    }

  const {loading,data,error}=getax(`http://localhost:3000/students`)
  return (
    <div>
     <NavLink to='/adds'> <Button  variant='outlined'>Add student...</Button></NavLink>
      {loading?<><h1 className='blue'>Loading...</h1></>:null}
      
         
          {data.map((st)=>(
             <ul key={st.id} className="st">
                 <Typography variant='h5'>{st.firstname}</Typography>
                <Typography variant='h5'>{st.lastname}</Typography>
                <Typography variant='h5'>{st.group}</Typography>
                <i className="fa-solid fa-pen-to-square"></i>
                <i onClick={()=>handldelete(st.id)} className="fa-solid fa-trash"></i>
              </ul>
      ))}
      {error?<><h1 className='red'>ERROR!</h1></>:null}
          
    </div>
  )
}

export default Students
