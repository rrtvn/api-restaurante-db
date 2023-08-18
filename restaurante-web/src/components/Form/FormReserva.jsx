
import { useForm } from 'react-hook-form';
import { registrarReserva } from '../../api/auth.js';
import './FormReserva.css'
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import { DropdownHoras } from '../DropdownHoras.jsx';

export const FormReserva = () => {


    const { register, handleSubmit } = useForm();
    const [date, setDate] = useState(null);
    return (
        <div className="bg-zinc-800  p-10 rounded-md container-form">
            <form onSubmit={handleSubmit(async (values) => {
                const res = await registrarReserva(values);
                console.log(res);
            })}>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <label htmlFor="name" className="form-label">Nombre Completo</label>
                        <input type="text" {...register("nombre", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />
                    </div>

                </div>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <label htmlFor="rut" className="form-label">Rut</label>
                        <input type="text" {...register("rut", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />
                        <label htmlFor="inputAddress" className="form-label">Correo Electronico</label>
                        <input type="email" {...register("email", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />
                    </div>

                </div>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <label htmlFor="phone" className="form-label">Telefono (+56)</label>
                        <input type="number" {...register("telefono", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />
                    </div>

                    <div className="col-sm-6 ">
                        <label htmlFor="date" className="form-label w-2 ">Cantidad de Personas</label>
                        <input type="number" {...register("cantPersonas", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />

                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-6">
                        <label htmlFor="date" className="w-2 form-label">Hora de reserva </label>

                        <DropdownHoras {...register("horaReserva", { required: true })}></DropdownHoras>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="date" className="form-label ">Fecha de reserva </label>

                        <Calendar value={date} {...register("fechaReserva", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                            onChange={(e) => setDate(e.value)} showIcon />

                    </div>

                </div>

                <div className="">

                    <Button className='w-full btn-form' label='Reservar' onClick={registrarReserva()}></Button>

                </div>






            </form>
        </div>
    )
}