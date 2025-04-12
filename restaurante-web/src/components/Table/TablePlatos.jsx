import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCargarPlato } from "../../actions/platosActions";
import {
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "../Table/TablePlatos.css";

export const TablePlatos = () => {
  const dispatch = useDispatch();
  const { platos } = useSelector((state) => state.platos);

  useEffect(() => {
    dispatch(startCargarPlato());
  });

  const tablePlatos = platos.map((plato) => (
    <TableRow key={plato._id}>
      <TableCell align="right">
        {/* {plato.img} */}

        <CardMedia
          id="card-media-platos"
          className=" w-full rounded-lg shadow-lg "
          sx={{ height: "40%", width: "40%" }}
          image={"src/assets/Platos/" + plato.img}
        />
      </TableCell>
      <TableCell align="left" component="th" scope="row" className="txt-table">
        {plato.nombre}
      </TableCell>
      <TableCell align="right">{plato.descripcion}</TableCell>
      <TableCell align="right">{plato.categorias}</TableCell>
      <TableCell align="right">{plato.precio}</TableCell>
      {/* <TableCell align="right">{plato.clasificacion}</TableCell> */}
      <TableCell align="center">
        <EditIcon fontSize="medium"></EditIcon>
        <DeleteIcon fontSize="medium"></DeleteIcon>
      </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Imagen</TableCell>
            <TableCell align="right">Nombre plato</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">Categoria</TableCell>
            <TableCell align="right">Precio</TableCell>
            {/* <TableCell align="right">Clasificacion</TableCell> */}
            <TableCell align="right">Accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{tablePlatos}</TableBody>
      </Table>
    </TableContainer>
  );
};
