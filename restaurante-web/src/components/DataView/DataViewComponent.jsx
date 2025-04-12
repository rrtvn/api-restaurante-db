import { Box } from "@mui/material";
import { DataView } from "primereact/dataview";
import { CardFood } from "../CardFood/CardFood";

import "./DataView.css"

export const DataViewComponent = ({cargarPlatos}) => {
  const itemTemplate = (plato) => {
    return (
      <CardFood
        className=""
        key={plato._id}
        img={plato.img}
        title={plato.nombre}
        categorias={plato.categorias}
        description={plato.descripcion}
        precio={"$ " + plato.precio}
      />
    );
  };
  return (
    <Box sx={{ width: "100%" }} className="data-platos  px-10 py-10 columns">
      <DataView
        value={cargarPlatos}
        id="data-view"
        layout="grid"
        className=""
        itemTemplate={itemTemplate}
      />
    </Box>
  );
}
