

import { CardContent, Divider, Grid, Stack } from '@mui/material';
import './CardFood.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const CardFood = ({ img, title, categorias, description, precio }) => {
    return (


        <Card id='card-plato' sx={{ width: 240, maxHeight:360, position: 'static' }}
            className="  mt-5 ml-3 mr-3 py-2 px-1 surface-border 
                border-1 border-round col-12 sm:col-6  lg:col-12 xl:col-4 "
        >

            <CardMedia
                id='card-media-platos'
                className=' w-full rounded-lg shadow-lg '
                sx={{ height: "40%" }}
                image={'src/assets/Platos/' + img}
            />
            <Stack direction="column" id='stack-content' sx={{margin: "10px", height: " 60%", overflow: "hidden" }} className=''>

                <Grid  item id="grid-title" sx={{width: "100%"}}>
                    <Typography id="typo-title" variant='subtitle1'  sx={{overflow: 'hidden', fontWeight: 500 ,whiteSpace: "nowrap"}} color={'black'} component="div">
                        {title}
                    </Typography>
                </Grid>
                <Grid item id="grid-cate" sx={{width: "100%"}}>
                    <Typography id="typo-cate" gutterBottom variant='body2' component="div">
                        {categorias}
                    </Typography>
                </Grid>
                <Grid  item id="grid-descrip" sx={{width: "100%"}}>
                    <Typography id="typo-descrip" gutterBottom variant='caption' sx={{}} className='text-justify ' color={'black'} component="div">
                        {description}
                    </Typography>

                </Grid>
                <Grid item id="grid-precio" sx={{width: "100%"}}>
                    <Typography id="tipo-grid" className='pt-5 pr-5 h-14' variant='button' align='right' color={'black'} component="div">
                        {precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    </Typography>

                </Grid>
                {/* <Grid>

                </Grid> */}
            </Stack>
        </Card>




    );
};


