import { AbstractRepository, EntityRepository } from "typeorm";
import { Department_Type } from "../modules/Student/student.interface";
import { Department } from "../entity/Department";




@EntityRepository(Department)

export class Department_Static_Method extends AbstractRepository<Department_Type>{
    findByDepartment_ID(id:number){
        return this.repository.findOne({where:{department_id:id}})
    }
}