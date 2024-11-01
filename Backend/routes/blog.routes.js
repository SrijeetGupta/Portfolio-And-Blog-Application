import { Router } from "express";
import {getBlog,postBlog} from '../controller/blog.controller.js'
import { upload } from "../middlewares/multer.middlewares.js";



const router=Router()


import { verify_author } from "../middlewares/author.verify.middleware.js";
//secured routes

router.route('/get').get(getBlog)

router.route("/post").post(upload.fields(
    [
        { name: 'img1', maxCount: 1 },
        { name: 'img2', maxCount: 1 }
    ]

 ),verify_author, postBlog)





export default router