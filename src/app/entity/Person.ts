

import { EntitySchema } from 'typeorm';


interface Person_Type {
    person_id: number,
    name: string,
    age: number,
    gender: string
}

export const Person = new EntitySchema<Person_Type>({
    name: "Person",
    columns: {
        person_id: {
            type: Number,
            generated: true,
            nullable: false,
            primary: true
        },
        name: {
            type: String,
            nullable: false
        },
        age: {
            type: Number,
            nullable: false
        },
        gender: {
            type: String,
            nullable: false
        }
    },
    checks: [
        { expression: `"age">18` }
    ]
})