

export type Student_Type = {
    // student_id: number,
    department: number,
    student_name: string,
    student_age: number
}



export type Department_Type = {
    department_id: number,
    department_name: string,
    department_head: string
}

export type Create_Student_Type = Student_Type & Department_Type;