import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startCargarPlato } from "../../actions/platosActions";
import {
    Table
    , TableBody
    , TableCell, TableContainer
    , TableHead,
    TableRow
} from "@mui/material"


export const TablePlatos = () => {
    const dispatch = useDispatch();
    const {platos} = useSelector(state => state.platos)

    useEffect(() => {
        dispatch(startCargarPlato());
    }, [dispatch, startCargarPlato])


    const tablePlatos = platos.map((plato) => (
        <TableRow
            key={platos._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell>{plato.title}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
        </TableRow>
    ));

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre plato</TableCell>
                        <TableCell>Categoria</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Clasificacion</TableCell>
                        <TableCell>Imagen</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tablePlatos}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
