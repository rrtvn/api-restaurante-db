

import { Divider, Grid, Stack } from '@mui/material';
import './CardFood.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const CardFood = ({ img, title, categorias, description, precio }) => {
    return (


        <Card id='card-plato' sx={{ width: 240, maxHeight:360, minHeight: 280, position: 'static' }}
            className=" h-full mt-5 ml-3 mr-3 py-2 px-1 surface-border 
                border-1 border-round col-12 sm:col-6  lg:col-12 xl:col-4 "
        >

            <CardMedia
                id='card-media-platos'
                className=' w-full   rounded-lg shadow-lg   '
                sx={{  }}
                image={'src/assets/Platos/' + img}
            />
            <Stack spacing={0} id='stack-content' className=''>

                <Grid>
                    <Typography variant='h6' sx={{overflow: 'hidden', whiteSpace: "nowrap"}} color={'black'} component="div">
                        {title}
                    </Typography>
                </Grid>
                <Grid>
                    <Typography gutterBottom variant='h9' color={'black'} component="div">
                        {categorias}
                    </Typography>
                </Grid>
                <Grid>
                    <Typography gutterBottom variant='h7' className='text-justify ' color={'black'} component="div">
                        {description}
                    </Typography>

                </Grid>
                <Grid>
                    <Typography className='pt-5 pr-5 h-14' variant='h6' align='right' color={'black'} component="div">
                        {precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </Typography>

                </Grid>
                <Grid>

                </Grid>
            </Stack>
        </Card>




    );
};


