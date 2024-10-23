import { Between, getCustomRepository, getRepository, In, IsNull, LessThan, LessThanOrEqual, Like, Not, Repository } from "typeorm";
import { Person_Type } from "./person.interface";
import { Person } from "../../entity/Person";
import { Person_Static_Method } from "../../methods/person.methods";


const Create_Person_Service = async (data: Person_Type) => {
    const repository = getRepository(Person);
    let result = await repository.insert({
        name: data.name,
        age: data.age,
        gender: data.gender
    })
    return result;
}

const Update_Person_Service = async (data: Partial<Person_Type>, pid: string) => {
    const remainingProperties: Record<string, unknown> = { ...data };
    const repository = getRepository(Person);
    const result = await repository.update({ person_id: Number(pid) }, remainingProperties);
    return result;
}

const Delete_Person_Service = async (pid: string) => {
    const repository = getRepository(Person);
    const result = await repository.delete({ person_id: Number(pid) });
    return result;
}

const Get_All_Person_Service = async (query: Record<string, unknown>) => {

    // -----------SELECT------------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find({
    //     select:["name","age"]
    // });

    // -----------WHERE------------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find({
    //     where:{
    //         email:query.email
    //     }
    // });

    // -----------OR------------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find({
    //     where:[
    //         {email:query.email},
    //         {age:query.age}
    //     ]
    // });


    // -----------ORDER------------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find({
    //     order: {
    //         person_id: "DESC"
    //     }, // DESC / ASC
    // });

    // ----------SKIP,TAKE----------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find({
    //     order: {
    //         person_id: "DESC",
    //     },
    //     skip: 1,
    //     take: 2
    // });
    // return reuslt;

    // ---------- NOT ------------------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find({
    //     where: {
    //         name: Not("Piyas")
    //     }
    // })
    // return reuslt;

    //---------------LESS THAN EQUAL--------------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find({
    //     where: {
    //         person_id: LessThanOrEqual(6),

    //     }
    // })
    // return reuslt;

    // // -----------------LIKE-----------------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find({
    //     where: {
    //         name: Like("%__y__%"),

    //     }
    // })
    // return reuslt;

    // // -----------------Between-----------------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find({
    //     where: {
    //         person_id: Between(0, 4),

    //     }
    // })
    // return reuslt;


    // -----------------isNull-----------------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find({
    //     where: {
    //         name: IsNull(),

    //     }
    // })
    // return reuslt;

    // find duplicate age by own created static method
    const repository = getCustomRepository(Person_Static_Method);
    const result = await repository.findByAge(24);

    // ----------------------------------//
    // const repository = getRepository(Person);
    // const reuslt = await repository.find()
    return result;

}

const Get_One_Person_Service = async (pid: string) => {

    const repository = getRepository(Person);
    const result = await repository.findOne({ where: { person_id: Number(pid) } });

    return result;
}

export const Person_Services = {
    Create_Person_Service,
    Update_Person_Service,
    Delete_Person_Service,
    Get_All_Person_Service,
    Get_One_Person_Service
}