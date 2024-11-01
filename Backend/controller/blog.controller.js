import Blogs from "../model/blogs.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary} from "../utils/cloudinary.js";
import Author from "../model/author.model.js";


const getBlog = asyncHandler(async (req, res) => {
    const blog = await Blogs.find().sort({ createdAt: -1 });
    if (!blog) {
        throw new ApiError(500, "somthing went wrong with data base")
    }
    else {
        return res.status(200).json(
            new ApiResponce(202, blog, "blog send successfully")
        )
    }
})








const postBlog = asyncHandler(async (req, res) => {
    
    const author = req.author;
    if (!author) {
        throw new ApiError(500, "invalid request")
    }

  
    const getingAuthorfromDB = await Author.findById(author._id);
    

    if (getingAuthorfromDB.isAuthor) {
       
        const { tittle, briefDescription, fullDescription1, fullDescription2, option } = req.body
      
        
      
        const blogpicture1LocalPath = req.files?.img1?.[0]?.path;
        const blogpicture2LocalPath = req.files?.img2?.[0]?.path;
       

        const blogpicture1 = await uploadOnCloudinary(blogpicture1LocalPath);
        const blogpicture2 = await uploadOnCloudinary(blogpicture2LocalPath);
    
        if (tittle != "" && briefDescription != "" && fullDescription1 != "" && fullDescription2 != "" && option != "" && blogpicture1 != null && blogpicture2 != null) {
            var type = option.toLowerCase();
            if (!(type === 'science and technology' || type === 'travel' || type === 'business ' || type === 'analysis' || type === 'news' || type === 'entertainment' || type === 'other')) {
                throw new ApiError(401, "plese provide given blog catagory")
            }
            else{
                
            const blog = await Blogs.create({
                Authorname: getingAuthorfromDB._id,
                blogtype: option,
                blogHeading: tittle,
                blogshortdescription: briefDescription,
                blogpicture1: blogpicture1?.url || "",
                blogpicture2: blogpicture2?.url || "",
                blogdata1: fullDescription1,
                blogdata2: fullDescription2,
            });

            
            return res.status(200).json(
                new ApiResponce(200, blog, "blog have updated successfully")
            )

        }
        }
        else {
            throw new ApiError(404, "plese provide all blog data")
        }



    }

})









export { getBlog, postBlog };

