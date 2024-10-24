
import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes'
import { createConnection } from 'typeorm'
import { User } from './entity/User'
import { Department } from './entity/Department'
import { Student } from './entity/Student'
import { Person } from './entity/Person'
import router from "./routes";



const app = express();

app.use(express.json());


createConnection({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "",
    database: "express_sql_auth",
    synchronize: true,
    logging: true,
    entities: [User, Person, Department, Student]
}).then(() => {
    console.log("Databse connected successfully !");
}).catch((err) => {
    console.log(err);
})

// project route
app.use('/app/v1', router);

// initial route

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({
        success: true,
        message: "Server run successfully !"
    })
})



export default app;