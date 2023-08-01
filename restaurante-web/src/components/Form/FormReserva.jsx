
import { useForm } from 'react-hook-form';
import { registrarReserva } from '../../api/auth.js';

export const FormReserva = () => {


    const { register, handleSubmit } = useForm();
    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={handleSubmit(async (values) => {
                const res = await registrarReserva(values);
                console.log(res);
            })}>
                <div className="form-group row">
                    <div className="col-sm-6">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" {...register("nombre", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="last-name" className="form-label">Apellido</label>
                        <input type="text" {...register("apellido", { required: true })}
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
                        <label htmlFor="date" className="form-label ">Cantidad de Personas</label>
                        <input type="number" {...register("cantPersonas", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />

                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-6">
                        <label htmlFor="date" className="form-label">Hora de reserva </label>
                        <input type="text" {...register("horaReserva", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />

                        {/* <DropdownHoras {... register("horaReserva", {required: true})}></DropdownHoras> */}
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="date" className="form-label ">Fecha de reserva </label>
                        <input type="text" {...register("fechaReserva", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />

                        {/* <Calendar value={fecha} onChange={(e) => setFecha(e.value)} showIcon /> */}

                    </div>

                </div>

                <button type="submit" >Reservar</button>

            </form>
        </div>
    )
}