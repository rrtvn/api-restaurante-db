import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useAuth } from "../../context/authContext";
import { loginUser } from "../../actions/authActions";
import usersService from "../../services/usersService";


export const FormLogin = ({onAgregar}) => {

    const {  login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const credentials = {email, password};
            dispatch(login(credentials))
            const user = usersService.signIn(Cookies.get('token'));
            if(!user){
                alert('hola')
            }
            
            
        } catch (error) {
            console.log(error)
        }
        
        // navigate('/addPlato');
    }

    

    return (
        <div className="  ">

            <div className="mx-28">
                <label htmlFor="email" className="w-6rem text-black">
                    Email
                </label>
                <InputText className='w-full' id="email"
                    onInput={(e) => setEmail(e.target.value)} type="text" />
            </div>

            <div className="mx-28 py-5">
                <label htmlFor="password" className="w-6rem text-black">
                    Password
                </label>
                <InputText className='w-full' id="password"
                    onInput={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div className="mx-60 ">

                <Button label="Login" icon="pi pi-user" onClick={handleLogin} className="w-10rem items-end my-10 mx-auto"></Button>
            </div>


        </div>
    )
}