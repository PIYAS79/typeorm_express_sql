import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/try.code";
import httpStatus from 'http-status-codes';
import { Student_Services } from "./student.services";

const Create_Student_Controller = Async_Catch(async(req:Request,res:Response,next:NextFunction)=>{
    const result= await Student_Services.Create_Student_Service(req.body);

    res.status(httpStatus.OK).json({
        success:true,
        message:"Successfully Create A Student",
        data:result
    })
})


export const Student_Controller = {
    Create_Student_Controller,
    
}