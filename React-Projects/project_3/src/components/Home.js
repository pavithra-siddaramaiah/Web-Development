import React, { useEffect } from 'react'
import {useState} from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    // const handleDelete = (id) => {
    //   const newBlogs = blogs.filter(blog => blog.id !== id);
    //   setBlogs(newBlogs)
    // }

    

    useEffect(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
       return res.json();
      } )
      .then(data => {
        setBlogs(data);
      });
    }, []);

  return (
    <div className="home">
        {blogs && <BlogList blogs ={blogs} title = "All Blogs"  />}
        {/* <BlogList blogs = {blogs.filter((blog) => blog.author === "mario" )} title = "Mario Blogs" /> */}
        
        
        
    </div>
  )
}

export default Home