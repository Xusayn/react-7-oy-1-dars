import React, { useCallback, useEffect, useState } from 'react'
import './Teachers.scss'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { Button, Typography } from '@mui/material'
const Teachers = ({loading,data,error}) => {

  const [search,setsearch]=useState('')
  const [loadingg,setloadingg]= useState(false)
  const [dataa,setdataa]= useState([])
  const [errorr,seterrorr]= useState(false)

  const fetchget= async()=>{
      setloadingg(true)
      try {
      const res=await axios.get(`http://localhost:3000/teachers`)
      const dataa=await res.data
      setdataa(dataa)
      } catch (err) {
          seterrorr(err)
      }finally{
          setloadingg(false)
      }
  }

  useEffect(()=>{
      fetchget()
  },[])



const [teacher,setteacher]=useState([])





  const handldel= async(id)=>{
      const del=await axios.delete(`http://localhost:3000/teachers/${id}`)
      fetchget()
    }
    
 
  
  return (
    
    <div>
      <NavLink to='/addt'><Button variant='contained'>Add teacher...</Button></NavLink>
     

    
      {loadingg?<><h1>Loading</h1></>:null}


      {/* search */}
      <input className='inppp' onChange={(e)=>setsearch(e.target.value)} placeholder='Search...' type="text" />
  {dataa?dataa.filter((d)=>{
    if(search===''){
        return d
    }else if(d.firstname.toLowerCase().includes(search.toLowerCase())){
        return d
    }else if(d.lastname.toLowerCase().includes(search.toLowerCase())){
      return d
    }
    
}) 
      .map((tc)=>(
          <ul key={tc.id} className="st">
             <Typography variant='h5'>ID : {tc.id}</Typography>
            <Typography variant='h5'>{tc.firstname}</Typography>
            <Typography variant='h5'>{tc.lastname}</Typography>
            <Typography variant='h5'>N{tc.groups}</Typography>
          <i className="fa-solid fa-pen-to-square"></i>
          <i onClick={()=>handldel(tc.id)} className="fa-solid fa-trash"></i>
        </ul>
        )):null}
        {errorr?<><h1>ERROR!</h1></>:null}
    </div>
  )
}

export default Teachers
