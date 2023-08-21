import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {startCargarCategoria} from '../../actions/categoriasActions'

import { Dropdown } from 'primereact/dropdown';

export const DropDownCategorias = ({categorias}) => {
    
    const [selectedCategoria, setSelectedCategoria] = useState(null);
    const dispatch = useDispatch();
    const [categorias] = useSelector(state => state.categorias);

    useEffect(() => {
        dispatch(startCargarCategoria);
    }, [ dispatch, startCargarCategoria]);



    return (
        <Dropdown value={selectedCategoria}
            onChange={(e) => setSelectedCategoria(e.value)}
            options={categorias}
            optionLabel='name'
            placeholder='Seleccione categoria'
            className='' ></Dropdown>
    )
}

