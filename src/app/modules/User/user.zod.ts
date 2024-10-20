


import { z } from 'zod';




export const User_Zod_Type = z.object({
    body: z.object({
        name: z.string(),
        age: z.number(),
        email: z.string()
    })
})

