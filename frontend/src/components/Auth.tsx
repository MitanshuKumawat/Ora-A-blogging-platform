import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { SignupInput } from "@mitanshukumawat/common"
import { BACKEND_URL } from "../config"

export const Auth = ({type}:{type:"signin"|"signup"}) => {
    const navigate = useNavigate();
    const [signupInput,setSignupInput] = useState<SignupInput>({     //providing zod infered schema
        email:"",                                                    // actually we should make a different component for signup and signin
        password:"",
        name:""
    });

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`, signupInput);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blog/bulk");
        }
        catch(e){
            alert("Error in sending request");
            console.log(e);
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            {/* {type === "signin" ? "Sign in" : "Sign up"} */}
            <div>
                <div className="px-8">
                    <div className="text-3xl font-extrabold text-center">
                        {type==="signin"?"Sign In":"Create an account"}
                    </div>
                    <div className="text-slate-400">
                        {type==="signin"?"Don't have an account?":"Already have an account?"}
                        <Link className="underline cursor-pointer pl-2" to={type==="signin"?"/signup":"/signin"}>{type==="signin"?"Sign up":"Login"}</Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type==="signup"?<LabelledInput label="Username" placeholder="Enter your username" onChange={(e)=>{
                        setSignupInput({
                            ...signupInput,       // to spread the initial state
                            name:e.target.value,    //then overide name
                        })
                    }}/>:null}          
                    <LabelledInput label="Email" placeholder="Enter your email" onChange={(e)=>{
                        setSignupInput({
                            ...signupInput,       // to spread the initial state
                            email:e.target.value,
                        })
                    }}/>
                    <LabelledInput label="Password" type={"password"} placeholder="Enter your password" onChange={(e)=>{     // here type is passed to get stars in the input
                        setSignupInput({
                            ...signupInput,       // to spread the initial state
                            password:e.target.value,     
                        })
                    }}/>
                </div>
                <div>
                    <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 me-2">{type==='signin' ? 'Sign in' : 'Sign up'}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputTypes{
    label:string;
    placeholder:string;
    type?:string;
    onChange:React.ChangeEventHandler<HTMLInputElement>;
}

function LabelledInput({label, placeholder, type, onChange}:LabelledInputTypes){
    return <div>
        <div className="mb-2">
            <label className="block mb-1 text-sm font-semibold text-gray-900 dark:text-black">{label}</label>
            <input type={type||"text"} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}