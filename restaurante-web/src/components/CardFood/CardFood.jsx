
import { CardActions } from '@mui/material';
import './CardFood.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const CardFood = ({ img, title, categorias, description, precio }) => {
    return (


        <Card id='card-plato' className="p-4 border-1 surface-border    sm:col-6 lg:col-12 xl:col-3  surface-card border-round"
            sx={{ height: 650, width: 420 }} >

            <CardContent className='conteiner-content '>
                <CardMedia
                    id='card-media-platos'
                    className='align-items-center mb-3  rounded-lg shadow-lg gap-3  py-5'
                    sx={{ height: 320, }}
                    image={'src/assets/Platos/' + img}
                />
                <Typography gutterBottom variant='h4' color={'black'} component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant='h6' color={'black'} component="div">
                    {categorias}
                </Typography>
                <Typography gutterBottom variant='h7' color={'black'} component="div">
                    {description}
                </Typography>
                <Typography className='pt-5 pr-5'  variant='h4' align='right' color={'black'} component="div">
                    {precio}
                </Typography>
            </CardContent>
        </Card>




    );
};


