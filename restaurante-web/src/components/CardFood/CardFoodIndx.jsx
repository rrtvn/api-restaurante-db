import { Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CardFoodIndx = ({img, title, categorias, description, precio}) => {
  return (
    <Card className="card-conteiner" sx={{ maxHeight: 345 }}>
            <CardMedia
                className='conteiner-media relative'
                sx={{ height: 720 }}
                image={'src/assets/Platos/' + img}
                

            ><Typography variant='h2' maxWidth={500}><p>{title}</p></Typography></CardMedia>
            
        </Card>
  )
}

export default CardFoodIndx
