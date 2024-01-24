import React, { useState } from 'react'
import './Students.scss'
import axios from 'axios'
const Students = () => {

  const [students,setstudents]=useState([])

  const getstudents= async()=>{
      try {
        const res = await axios.get(`http://localhost:3000/`)
        const dataa= await res.data()
        setstudents(dataa)
        console.log(dataa);
      } catch (error) {
        console.log(error);
      }
  } 

  return (
    <div>
      <h1>Students</h1>
          <div className="st">
            {students.map((st)=>(
              <h1>{st.id}</h1>
            ))}
          </div>
    </div>
  )
}

export default Students
