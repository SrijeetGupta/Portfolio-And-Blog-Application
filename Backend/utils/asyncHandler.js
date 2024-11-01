
//const asyncHandler=(fn)=>{async()={}}
//const asyncHandler=(fn)=>async()={}

const asyncHandler = (fn) => async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  };
  




//same code in other formate ie in promish

// import { Promise } from "mongoose"
// const asyncHandler=(requestHandler)=>{
//          return (req,res,next)=>{
//         Promise.resolve(requestHandler).catch((err)=>next(err))
//      }
//  }
 export {asyncHandler};