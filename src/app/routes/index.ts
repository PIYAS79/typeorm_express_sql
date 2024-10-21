


import express from 'express';
import { User_Routes } from '../modules/User/user.route';
import { Person_Routes } from '../modules/Person/person.route';


const router = express.Router();



const project_routes = [
    {
        path: '/user',
        route: User_Routes
    },
    {
        path: '/person',
        route: Person_Routes
    }
]

project_routes.forEach((one) => router.use(one.path, one.route));


export default router;