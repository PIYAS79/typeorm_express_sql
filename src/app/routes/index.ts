


import express from 'express';
import { User_Routes } from '../modules/User/user.route';


const router = express.Router();



const project_routes = [
    {
        path: '/user',
        route: User_Routes
    }
]

project_routes.forEach((one) => router.use(one.path, one.route));


export default router;