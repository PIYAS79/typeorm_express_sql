import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/try.code";
import httpStatus from 'http-status-codes';
import { Person_Services } from "./person.services";



const Create_Person_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Person_Services.Create_Person_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Create a person",
        data: result
    })
})

const Udpate_Person_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Person_Services.Update_Person_Service(req.body, req.params.pid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Update a person",
        data: result
    })
})

const Delete_Person_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Person_Services.Delete_Person_Service(req.params.pid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Delete a person",
        data: result
    })
})

const Get_All_Person_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Person_Services.Get_All_Person_Service();

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get All person",
        data: result
    })
})

const Get_One_Person_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {
    const result = await Person_Services.Get_One_Person_Service(req.params.pid);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Get a person",
        data: result
    })
})

export const Person_Controller = {
    Create_Person_Controller,
    Udpate_Person_Controller,
    Delete_Person_Controller,
    Get_All_Person_Controller,
    Get_One_Person_Controller,

}