





import express from 'express';
import Zod_Validation_Request from '../../middlewares/zod.validation.request';
import { User_Zod_Type } from './user.zod';
import { User_Controller } from './user.controller';



const router = express.Router();


router.post('/', Zod_Validation_Request(User_Zod_Type), User_Controller.Create_User_Controller);




export const User_Routes = router;