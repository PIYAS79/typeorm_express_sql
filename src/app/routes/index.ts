


import express from 'express';
import { User_Routes } from '../modules/User/user.route';
import { Person_Routes } from '../modules/Person/person.route';
import { Student_Routes } from '../modules/Student/student.route';


const router = express.Router();



const project_routes = [
    {
        path: '/user',
        route: User_Routes
    },
    {
        path: '/person',
        route: Person_Routes
    },
    {
        path: '/student',
        route: Student_Routes
    }
]

project_routes.forEach((one) => router.use(one.path, one.route));


export default router;