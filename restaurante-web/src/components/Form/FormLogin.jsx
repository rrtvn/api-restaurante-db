import { useState } from "react";
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"


export const FormLogin = ({onAgregar}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleReserva = async () => {
        let signIn = { email, password};
        onAgregar(signIn);
    }

    return (
        <div className="  ">

            <div className="mx-60">
                <label htmlFor="email" className="w-6rem text-black">
                    Email
                </label>
                <InputText className='w-full' id="email"
                    onInput={(e) => setEmail(e.target.value)} type="text" />
            </div>

            <div className="mx-60 py-5">
                <label htmlFor="password" className="w-6rem text-black">
                    Password
                </label>
                <InputText className='w-full' id="password"
                    onInput={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div className="mx-60 ">

                <Button label="Login" icon="pi pi-user" onClick={handleReserva} className="w-10rem my-10 mx-auto"></Button>
            </div>


        </div>
    )
}