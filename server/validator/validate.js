
import {z} from'zod';

const loginSchema=z.object({
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .min(10,{message:"Email must be at least of 10 characters"})
    .max(255,{message:"Email must be  less than of 255 characters"}),
    password:z
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be at least of 7 characters"})
    .regex(/[A-Z]/,{message: 'Password must contain at least one uppercase letter'})
    .regex(/[a-z]/,{message: 'Password must contain at least one lowercase letter'})
    .regex(/[0-9]/, {message:'Password must contain at least one number'})
    .regex(/[@$!%*?&]/, {message:'Password must contain at least one special character'}),
})
const signupSchema=loginSchema.extend({
    name:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least of 3 characters"})
    .max(255,{message:"Name must be less than of 255 characters"}),
    cfmPassword:z.string({required_error:"Password is required"})
    
}).refine((data)=>data.password=== data.cfmPassword,{ message:"Passwords do not match"});
export{loginSchema,signupSchema}