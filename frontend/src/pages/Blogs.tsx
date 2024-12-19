import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>
        <div className="flex justify-center">
            <div className=" max-w-xl pt-20 w-full">
                <div className="mb-10"><Skeleton /></div>
                <div className="mb-10"><Skeleton /></div>
                <div className="mb-10"><Skeleton /></div>
            </div>
        </div>
        </div>
    }

    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className=" max-w-xl pt-5">
            {blogs.map((blog)=>{ return <BlogCard
                id={blog.id}
                authorName={blog.author.name || "Unknown User"}
                title={blog.title}
                content={blog.content}
                publishedDate="2024-19-12"
                >
                </BlogCard>
            })}
            </div>
        </div>
    </div>
    
}