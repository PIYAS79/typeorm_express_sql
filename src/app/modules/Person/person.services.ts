import { getRepository } from "typeorm";
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


export const Person_Services = {
    Create_Person_Service,
    Update_Person_Service,

}