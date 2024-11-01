import mongoose from "mongoose";
import User from "./author.model.js";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const blogSchema=mongoose.Schema({
    Authorname:{
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        require:true
    },
    blogtype:{
        type:String,
        enum:['science and technology','travel','business ','analysis','news','entertainment','other'],
        require:true,  
    },
    blogHeading:{
        type:String,  
        require:true
    },
    blogshortdescription:{
        type:String,  
        require:true
    },
    blogpicture1:{
        type:String,  //cloud
        require:true, //cloud
    },
    blogpicture2:{
        type:String,  //cloud
        require:true, //cloud
    },
    blogdata1:{
        type:String,
        require:true
    },
    blogdata2:{
        type:String,
        require:true
    }
},{timestamps: true}
)




const Blogs=mongoose.model('blogs',blogSchema);


export default Blogs;