
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Author from "../model/author.model.js";

export const verify_author = asyncHandler(async (req, _, next) => {
    const { username, password } = req.body
 
    const author = await Author.findOne({ name: username })
     
    if (!author) {
        throw new ApiError(401, "invalid Author name")
    }
    
    const isPasswordValid= author.isPasswordCorrect(password);
    
    if (isPasswordValid) {
        if (!author.isAuthor) {
            throw new ApiError(401, "Not an Author")
        }
    }
    else {
        throw new ApiError(401, "invalid Password")
    }

    req.author = author
    next();
})