import React, { useEffect } from 'react'
import {useState} from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
   

    // const handleDelete = (id) => {
    //   const newBlogs = blogs.filter(blog => blog.id !== id);
    //   setBlogs(newBlogs)
    // }

    
   const {data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
  //  call the data and use it as blogs
    

  return (
    <div className="home">
        {error && <div> {error} </div>}
        { isPending && <div>Loading...</div> }
        {blogs && <BlogList blogs ={blogs} title = "All Blogs"  />} 
        {/* <BlogList blogs = {blogs.filter((blog) => blog.author === "mario" )} title = "Mario Blogs" /> */}
        
        
        
    </div>
  )
}

export default Home