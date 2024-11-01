import mongoose from "mongoose";
import bcrypt from 'bcryptjs'



const AuthorSchema=mongoose.Schema({
    name:{
        type: String,
        require:[true,'please provide name'],
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        require:[true,'please provide email'],
        unique:true
    },
    isAuthor:{
        type:Boolean,
        default:'false'
    },
    password:{
        type:String,
        require:[true,'password is required']
    },
    isAdmin:{
      type:Boolean,
      default:'false'
  },

},{timestamps: true})


AuthorSchema.pre("save",async function(next){
 if(!this.isModified("password"))return next();
this.password= await bcrypt.hash(this.password,10)
next()
})

//validating password function
AuthorSchema.methods.isPasswordCorrect=async function(password){
  return await bcrypt.compare(password,this.password)
  
}




const Author=mongoose.model('Author',AuthorSchema);


export default Author;