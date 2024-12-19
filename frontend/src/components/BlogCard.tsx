import { Link } from "react-router-dom";

interface BlogCardProps {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    id,
    title,
    content,
    publishedDate,
    authorName
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
     <div className="border-b border-slate-200 p-4 cursor-pointer">
        <div className="text-xs font-medium flex">
            <div className="flex justify-center flex-col">
                <Avatar authorName={authorName} />
            </div>
            <div className="flex justify-center flex-col text-slate-700 pl-2">
                {authorName}
            </div>
            <div className=" flex justify-center flex-col px-1 pt-1">
                <div className="w-0.5 h-0.5 bg-slate-400 rounded-full"></div>
            </div>
            <div className="text-slate-400 flex justify-center flex-col">{publishedDate}</div>
            
        </div>
        <div className="text-2xl font-extrabold">
            {title}
        </div>
        <div className=" font-serif text-slate-800 font-thin">
            {content.slice(0, 100)}...
        </div>
        <div className="text-xs text-slate-400 flex justify-center flex-col py-5">
            {`${Math.ceil(content.length / 300)} min read`}      {/* TODO: calculate read time --> Math.ceil() return an int >= */}
        </div>
    </div>
    </Link>
};

export function Avatar({authorName, size=7, textsize='xs'}: {authorName: string; size?: number; textsize?: string}) {
    return <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full`}>
        <span className={`font-medium text-${textsize} text-gray-600`}>{authorName.split(" ").length > 1 ? authorName.split(" ")[0].charAt(0) + authorName.split(" ")[1].charAt(0) : authorName.charAt(0)} </span>
    </div>
}