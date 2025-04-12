import { useDispatch } from "react-redux";
import { startGuardarPlatos } from "../actions/platosActions";
import { FormPlato } from "../components/Form/FormPlato";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TablePlatos } from "../components/Table/TablePlatos";

export const AgregarPlato = () => {
  const dispatch = useDispatch();

  const addPlato = async (plato) => {
    let res = await dispatch(startGuardarPlatos(plato));
    if (res != null) {
      console.log(res);
    }
  };

  return (
    <Box className="w-full  p-10">
      <Grid container spacing={1}>
        <Grid item xs={12} md={5}>
          <FormPlato onAgregar={addPlato}></FormPlato>
        </Grid>
        <Grid item xs={12} md={7} >
          <TablePlatos className=""></TablePlatos>
        </Grid>
      </Grid>
    </Box>
  );
};
