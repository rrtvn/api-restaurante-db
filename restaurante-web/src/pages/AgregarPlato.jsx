import Box  from '@mui/material/Box';
import  Container  from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FormPlato } from '../components/Form/FormPlato';


export const AgregarPlato = () => {


    return (
        <Container className='h-screen'>
            <Box className='w-full mb-10'>
                <Grid container>
                    <Grid xs={2} md={5}>
                        <FormPlato></FormPlato>
                    </Grid>
                    <Grid className='grid-table' xs={2} md={7}>Table</Grid>
                </Grid>
            </Box>
        </Container>
    )
}

