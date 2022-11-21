import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from "./restaurant.module.css"
const Restaurant = () => {
    const[data,setData]=useState([]);

    const token=localStorage.getItem("token");

    const id=useParams().id;
    console.log(id)
    useEffect(()=>
    {
        axios.get(`https://staging.fastor.in/v1/m/restaurant?city_id=118&&`,
        { headers: {"Authorization" : `Bearer ${token}`} })
        .then((r)=>{console.log(r.data);setData(r.data)})
    },[])
  return (
    <div className={styles.outerdiv}>
       <img src={data.images[0].url}/>
               
    </div>
  )
}

export default Restaurant