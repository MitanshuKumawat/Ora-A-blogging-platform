import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {verify } from 'hono/jwt'     // jwt provided by hono library
import {createblogInput, updateblogInput} from '@mitanshukumawat/common'


export const blogRouter = new Hono<{
    Bindings: {                // The Bindings object is used to define the structure and types of external variables 
      DATABASE_URL: string
      JWT_SECRET: string
    }
    Variables:{
        userId:string
    }
  }>();


// auth middleware
blogRouter.use('/*', async(c,next)=>{
  const header = await c.req.header("Authorization") || "";    //to give it a default value...otherwise error would come

  const token = header.split(" ")[1];
  const response = await verify(token, c.env.JWT_SECRET);

  if(!response)
    return c.json({error:"Unauthorised"}, 403);
  else{
    c.set('userId', response.id as string);
    await next();}
});

// post blog
blogRouter.post('/', async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const {success} = createblogInput.safeParse(body);

    if(!success){
      return c.json({error:"Invalid input"}, 400);
    }

    const blog = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId: c.get('userId')
        }
    });

    return c.json({
        message:"Blog created successfully",
        id:blog.id
    });
});

//update blog
blogRouter.put('/', async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const {success} = updateblogInput.safeParse(body);

    if(!success){
      return c.json({error:"Invalid user input"}, 400);
    }

    const blog = await prisma.post.update({
        where:{
            id:body.id,
            authorId: c.get('userId')
        },
        data:{
            title:body.title,
            content:body.content,
        }
    });

    return c.json({
        message:"Blog updated successfully",
        id:blog.id
    });
});


// get all blogs
blogRouter.get('/bulk', async(c) => {               //we putted this route above the /:id route becoz--> if we write 'bulk' route first then/:id route will not work
    const prisma = new PrismaClient({               // or we can change the route to 'get/:id' instead of '/:id'
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });

    return c.json({
        blogs:blog
    });
});


// get a blog
blogRouter.get('/:id', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const id = c.req.param('id');
    const blog = await prisma.post.findFirst({
        where:{
            id:id
        },
        select:{
            id:true,
            content:true,
            title:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });

    return c.json({
        blog:blog
    });
})