import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./restaurants.module.css"
const Restaurants = () => {
    const[data,setData]=useState([]);

    const token=localStorage.getItem("token");
    useEffect(()=>
    {
        axios.get("https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
        { headers: {"Authorization" : `Bearer ${token}`} })
        .then((r)=>{console.log(r.data);setData(r.data)})
    },[])
  return (
    <div className={styles.outerdiv}>
        {data.map((el)=>
        (
            <div key={el.restaurant_id} className={styles.card}>
                <img src={el.images[0].url}/>
                <div>
                   <Link to={`/restaurants/${el.restaurant_id}`} ><p>{el.restaurant_name}</p></Link>
                    <p>{el.points}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Restaurants