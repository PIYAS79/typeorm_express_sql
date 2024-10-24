



import express from 'express';
import Zod_Validation_Request from '../../middlewares/zod.validation.request';
import { Create_Student_Zod_Type } from './student.zod';
import { Student_Controller } from './student.controller';

const router = express.Router();


router.post('/',Zod_Validation_Request(Create_Student_Zod_Type),Student_Controller.Create_Student_Controller)


export const Student_Routes = router;