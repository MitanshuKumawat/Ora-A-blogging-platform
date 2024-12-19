import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = ()=>{
    return <div className="border-b flex justify-between px-14 py-2">
        <Link to={"/blog/bulk"}>
            <div className="font-bold text-3xl font-serif flex justify-center flex-col cursor-pointer">Ora</div>
        </Link>
        <div className="cursor-pointer">
            <Link to="/blog/publish">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300   font-medium rounded-full text-sm h-10 w-20 mr-4">Publish</button>
            </Link>
            <Avatar textsize="base" size={10} authorName="Mitanshu Kumawat" />
        </div>
    </div>
}