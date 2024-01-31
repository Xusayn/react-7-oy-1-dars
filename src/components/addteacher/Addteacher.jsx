import React, { useState } from 'react'
import "./Addteacher.scss"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { Button, Stack, TextField } from '@mui/material'
const Addteacher = ({}) => {
    
    const [ts,setts]=useState([{
        firstname:'',
        lastname:'',
        groups:''
    }])
    
      const addt= async ()=>{
        try {
          const add= await  axios.post(`http://localhost:3000/teachers`,ts)
          const res= await add.data
        } catch (error) {
          console.log(error);
        }
      }
    
  return (
    <div className='addt'>
      <Stack className='stc__of__addteach'>
        <TextField className='inp' onChange={(e)=>setts({...ts,firstname:e.target.value})} label="FirstName"/>
        <TextField className='inp' onChange={(e)=>setts({...ts,lastname:e.target.value})} label="LastName"/>
        <TextField className='inp' onChange={(e)=>setts({...ts,groups:e.target.value})} label="Groups"/>
        <NavLink to='/teachers'><Button onClick={addt} variant='contained'>Add teacher...</Button></NavLink>
      </Stack>
       
    </div>
  )
}

export default Addteacher
