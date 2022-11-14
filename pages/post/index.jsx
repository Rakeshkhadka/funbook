import React from 'react'
import { useEffect } from 'react'
// import MainLayout from '../../components/layout/MainLayout'

const post = ({data}) => {
    useEffect(() => {
      
    console.log(data)
      
    }, [])
    
  return (
    <div className="w-full">
    {data && data.map((post) => (
    
      <div key = {post.id}>
      <h1>{post.title}</h1>
    </div>
    )
    
    )}
    </div>
  )
}

export default post;

