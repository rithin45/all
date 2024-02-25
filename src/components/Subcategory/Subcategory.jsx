import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Subcategory.css'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'

const Subcategory = () => {
  
    
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3005/categoryview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])

    var[inputs,setInputs]=useState({
      "id":'',
      "pname":'',
      "status":'Active'
    })
  
    const inputHandler =(event) =>{
      const{name,value}=event.target
      setInputs((inputs)=>({...inputs,[name]:value}))
      console.log(inputs)
    }
  
      const addHandler=() =>{
        console.log("Clicked")
  
        console.log(inputs)
        axios.post("http://localhost:3005/cnew",inputs)
        .then((response)=>{
          alert("Record Saved")
        })
        .catch(err=>console.log(err))
        
    }
  
  return (
    <div >
      <Topbar/>
      <Sidebar/>
      <h2>Category</h2>
    <TextField label="Category id" name="id" variant="filled" value={inputs.id}onChange={inputHandler}/><br /><br />
    
    {/* <FormControl sx={{ m: 1, minWidth: 120 }}> */}
    <TextField label="Product name" name="pname" variant="filled" value={inputs.pname}onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.name} >{value.name}</MenuItem>
        )
      })
    }
    </TextField> <br /><br />
  {/* <InputLabel id="demo-simple-select-label">Category</InputLabel> */}

  {/* <Select
   labelId="demo-simple-select-label"
    name='Category'value={inputs.category} onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.name} >{value.name}</MenuItem>
        )
      })
    }
  </Select> */}
  <Select
   labelId="contained" label="Status"
    name='status'value={inputs.status} onChange={inputHandler}>
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="In-Active">In-Active</MenuItem>
  </Select><br /><br />
{/* </FormControl><br/><br/> */}
    <Button variant="contained" onClick={addHandler} >Submit</Button>
    </div>
  )
}

export default Subcategory