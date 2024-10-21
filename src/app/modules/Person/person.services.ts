import { getRepository, Repository } from "typeorm";
import { Person_Type } from "./person.interface";
import { Person } from "../../entity/Person";


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

const Get_All_Person_Service = async () => {

    const repository = getRepository(Person);
    const reuslt = await repository.find();
    return reuslt;
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