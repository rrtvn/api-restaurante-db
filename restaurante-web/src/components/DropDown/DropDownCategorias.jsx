
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startCargarCategoria } from '../../actions/categoriasActions'

import { Dropdown } from 'primereact/dropdown';

export const DropDownCategorias = () => {
    const [selectedCategoria, setSelectedCategoria] = useState(null);

    const dispatch = useDispatch();
    const { categorias } = useSelector(state => state.categorias);

    useEffect(() => {
        dispatch(startCargarCategoria());
    })

    return (
        <Dropdown
            value={selectedCategoria}
            onChange={(e) => setSelectedCategoria(e.value)}
            onInput={(e) => setSelectedCategoria(e.target.value)}
            options={categorias}
            optionLabel='name'
            placeholder='Seleccione categoria'
            className='w-full bg-zinc-700 text-white' ></Dropdown>
    )
}

