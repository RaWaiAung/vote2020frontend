import React, { Component ,useEffect, useState } from "react";
import axios from 'axios';

export default function useFetchJobs() {
  const [ posts , setPost] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( res => 
      {
        console.log(res.data)
      setPost(res.data);
      }
    )
    .catch(error => console.log(error))
  })
  return (
    <div>
      <ul>
        { posts.map( post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  )
}
