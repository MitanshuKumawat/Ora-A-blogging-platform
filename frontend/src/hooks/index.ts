import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";

export interface Blog{
    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string
    }
}

export const useBlog = ({id}:{id:string})=>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers:{                                                     // Note here we have to pass the token to access the protected route
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response)=>{
                setLoading(false);
                setBlog(response.data.blog);
        })
    }, [id]);

    return {
        loading,
        blog
    }
}

export const useBlogs = ()=>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers:{                                                     // Note here we have to pass the token to access the protected route
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response)=>{
                setLoading(false);
                setBlogs(response.data.blogs);
        })
    }, []);

    return {
        loading,
        blogs
    }
}