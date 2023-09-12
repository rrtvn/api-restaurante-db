

import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { InputTextarea } from "primereact/inputtextarea";
//import { DropDownCategorias } from '../DropDown/DropDownCategorias.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { startCargarCategoria } from '../../actions/categoriasActions'

import { Dropdown } from 'primereact/dropdown';




export const FormPlato = ({ onAgregar }) => {

    const [selectedCategoria, setSelectedCategoria] = useState(null);

    const dispatch = useDispatch();
    const { categorias } = useSelector(state => state.categorias);

    useEffect(() => {
        dispatch(startCargarCategoria());
    })


    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    //const [categorias, setCategoria] = useState(null);
    const [rating, setRating] = useState(null);
    const [image, setImage] = useState("");

    const handlePlato = async () => {
        let plato = { nombre, descripcion, precio, selectedCategoria, rating, image };
        onAgregar(plato);
    }

    return (

        <div className="bg-zinc-800  p-10 rounded-md container-form">

            <div className="form-group row">

                <div className="col-sm-6 my-5">
                    <label htmlFor="name" className="form-label">Nombre Plato</label>
                    <input type="text"
                        onInput={(e) => setNombre(e.target.value)}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />

                </div>
                <div className="my-5">
                    <label htmlFor="name" className="form-label">Categoria</label>


                    <Dropdown
                        value={selectedCategoria}
                        onChange={(e) => setSelectedCategoria(e.value)}
                        onInput={(e) => setSelectedCategoria(e.target.value)}
                        options={categorias}
                        optionLabel='name'
                        placeholder='Seleccione categoria'
                        className='w-full bg-zinc-700 text-white'
                    ></Dropdown>



                </div>


                <div className="PRECIOYCALIFICACION">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input type="number"
                        onInput={(e) => setPrecio(e.target.value)}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md" />

                </div>
                <div className="my-5">
                    <label htmlFor="name" className="form-label">Clasificacion</label>

                    <Rating value={rating}
                        onInput={(e) => setRating(e.target.value)}
                        onChange={(e) => setRating(e.value)} 
                        cancel={false}
                        className='w-full'
                        />


                </div>

                <div className="col-sm-6 my-5">
                    <label htmlFor="name" className="form-label">Seleccione imagen</label>
                    <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                        onInput={(e) => setImage(e.target.value)}
                        type="file" aria-label="Custom controls" />

                </div>
                <div className="DESCRIPCION my-5">
                    <label htmlFor="name" className="form-label">Descripcion</label>
                    <InputTextarea autoResize className='w-full bg-zinc-700 text-white '
                        onInput={(e) => setDescripcion(e.target.value)} />
                </div>
            </div>
            <div className="div">
                <Button type='submit' onClick={handlePlato} label='Cargar plato' className='w-full btn-form'></Button>
            </div>

        </div>

    )
}

