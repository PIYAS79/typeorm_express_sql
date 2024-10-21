import { EntityManager, getManager } from "typeorm";
import { User } from "../../entity/User";


const Create_User_Service = async (data: Create_User_Type) => {

    const entityManager = getManager();
    // insert data to database 
    const newUser = await entityManager.insert(User, {
        name: data.name,
        age: data.age,
        email: data.email
    })

    return newUser;
}

const Update_User_Service = async (data: Partial<Create_User_Type>, uid: string) => {

    const remainingProperties: Record<string, unknown> = { ...data };

    const entityManager = getManager();

    const result = await entityManager.update(User, { user_id: uid }, remainingProperties);

    return result;
}

const Delete_User_Service = async (uid: string) => {

    const entityManager = getManager();
    const result = await entityManager.delete(User,{user_id:uid});

    return result;
}

const Get_All_User_Service = async()=>{
    const entityManager = getManager();
    const result = await entityManager.find(User);
    return result;
}

const Get_One_User_Service = async(uid:string)=>{
    const entityManager = getManager();
    const result = await entityManager.findOne(User,{where:{user_id:Number(uid)}})
    return result;
}



export const User_Services = {
    Create_User_Service,
    Update_User_Service,
    Delete_User_Service,
    Get_All_User_Service,
    Get_One_User_Service,

}