
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
                <Typography gutterBottom variant='h4' color={'black'} component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant='h7' color={'black'} component="div">
                    {description}
                </Typography>
                <Typography gutterBottom variant='h5' color={'black'} component="div">
                    {precio}
                </Typography>
            </CardContent>
        </Card>

       
    );
};


