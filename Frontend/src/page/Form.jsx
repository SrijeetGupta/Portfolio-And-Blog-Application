import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './css/form.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';


const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    tittle: '',
    briefDescription: '',
    fullDescription1: '',
    fullDescription2: '',
    img1: null,
    img2: null,
    option: "science and technology",
  });



  const handleFile = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    axios.post('http://localhost:5000/api/v1/blog/post',formData,  {
      headers: {"Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        if (response.data.statusCode > 299) {
          alert("unable uplode data check your crediancial")
        } else {
          alert("blog uploded sucessfully")
        }
        const navigator = useNavigate()
        const writeBlog = async () => {
        navigator("/blog")
    }
      })
      .catch((error) => {
        alert("unable uplode data check your crediancial");
      });

  };

  return (
    <>
      <Navbar />

      <form className="form-container" onSubmit={handleSubmit} >


        <div className="form-group">
          <label htmlFor="title" className="form-label">Author User_Name</label>
          <input type="text" id="title" name="username" value={formData.username} onChange={handleChange} className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="title" className="form-label">Author password</label>
          <input type="text" id="title" name="password" value={formData.password} onChange={handleChange} className="form-input" />
        </div>


        <div className="form-group">
          <label htmlFor="title" className="form-label">Blog Title</label>
          <input type="text" id="title" name="tittle" value={formData.tittle} onChange={handleChange} className="form-input" />
        </div>


        <div className="form-group">
          <label htmlFor="title" className="form-label">Brief Description</label>
          <input type="text" id="title" name="briefDescription" value={formData.briefDescription} onChange={handleChange} className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="title" className="form-label">Description 1</label>
          <input type="text" id="title" name="fullDescription1" value={formData.fullDescription1} onChange={handleChange} className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="title" className="form-label">Description 2</label>
          <input type="text" id="title" name="fullDescription2" value={formData.fullDescription2} onChange={handleChange} className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="title" className="form-label">Blog Image 1</label>
          <input type="file" id="title" name="img1" onChange={handleFile} className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="title" className="form-label">Blog Image 2</label>
          <input type="file" id="title" name="img2" onChange={handleFile} className="form-input" />
        </div>



        <div className="form-group">
          <label htmlFor="option" className="form-label">Blog Category</label>
          <select id="option" name="option" value={formData.option} onChange={handleChange} className="form-select">
            <option value="science and technology">science and technology</option>
            <option value="travel">travel</option>
            <option value="business">business</option>
            <option value="analysis">analysis</option>
            <option value="news">news</option>
            <option value="entertainment">entertainment</option>
            <option value="other">other</option>
          </select>
        </div>

        <button type="submit" className="form-button">Submit</button>

        <div className="form-group">
          <label htmlFor="title" className="form-label"><i>As a Verified Author, share your insights and expertise by writing a blog post. If you're not yet verified, please email us to obtain your Author ID and password.</i> </label>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Form;