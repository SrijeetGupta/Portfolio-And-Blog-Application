import express from 'express';
import cors from 'cors';

const app=express();


//cors allowe us to set cross origin resource sharing
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


//seeting the max flow of json data
app.use(express.json())
//use to manage url
app.use(express.urlencoded({extended: false}))
//to store some temperoey data in public folder
app.use(express.static("Public"))
//it allow the server to preform crud operation of clint cookie



//router import

import authorRouter from './routes/author.routes.js'
import blogRouter from './routes/blog.routes.js'
 


app.use('/api/v1/author',authorRouter)
app.use('/api/v1/blog',blogRouter)





export {app};