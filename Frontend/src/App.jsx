import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

/*importing components*/ 
import Home from './page/Home.jsx';
import Blog from './page/Blog.jsx';
import BlogsMain from './page/BlogsMain.jsx';
import Form from './page/Form.jsx';

function App() {

  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/blog" element={<Blog/>} />
        <Route exact path="/blogs" 
       // loader={()=>{}}->use to pre fetch the data
               ///in blogs///
       // import { useLoaderData } from 'react-router-dom'
       // const data = useLoaderData()
        element={<BlogsMain/>} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
