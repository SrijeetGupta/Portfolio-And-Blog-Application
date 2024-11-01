import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './form.css';
function Add_Author() {
    const [formData, setFormData] = useState({
        author_name:'',
        author_password:'',
        name:'',
        email:'',
        isAuthor:'true',
        password:''
      });
    
    
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        axios.post('http://localhost:5000/api/v1/author/creatauthor',formData
        )
          .then((response) => {
            if (response.data.statusCode > 299) {
              alert("unable uplode data check your crediancial")
            } else {
              alert("Added sucessfully")
            }
          })
          .catch((error) => {
            alert("Something went wrong while uploding data");
          });
    
      };
    
      return (
        <>


 
    
          <form className="form-container" onSubmit={handleSubmit} >


          <div className="form-group">
              <label htmlFor="title" className="form-label">Enter Details To Creat A Author</label>
          </div>
    
     
            <div className="form-group">
              <label htmlFor="title" className="form-label">Admin Name</label>
              <input type="text" id="title" name="author_name" value={formData.author_name} onChange={handleChange} className="form-input" />
            </div>
    
            <div className="form-group">
              <label htmlFor="title" className="form-label">Admin password</label>
              <input type="text" id="title" name="author_password" value={formData.author_password} onChange={handleChange} className="form-input" />
            </div>
    
    
            <div className="form-group">
              <label htmlFor="title" className="form-label">Author Name</label>
              <input type="text" id="title" name="name" value={formData.name} onChange={handleChange} className="form-input" />
            </div>
    
    
            <div className="form-group">
              <label htmlFor="title" className="form-label">Author Email</label>
              <input type="text" id="title" name="email" value={formData.email} onChange={handleChange} className="form-input" />
            </div>
    
            <div className="form-group">
              <label htmlFor="title" className="form-label">Author Password</label>
              <input type="text" id="title" name="password" value={formData.password} onChange={handleChange} className="form-input" />
            </div>
    
           
    
           
    
    
    
            <div className="form-group">
              <label htmlFor="option" className="form-label">Is Author</label>
              <select id="option" name="isAuthor" value={formData.isAuthor} onChange={handleChange} className="form-select">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
    
            <button type="submit" className="form-button">Submit</button>
          </form>
        </>
      );
}

export default Add_Author