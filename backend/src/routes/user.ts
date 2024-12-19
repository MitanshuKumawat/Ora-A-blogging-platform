import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign} from 'hono/jwt'     // jwt provided by hono library
import {signinSchema, signupSchema} from "@mitanshukumawat/common"

export const userRouter = new Hono<{
    Bindings: {                // The Bindings object is used to define the structure and types of external variables 
      DATABASE_URL: string
      JWT_SECRET: string
    }
}>();

//signup
userRouter.post('/signup', async (c) => {
  //we have to initialise the prisma client inside the route...this is becoz we can't get access to env var outside the route
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,   // Bindings are part of Hono context(c)
}).$extends(withAccelerate());

  const body = await c.req.json();
  const {success} = signupSchema.safeParse(body);

  if(!success){
    return c.json({error:"Invalid user input"}, 400);
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      name: body.name
    }
  });

  const token = await sign({id:user.id}, c.env.JWT_SECRET);   // we are signing the 'id' of the user by the secret

  return c.json({
    jwt:token
  })
});

// signin
userRouter.post('/signin', async(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,   // Bindings are part of Hono context(c)
}).$extends(withAccelerate());

  const body = await c.req.json();

  const {success} = signinSchema.safeParse(body);

  if(!success){
    return c.json({error:"Invalid user input"}, 400);
  }

  const user = await prisma.user.findFirst({
    where:{
      email:body.email,
      password:body.password
    }
  });

  if(!user)
      return c.json({error:"User not found :("}, 403);
  else{
    const token = await sign({id:user.id}, c.env.JWT_SECRET);
    return c.json({
      jwt:token
    })
  }
});