



import { EntitySchema } from 'typeorm';


interface User_Type {
    user_id:number,
    name:string,
    age:number,
    email:string
}

export const User = new EntitySchema<User_Type>({
    name:"User",
    columns:{
        user_id:{
            type:Number,
            generated:true,
            primary:true
        },
        name:{
            type:String,
        },
        age:{
            type:String,
        },
        email:{
            type:String,
        }
    },
    checks:[
        {expression:`"age" > 18`},
    ]
})