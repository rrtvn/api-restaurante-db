import { useDispatch } from 'react-redux';
import { startGuardarPlatos } from '../actions/platosActions';
import { FormPlato } from '../components/Form/FormPlato';
import Box  from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TablePlatos } from '../components/Table/TablePlatos';


export const AgregarPlato = () => {

    const dispatch = useDispatch();

    const addPlato = async(plato) =>{
        let res = await dispatch(startGuardarPlatos(plato));
        if (res != null) {
            console.log(res)
        }
    }


    return (
        <div>
            <Box className='w-full mb-20 py-20 px-60'>
                <Grid container >
                    <Grid  xs={2} md={5} >
                        <FormPlato onAgregar={addPlato}></FormPlato>
                    </Grid>
                    <Grid xs={2} md={7} className='grid-table py-14 pl-10'>
                        <TablePlatos className="py-10"></TablePlatos>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

