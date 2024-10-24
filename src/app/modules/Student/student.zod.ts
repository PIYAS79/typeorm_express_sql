



import { z } from 'zod';

export const Create_Student_Zod_Type = z.object({
    body: z.object({
        // student_id: z.string(),
        student_name: z.string(),
        student_age: z.number(),
        // department_id: z.number(),
        department_name: z.string(),
        department_head: z.string()
    })
})


