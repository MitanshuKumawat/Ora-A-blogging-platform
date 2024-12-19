import {useBlog} from "../hooks";
import { Appbar } from "../components/Appbar";
import { SkeletonBlog } from "../components/Skeleton";
import { useParams } from "react-router-dom";
import { FullBlog } from "./FullBlog";

export const Blog = ()=>{
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id:id||""
    });

    if (loading) {
      return (
        <div>
          <div className="flex justify-center pt-14">
            <SkeletonBlog />
          </div>
        </div>
      );
    }

    return (
      <div>
        <Appbar />
        <div className="flex justify-center w-full">
          <FullBlog
            blog={blog||{content:"" , title:"" , id:"" , author:{name:""}}}
          />
        </div>
      </div>
    );
}