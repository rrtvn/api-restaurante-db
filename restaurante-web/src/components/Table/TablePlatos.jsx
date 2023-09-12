import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startCargarPlato } from "../../actions/platosActions";
import {
    Paper,
    Table
    , TableBody
    , TableCell, TableContainer
    , TableHead,
    TableRow
} from "@mui/material"

import "../Table/TablePlatos.css"


export const TablePlatos = () => {
    const dispatch = useDispatch();
    const {platos} = useSelector(state => state.platos)

    useEffect(() => {
        dispatch(startCargarPlato());
    }, )

    

      

    const tablePlatos = platos.map((plato) => (
        <TableRow
            key={plato._id}
            
        >
            <TableCell align="left" component="th" scope="row" className="txt-table">{plato.nombre}</TableCell>
            <TableCell  align="right">{plato.descripcion}</TableCell>
            <TableCell  align="right">{plato.categorias}</TableCell>
            <TableCell  align="right">{plato.precio}</TableCell>
            <TableCell align="right">{plato.clasificacion}</TableCell>
            <TableCell align="right">{plato.img}</TableCell>
        </TableRow>
    ));

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right" >Nombre plato</TableCell>
                        <TableCell align="right" >Descripcion</TableCell>
                        <TableCell align="right" >Categoria</TableCell>
                        <TableCell align="right" >Precio</TableCell>
                        <TableCell align="right" >Clasificacion</TableCell>
                        <TableCell align="right" >Imagen</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tablePlatos}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
