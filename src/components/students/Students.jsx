import React, { useEffect, useState } from 'react'
import './Students.scss'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
const Students = () => {
  const [search,setsearch]=useState('')
  const [loading,setloading]= useState(false)
  const [data,setdata]= useState([])
  const [error,seterror]= useState(false)

  const fetchget= async()=>{
      setloading(true)
      try {
      const res=await axios.get(`http://localhost:3000/students`)
      const dataa=await res.data
      setdata(dataa)
      } catch (err) {
          seterror(err)
      }finally{
          setloading(false)
      }
  }

  useEffect(()=>{
      fetchget()
  },[])








    const handldelete= async(id)=>{
     try {
      const del=await axios.delete(`http://localhost:3000/students/${id}`)
      console.log(id);
      fetchget()
     } catch (error) {
      console.log(error);
     }
    }

 
  return (
    <div>
     <NavLink to='/adds'> <Button  variant='outlined'>Add student...</Button></NavLink>
     {loading?<><h1 className='blue'>Loading...</h1></>:null}


{/* search  */}
  <input className='inppp' onChange={(e)=>setsearch(e.target.value)} placeholder='Search...' type="text" />
  {data?data.filter((d)=>{
    if(search===''){
        return d
    }else if(d.firstname.toLowerCase().includes(search.toLowerCase())){
        return d
    }else if(d.lastname.toLowerCase().includes(search.toLowerCase())){
      return d
    }
}) 
          .map((st)=>(
             <ul key={st.id} className="st">
                <Typography variant='h5'>ID : {st.id}</Typography>
                 <Typography variant='h5'>{st.firstname}</Typography>
                <Typography variant='h5'>{st.lastname}</Typography>
                <Typography variant='h5'>N{st.group}</Typography>
                <i className="fa-solid fa-pen-to-square"></i>
                <i onClick={()=>handldelete(st.id)} className="fa-solid fa-trash"></i>
              </ul>
      )):null}
      {error?<><h1 className='red'>ERROR!</h1></>:null}
          
    </div>
  )
}

export default Students
