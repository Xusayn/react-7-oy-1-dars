import React, { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
const Login = ({setadmin,admin,setadminn}) => {
  const navigate=useNavigate()
  const [ad,setad]=useState('')
  
  const handlsubmit=(e)=>{
    e.preventDefault()
    setadmin(ad)

   
  }
  {admin?navigate('/'):null}




  
  return (
    <div className='div'>
      <form onSubmit={handlsubmit}>
        <input placeholder='Name...'  onChange={(e)=>setad(e.target.value)} type="text" />
        <input placeholder='UserName...' onChange={(e)=>setadminn(e.target.value)} type="text" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
