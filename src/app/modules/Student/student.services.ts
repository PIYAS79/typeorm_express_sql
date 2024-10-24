import { getCustomRepository, getManager, getRepository } from "typeorm";
import { Create_Student_Type } from "./student.interface";
import { Student } from "../../entity/Student";
import { Department } from "../../entity/Department";
import { Department_Static_Method } from "../../methods/department.methods";
import Final_App_Error from "../../errors/Final_App_Error";
import httpStatus from 'http-status-codes';


const Create_Student_Service = async (data: Create_Student_Type) => {

    const entityManager = getManager();
    // ---------------------| One TO One : one student + one department |---------------//
    // ---------------------|      its like user + profile er mton      |------------------------//
    const newDepartment = new Department();
    newDepartment.department_head = data.department_head;
    newDepartment.department_name = data.department_name;

    const result_department = await entityManager.save(newDepartment);
    const newStudent = new Student();
    newStudent.department = result_department;
    newStudent.student_name = data.student_name;
    newStudent.student_age = data.student_age;
    const result_student = await entityManager.save(newStudent);



    return result_student;
}


export const Student_Services = {
    Create_Student_Service,

}