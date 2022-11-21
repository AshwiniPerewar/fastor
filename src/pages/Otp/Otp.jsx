import React from 'react'
import { useState } from 'react'
import { PinInput, PinInputField, HStack } from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "./otp.module.css"
const Otp = () => {
  const[otp,setOtp]=useState([]);
  const navigate=useNavigate();



  const onchange=(e)=>
  {
    setOtp([...otp,Number(e.target.value)])
  }

  const submit=()=>
  {
    console.log(otp.join(""))
    if(otp=="")
    alert("Please enter otp");
    else if(otp.join("")!=123456)
    alert("Invalid otp")
    else
    {
      let mobile=localStorage.getItem("mobile");
      console.log(mobile);
      let data={phone:mobile,otp:123456,dial_code:"+91"}
      axios.post("https://staging.fastor.in/v1/pwa/user/login",data)
      .then((r)=>{
        console.log(r.data.data.token)
        if(r.data.data.token)
        {
          localStorage.setItem("token",r.data.data.token);
          navigate("/restaurants");
        }
        
      })
    
    }
  }

  return (
    <div className={styles.otpdiv}>
      <div>
        <h1>OTP Verification</h1>
        <p>Enter the veification code we just sent on your Mobile Number.</p>
        </div>
        <HStack spacing='10px'>
  <PinInput placeholder="" >
    <PinInputField className={styles.input}  onChange={onchange}/>
    <PinInputField className={styles.input} onChange={onchange}/>
    <PinInputField className={styles.input} onChange={onchange}/>
    <PinInputField className={styles.input} onChange={onchange}/>
    <PinInputField className={styles.input} onChange={onchange} />
    <PinInputField className={styles.input} onChange={onchange}/>
  </PinInput>
</HStack>
        <button onClick={submit}>Send Code</button>
    </div>
  )
}

export default Otp
