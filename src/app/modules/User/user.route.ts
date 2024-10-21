





import express from 'express';
import Zod_Validation_Request from '../../middlewares/zod.validation.request';
import { Update_User_Zod_Type, User_Zod_Type } from './user.zod';
import { User_Controller } from './user.controller';



const router = express.Router();

// post a new user route
router.post('/', Zod_Validation_Request(User_Zod_Type), User_Controller.Create_User_Controller);
// update a user route
router.patch('/:uid',Zod_Validation_Request(Update_User_Zod_Type),User_Controller.Update_User_Controller);



export const User_Routes = router;