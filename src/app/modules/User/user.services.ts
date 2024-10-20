import { EntityManager, getManager } from "typeorm";
import { User } from "../../entity/User";


const Create_User_Service = async (data: Create_User_Type) => {

    const entityManager = getManager();
    // insert data
    const newUser = await entityManager.insert(User, {
        name: data.name,
        age: data.age,
        email: data.email
    })




    return {};
}



export const User_Services = {
    Create_User_Service,

}