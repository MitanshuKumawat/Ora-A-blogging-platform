import {z} from 'zod'

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string()
})

export type SignupInput = z.infer<typeof signupSchema>

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string()
})

export type SigninInput = z.infer<typeof signinSchema>

export const createblogInput = z.object({
    title: z.string(),
    content: z.string()
})

export type CreateBlogInput = z.infer<typeof createblogInput>

export const updateblogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

export type UpdateBlogInput = z.infer<typeof updateblogInput>