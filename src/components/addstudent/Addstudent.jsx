import React, { useState } from 'react'
import "./Addstudent.scss"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import getax from '../../hooks/useaxios'
import { Button, Stack, TextField } from '@mui/material'
const Addstudent = () => {
  const [student,setstudent]=useState([{
    firstname:'',
    lastname:'',
    group:''
  }])

  const adds= async()=>{
    try {
      const resp= await axios.post(`http://localhost:3000/students`, student)
    } catch (error) {
      console.log(error); 
    }
  }

  

  return (
    <div className='d'>
      <Stack className='stt'>
        <TextField className='inp' onChange={(e)=>setstudent({...student,firstname:e.target.value})} label="FirstName"/>
        <TextField className='inp' onChange={(e)=>setstudent({...student,lastname:e.target.value})} label="LastName"/>
        <TextField className='inp' onChange={(e)=>setstudent({...student,group:e.target.value})} label="Group"/>
        <NavLink to='/students'><Button onClick={adds}  variant='outlined'>Add student...</Button></NavLink>

      </Stack>
         
    </div>
  )
}

export default Addstudent
