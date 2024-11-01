import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import Author from "../model/author.model.js";


const creatAuthor = asyncHandler(async (req, res) => {

  const{name,email,isAuthor,password}=req.body

  //validation
 if(
    [name,email,isAuthor,password].some((field)=>
    field.toString().trim()==="")
 ){
    throw new ApiError(400,"all fields are required")
 }

 //cheaking the user
 const existedUser= await Author.findOne({
    $or:[{name},{email}]
 })
 if(existedUser){
    throw new ApiError(409,"Author already exits")
 }

 const author=await Author.create({
  name,email,isAuthor,password
 });
 

 const created=await Author.findById(user._id)

 
 if(!created){
   throw new ApiError(500,"somthing went wrong while creating password")
 }



 return res.status(201).json(
   new ApiResponce(200,"user registersuccessfully")
 )


});




export {creatAuthor};