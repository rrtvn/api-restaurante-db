

import './FormReserva.css';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import { Dropdown } from "primereact/dropdown";

export const FormReserva = ({ onAgregar }) => {
    const horas = [
        { name: '13:00' },
        { name: '13:30' },
        { name: '14:00' },
        { name: '14:30' },
        { name: '15:00' },
        { name: '15:30' }
    ];




    const [fullName, setFullName] = useState("");
    const [rut, setRut] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [cantPersonas, setCantPersonas] = useState("");
    const [selectedHora, setSelectedHora] = useState(null);
    const [date, setDate] = useState(null);

    const handleReserva = async () => {
        let reserva = { fullName, rut, email, telefono, cantPersonas, selectedHora, date };
        onAgregar(reserva);

    }


    return (
        <div className="bg-zinc-800  p-10 rounded-md container-form">


            <div className="col-sm-6 my-5">
                <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                <input type="text" id='fullName'
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                    onInput={(e) => setFullName(e.target.value)} />
            </div>


            <div className="col-sm-6 my-5">
                <label htmlFor="rut" className="form-label">Rut</label>
                <input type="text" id='rut'
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                    onInput={(e) => setRut(e.target.value)} />

            </div>
            <div className="col-sm-6 my-5">
                <label htmlFor="email" className="form-label">Correo Electronico</label>
                <input type="email" id='email'
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                    onInput={(e) => setEmail(e.target.value)} />
            </div>



            <div className="col-sm-6 my-5">
                <label htmlFor="telefono" className="form-label">Telefono (+56)</label>
                <input type="number" id='telefono'
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                    onInput={(e) => setTelefono(e.target.value)} />
            </div>

            <div className="col-sm-6 my-5 ">
                <label htmlFor="cantPersonas" className="form-label w-2 ">Cantidad de Personas</label>
                <input type="number" id='cantPersonas'
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                    onInput={(e) => setCantPersonas(e.target.value)} />

            </div>



            <div className="col-sm-6 my-5">
                <label htmlFor="horaReserva" className="w-2 form-label">Hora de reserva </label>

                <Dropdown
                    id="horaReserva"
                    value={selectedHora}
                    onChange={(e) => setSelectedHora(e.value)}
                    onInput={(e) => {

                        const obj = e.value

                        setSelectedHora(obj['name'])
                    }}
                    options={horas}
                    optionLabel="name"
                    placeholder="Seleccione Hora"
                    className="w-full md:w-14rem"

                ></Dropdown>
            </div>

            <div className="col-sm-6 my-5">
                <label htmlFor="fechaReserva" className="form-label ">Fecha de reserva </label>

                <Calendar value={date}
                    id='fechaReserva'
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                    onChange={(e) => setDate(e.value)}
                    onInput={(e) => setDate(e.value)}
                    dateFormat="dd/mm/yy"
                />

            </div>


            <Button className='w-full btn-form' onClick={handleReserva} label='Reservar' type='submit'></Button>









        </div>
    )
}