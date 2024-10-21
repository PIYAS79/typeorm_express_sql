


import { z } from 'zod';




export const User_Zod_Type = z.object({
    body: z.object({
        name: z.string(),
        age: z.number(),
        email: z.string()
    })
})

export const Update_User_Zod_Type = z.object({
    body: z.object({
        name: z.string().optional(),
        age: z.number().optional(),
        email: z.string().optional()
    })
})