
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Author from "../model/author.model.js";

export const verify_admin=asyncHandler(async(req,_,next)=>{
    const {author_name,author_password}=req.body
     
    const author=await Author.findOne({name:author_name})
    
    if(!author){
        throw new ApiError(401,"invalid Admin name")
    }
    else{
        if( author.isPasswordCorrect(author_password)){
           if(!author.isAdmin){
            throw new ApiError(401,"Not an Admin")
           }
        }
        else{
            throw new ApiError(401,"invalid Password")
        }
    }
    req.admin=author;
   
    next();
})