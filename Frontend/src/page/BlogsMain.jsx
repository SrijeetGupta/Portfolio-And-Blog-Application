import React from 'react'
import BlogCard from '../components/BlogCard.jsx'
import Navbar from '../components/Navbar.jsx'
import { useNavigate ,useLocation} from "react-router-dom";
import './css/blogsmain.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Footer from '../components/Footer.jsx';






function BlogsMain() {
    const [blogs, setBlogs] = useState([
        {
            _id: 1,
            Authorname:"Developer",
            blogtype:"other",
            blogHeading:"Unable to fetch Data",
            blogshortdescription:"Sorry! Somthing Went Wrong",
            blogpicture1: "https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg",
            blogpicture2: "https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg",
            blogdata1: "Sorry! Somthing Went Wrong",
            blogdata2: "Sorry! Somthing Went Wrong"
        }]
    )




    const [allblogs, setallBlogs] = useState([]);

    const navigator = useNavigate()
    const writeBlog = async () => {
        navigator("/form")
    }
    const searchParams=new URLSearchParams(location.search);
    const paramValue=searchParams.get("_id");

    useEffect(() => {
        
      

        axios.get('http://localhost:5000/api/v1/blog/get')
            .then((response) => {

                if (response.data.statusCode> 299) {
                    alert("unable to fetch data")
                } else {
                    setBlogs(response.data.data);
                    setallBlogs(response.data.data);
                    if(paramValue){
                        const data=(response.data.data.filter((blog) => blog._id == paramValue))[0];
                        navigator("/blog",{state:{data:data}});

                    }
                }
            })
            .catch((error) => {
                alert("Something went wrong while fetching data");
            });


           
    }, []);





    





    const handleSubmit = (event) => {
        event.preventDefault();
      
        const selectedCategory = event.target.category.value;
      
        if (selectedCategory === "All") {
          setBlogs(blogs);
        } else {
          setBlogs(allblogs.filter((blog) => blog.blogtype === selectedCategory));
        }
      
      };






    return (
        <div>
            <Navbar />
            <div id="blogsmain">

                <div id="category">
                    <form onSubmit={handleSubmit}>
                        <label>Category </label>
                        <select name="category">
                            <option value="All">All</option>
                            <option value="science and technology">science and technology</option>
                            <option value="travel">travel</option>
                            <option value="business">business</option>
                            <option value="analysis">analysis</option>
                            <option value="news">news</option>
                            <option value="entertainment">entertainment</option>
                            <option value="other">other</option>
                        </select>
                        <button type="submit">Submit</button>

                    </form>

                </div>

                <div  id="blogContainer">
                    {
                        blogs.map(item => <BlogCard key={item._id} props={item} />)
                    }

                </div>

                <div id="writer">
                    <button onClick={writeBlog}>Write A Blog</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default BlogsMain




