import { Blog } from "../hooks"

export const FullBlog = ({blog}:{blog:Blog})=>{
    return <div className="grid grid-cols-12 px-10 pt-16 max-w-screen-xl">
        <div className="col-span-8 w-full">
            <div className="text-5xl font-extrabold pb-3">
                {blog.title}
            </div>
            <div className="text-slate-500 font-medium pb-3">
                Posted on 19th December 2024
            </div>
            <div className="pr-6">
                {blog.content}
            </div>
        </div>
        <div className="col-span-4 w-full pl-4">
           <div className="font-medium">Author</div>
           <div className="grid grid-cols-8 pt-1">
                <div className="col-span-1 p-2 pt-7">
                    <div className="w-7 h-7 bg-slate-200 rounded-full"></div>
                    </div>
                <div className="col-span-7">
                    <div className="text-xl font-extrabold py-2">{blog.author.name || "Unknown User"}</div>
                    <div className="text-slate-500 font-medium">The customer support I recieved was exceptional. The support team went above and beyond to address my concerns.</div>
                </div>
           </div>
        </div>
    </div>
} 