

import { z } from 'zod';


export const Create_Zod_Person_Type = z.object({
    body: z.object({
        name: z.string(),
        age: z.number(),
        gender: z.string()
    })
})

export const Update_Zod_Person_Type = z.object({
    body: z.object({
        name: z.string().optional(),
        age: z.number().optional(),
        gender: z.string().optional()
    })
})
