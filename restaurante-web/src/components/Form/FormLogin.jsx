import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import  {AuthContext}  from "../../context/authContext";
import usersService from "../../services/usersService";
import {loginUser}  from "../../actions/authActions";

export const FormLogin = ({onAgregar}) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isAuthenticated} = useSelector((state) => state.auth);

    const handleLogin = async (credentials) => {
        
        credentials.preventDefault();
        try {
            const credentials = {email, password};
            dispatch(loginUser(credentials));
            
        } catch (error) {
            console.log(error)
        }
    }

    

    return (
        <div  className=" ">

            <div className="pb-5">
                <label htmlFor="email" className="text-black">
                    Email
                </label>
                <InputText className='w-full'  id="email"
                    onInput={(e) => setEmail(e.target.value)} type="text" />
            </div>

            <div className="">
                <label htmlFor="password" className="w-6rem text-black">
                    Password
                </label>
                <InputText className='w-full' id="password"
                    onInput={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div className=" ">

                <Button label="Login" icon="pi pi-user" onClick={handleLogin} className="w-10rem items-end my-10 "></Button>
            </div>


        </div>
    )
}