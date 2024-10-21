
import express from 'express';
import { Person_Controller } from './person.controller';
import Zod_Validation_Request from '../../middlewares/zod.validation.request';
import { Create_Zod_Person_Type, Update_Zod_Person_Type } from './person.zod';

const router = express.Router();

// create person route
router.post('/', Zod_Validation_Request(Create_Zod_Person_Type), Person_Controller.Create_Person_Controller);
// update person route
router.patch('/:pid', Zod_Validation_Request(Update_Zod_Person_Type), Person_Controller.Udpate_Person_Controller);
// delete person router
router.delete('/:pid', Person_Controller.Delete_Person_Controller)
// get all person route
router.get('/', Person_Controller.Get_All_Person_Controller);
// get one person route
router.get('/:pid', Person_Controller.Get_One_Person_Controller);

export const Person_Routes = router;