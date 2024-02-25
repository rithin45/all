import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import './Category.css'
import { Home } from '@mui/icons-material';
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Category = () => {
  var[inputs,setInputs]=useState({
    "name":'',
    "offer_price":'',
    "MRP":'',
    "category":'Fruits'
    
  })
  var[selectedimage,setSelectedimage]=useState(null);
  

  const inpuHandler =(event) =>{
    const{name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }

  const savedata=()=>{
    const formdata=new FormData();
    formdata.append('name',inputs.name);
    formdata.append('offer_price',inputs.offer_price);
    formdata.append('MRP',inputs.MRP);
    formdata.append('category',inputs.category);
    formdata.append('image1',selectedimage)
    fetch('http://localhost:3005/new',
    {
        method:'post',
        body:formdata,
    })
    .then((response)=>response.json())
    .then((data)=>{
        alert("record saved")
    })
    .catch((err)=>{
        console.log("error")
    })
}

  //   const addHandler=() =>{
  //     console.log("Clicked")

  //     console.log(inputs)
  //     axios.post("http://localhost:3005/new",inputs)
  //     .then((response)=>{
  //       alert("Record Saved")
  //     })
  //     .catch(err=>console.log(err))
      
  // }

  const handleimage =(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.image1=file;
    }

    


  return (

    <div>
      <Topbar/>
      <Sidebar/>
    <div className="addproduct">
    <h2>Product Details</h2>  
      <TextField label="Product name" type="text" name="name"value={inputs.name} onChange={(event) => inpuHandler (event)}/> <br /><br />
      
      <TextField label="Offer Price" type="text" name="offer_price" value={inputs.offer_price} onChange={(event) => inpuHandler (event)}/><br /><br />
      <TextField label="MRP" type="text" name="MRP" value={inputs.MRP} onChange={(event) => inpuHandler (event)}/> <br /><br />

      <Select label="Product category" name="category" value={inputs.category}onChange={inpuHandler}>
        <MenuItem value="Vegetables">Vegetables</MenuItem>
            <MenuItem value="Fruits">Fruits</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
      </Select><br /><br />
      <label>Upload file</label>
        <input type="file" onChange={handleimage}></input>
        <br /><br />
      
      <button className="addproduct-btn" onClick={()=>{savedata()}}>ADD</button>
    </div>
    </div>
  )
}

export default Category