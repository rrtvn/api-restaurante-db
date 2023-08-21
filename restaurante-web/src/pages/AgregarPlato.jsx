import Box  from '@mui/material/Box';
import  Container  from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FormPlato } from '../components/Form/FormPlato';
import { TablePlatos } from '../components/Table/TablePlatos';


export const AgregarPlato = () => {


    return (
        <Container className='h-screen'>
            <Box className='w-full mb-10'>
                <Grid >
                    <Grid >
                        <FormPlato></FormPlato>
                    </Grid>
                    <Grid className='grid-table'>
                        <TablePlatos></TablePlatos>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

