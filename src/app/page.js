"use client";
import Image from 'next/image'
import styles from './page.module.css';
import { useState } from 'react';
import Component1 from './Component1';

export default function Home() {
  const [counter,setCounter]=useState(0);
  const [userdata,setUserdata]=useState('');
  const [myvalue,setMyvalue]=useState(["A","B","C","D","E","F","G","H"]);
  function myDelete(indexdata)
  {
    setMyvalue(myvalue.filter((values,index)=>index!==indexdata));

  }
 
  return (
    <div className={styles.main}>
      <div>
        <h1>Enter the username:</h1>
        <input type='text'  onChange={(e)=>setUserdata(e.target.value)} value={userdata}></input><button></button>
        </div>
       <h1>{counter}</h1>
       <button onClick={()=>setCounter(counter+1)}>Click</button>
       <Component1 counterdata={counter} user={userdata}></Component1>
       {
        myvalue.map((values,index)=>
        <div key={index}>
             <h1>{values}</h1>
             <button onClick={()=>myDelete(index)}>Delete</button>
          </div>
        )
       }
     
   
</div>
  )
}
