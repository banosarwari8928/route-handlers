"use client"
import React, { useEffect, useState } from 'react'

async function data() {
   const [post,setPost]= useState([]);
async function fetchpost(){
     
   const respons=   await fetch("http://localhost:3000/posts");
   const data= await respons.json();
   setPost(data);
   useEffect(()=>{
    fetchpost();
    },[])
}
    
  return (
    <div>
      {post.map((p:any)=>(
        <div key={p.id}>
        <h1 >{p.title}</h1></div>
      ))}
    </div>
  )
}

export default data