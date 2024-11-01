import React from 'react'
import { useNavigate } from "react-router-dom";



import './css/blogcard.css'




function BlogCard( props) {
    const {  _id,Authorname,blogtype,blogHeading,blogshortdescription,blogpicture1,blogpicture2,blogdata1,blogdata2 } = props.props;
    const navigator=useNavigate()
   
     const openBlog=async ()=>{
        const blogData =props.props
         navigator("/blog",{state:{data:blogData}})
     }
    
     
  return (
    <div className="card">
    <img src={blogpicture1}  className="card-image" />
    <h2 className="card-heading">{blogHeading}</h2>
    <p className="card-description">{blogshortdescription}</p>
    <button className="card-button" onClick={openBlog}>Open</button>
</div>
  )
}

export default BlogCard