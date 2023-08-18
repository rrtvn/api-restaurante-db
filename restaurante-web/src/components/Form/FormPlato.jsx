
import { useForm } from 'react-hook-form';
import { registrarPlato } from '../../api/auth.js'


export const FormPlato = () => {

    const { register, handleSubmit } = useForm();

    return (

        <div className="bg-zinc-800  p-10 rounded-md container-form">
            <form onSubmit={handleSubmit(async (values) => {
                const res = await registrarPlato(values);
                console.log(res);
            })}>
                <div className="form-group row">

                    <div className="col-sm-6">
                        <label htmlFor="name" className="form-label">Nombre Plato</label>
                        <input type="text" {...register("nombre", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />
                        <label htmlFor="name" className="form-label">Categoria</label>
                        {/* DROPDOWN  */}
                    </div>

                    <div className="DESCRIPCION">

                    </div>

                    <div className="PRECIOYCALIFICACION">
                        <label htmlFor="precio" className="form-label">Precio</label>
                        <input type="number" {...register("nombre", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />
                        <label htmlFor="name" className="form-label">Clasificacion</label>
                        <input type="number" {...register("nombre", { required: true })}
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="name" className="form-label">Seleccione imagen</label>
                        <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" type="file" aria-label="Custom controls" />

                    </div>
                </div>
                <button type='button' className='btn bg-black'></button>
            </form>
        </div>

    )
}

