import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";





@Entity()

export class Department {
    @PrimaryGeneratedColumn()
    department_id!:number;

    @Column()
    department_name!:string;

    @Column()
    department_head!:string
}