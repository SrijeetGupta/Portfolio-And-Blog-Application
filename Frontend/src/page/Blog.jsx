import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import './css/blog.css'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { useLocation } from 'react-router-dom';



function Blog() {
  const location = useLocation();
    const blogData = location.state.data;
    const[copied,setCopied]=useState(false)

    const popUp=()=>{
      alert("URL have been copied Succesfully")
    }
  return (
    <div>
        <Navbar/>
        <div id='clipbord'><CopyToClipboard text={`http://localhost:5173/blogs?_id=${blogData._id}`}>
<button onClick={popUp}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
</svg>
</button>
</CopyToClipboard></div>
        
        
        <div id="ShowBlog">
          <h3>{blogData.blogHeading}</h3>
        <div id="sbphoto" style={{backgroundImage:`url(${blogData.blogpicture1})`}} ></div>
        <div id="sbcontent">
         <p>{blogData.blogdata1}</p>
        </div>
        <div id="sbphoto" style={{backgroundImage:`url(${blogData.blogpicture2})`}} ></div>
        <div id="sbcontent">
          <p>{blogData.blogdata2}</p>
        </div>

        </div>
        <Footer/>
        
        

    </div>
  )
}

export default Blog


