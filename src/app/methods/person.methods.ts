import { AbstractRepository, EntityRepository } from "typeorm";
import { Person } from "../entity/Person";
import { Person_Type } from "../modules/Person/person.interface";



@EntityRepository(Person)
export class Person_Static_Method extends AbstractRepository<Person_Type> {
    findByAge(age: number) {
        return this.repository.findOne({ where: { age: age } })
    }
}

