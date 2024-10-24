import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department";




@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    student_id!: number;

    @OneToOne(() => Department)
    @JoinColumn({ name: "department_id" })
    department!: Department;

    @Column()
    student_name!: string;

    @Column()
    student_age!: number;

}