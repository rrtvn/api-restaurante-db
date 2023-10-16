

import { Divider, Grid, Stack } from '@mui/material';
import './CardFood.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const CardFood = ({ img, title, categorias, description, precio }) => {
    return (


        <Card id='card-plato' sx={{ width: 240 }}
            className=" h-full mt-5 ml-3 mr-3 py-6 px-4 surface-border 
                border-1 border-round sm:col-4 lg:col-12 xl:col-3 "
        >

            <CardMedia
                id='card-media-platos'
                className=' w-full h-2/5  rounded-lg shadow-lg   '
                sx={{ height: 500 }}
                image={'src/assets/Platos/' + img}
            />
            <Stack spacing={1} id='conteiner-card ' className='conteiner-content mt-5 px-5 h-2/5 '>

                <Grid>
                    <Typography gutterBottom className='h-10 mt-5 relative' color={'black'} component="div">
                        {title}
                    </Typography>
                </Grid>
                <Divider></Divider>
                <Grid>
                    <Typography gutterBottom className='' color={'black'} component="div">
                        {categorias}
                    </Typography>
                </Grid>
                <Grid>
                    <Typography gutterBottom className='text-justify ' color={'black'} component="div">
                        {description}
                    </Typography>

                </Grid>
                <Grid>
                    <Typography className='pt-5 pr-5 h-14' align='right' color={'black'} component="div">
                        {precio}
                    </Typography>

                </Grid>
                <Grid>

                </Grid>
            </Stack>
        </Card>




    );
};


