import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styles from "./login.module.css"
const Login = () => {
  const[mobile,setmobile]=useState("");
  const navigate=useNavigate();

  const submit=()=>
  {
    if(mobile=="" || mobile.length<10)
    alert("Please enter valid mobile number");
    else
    {
      let data={phone:mobile,dial_code:"+91"}
      localStorage.setItem("mobile",mobile);
      axios.post("https://staging.fastor.in/v1/pwa/user/register",data)
      .then((r)=>{
        if(r.data.status=="Success")
        navigate("/otp")
      })
    // navigate("/otp");
    }
  }

  return (
    <div className={styles.logindiv}>
      <div>
          <h1>Enter Your Mobile Number</h1>
          <p>We will send you 6 digit veification code.</p>
      </div>
        <input placeholder='Enter Your mobile number' onChange={(e)=>setmobile(e.target.value)}></input>
        <button onClick={submit}>Send Code</button>
    </div>
  )
}

export default Login
