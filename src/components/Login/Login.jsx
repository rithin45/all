// import { Button, TextField, Paper } from '@mui/material'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Login = (props) => {
//     const[un,setUn]=useState('');
//     const[pwd,setPwd]=useState('');
//     const[error,setError]=useState(false);
    
//     const navigate=useNavigate()
//     const readusername =(event) =>{
//         event.preventDefault();
//         console.log(event.target.value);
//         setUn(event.target.value);
//     }
//     const readpassword =(event) =>{
//         event.preventDefault();
//         console.log(event.target.value);
//         setPwd(event.target.value);
        
//     }
//     const checkfilldata =(event) =>{
//         event.preventDefault();
//         if(un.trim ()===''||pwd==='')
//         {
//             setError(true);
//             return;
//         }
//         else{
//             navigate("/Home");
            
//         }

//     }
//   return (
//     <div>
//         <h3>Login Page</h3>
        
    
//         <Paper elevation={3} style={{ padding: '20px', maxWidth: '300px', margin: '20px' }}>
//       <h2>Login Section</h2>
//       <TextField label="Username" variant="outlined" onChange={readusername} fullWidth margin="normal" />
//       <TextField label="Password" variant="outlined" type="password" onChange={readpassword} fullWidth margin="normal"/>
//         <Button variant="contained" color="primary" onClick={checkfilldata} fullWidth>Login</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <Button variant="contained" color="primary" fullWidth>Cancel</Button>
//     </Paper> 
//     {error&&'error occured'}
//     </div>
//   )
// }

// export default Login


// import React, { useState } from 'react'
// import { Button, TextField } from '@mui/material' 
// import axios from 'axios' 

// import { useNavigate } from 'react-router-dom' 
 

// const Login = () => {
  

// var [inputs,setInputs]=useState({"username":'',"password":''}) 
 
// const inputHandler = (event)=>{ 
// const {name,value}=event.target 
// setInputs((inputs)=>({...inputs,[name]:value})) 
// console.log(inputs) 
//      } 
 
// const navigate=useNavigate() 
 
// const checkData = async (event) => { 

//     event.preventDefault(); 
 
//     try { 
//      const response=await   axios.post("http://localhost:4005/Loginsearch",{ 
//       username: inputs.username, 
//       password: inputs.password, 
//     }) 
//     if (response.data.success) { 
//         alert('Login successful'); 
//         navigate('/Home'); 
//       }  
//       else { 
//         alert('Invalid email and Password. Please try again.'); 
//         console.log(response.data); 
 
//       } 
//     } catch (err) { 
//       alert('Error occurred during login. Please try again.'); 
//     } 
//   }; 
     
   
//   return (
//     <div>
//          <h3>Login</h3> 
//           <TextField className="style2" required id="outlined-required" 
// label="Required" 
//         name="username"  value={inputs.username} 
//         onChange={inputHandler} /> 
//   <br /><br /> 
//          <TextField 
//           name="password" id="outlined-password-input" 
//           label="Password" 
//           type="password"  
//           autoComplete="current-password" 
//           value={inputs.password} 
//           onChange={inputHandler}/> <br /><br />
     
         
//                <Button variant="contained" onClick={checkData} >Login</Button> 
      
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const checkData = async () => {
    try {
      const response = await axios.post("http://localhost:4005/Loginsearch", {
        username: inputs.username,
        password: inputs.password,
      });
      if (response.data.success) {
        alert('Login successful');
        navigate('/Home');
      } else {
        alert('Invalid email and Password. Please try again.');
      }
    } catch (err) {
      alert('Error occurred during login. Please try again.');
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <TextField
        required
        label="Username"
        name="username"
        value={inputs.username}
        onChange={inputHandler}
      />
      <br /><br />
      <TextField
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={inputs.password}
        onChange={inputHandler}
      />
      <br /><br />
      <Button variant="contained" onClick={checkData}>Login</Button>
    </div>
  );
};

export default Login;
