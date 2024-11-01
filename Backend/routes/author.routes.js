import { Router } from "express";
import { creatAuthor} from "../controller/author.controller.js";


const router=Router()


import { verify_admin } from "../middlewares/admin.verify.middleware.js";
//secured routes

router.route("/creatauthor").post(verify_admin,creatAuthor)

    
export default router