
import './CardFood.css'
import  Card  from '@mui/material/Card';
import  CardContent  from '@mui/material/CardContent';
import  CardMedia  from '@mui/material/CardMedia';
import  Typography  from '@mui/material/Typography';

export const CardFood = ({img, title, description, precio}) => {
    return (
        <Card className="card-conteiner" sx={{ maxWidth: 345 }}>
            <CardMedia
                className='conteiner-media'
                sx={{ height: 140 }}
                image={'src/' + img}
                

            />
            <CardContent className='conteiner-content'>
                <Typography gutterBottom variant='h5' component="div">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
                <Typography>
                    {precio}
                </Typography>
            </CardContent>
        </Card>

       
    );
};


