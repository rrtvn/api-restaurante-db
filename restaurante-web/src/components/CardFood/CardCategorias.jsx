import { Card, CardActionArea, Typography } from "@mui/material"

export const CardCategorias = ({ name, onClick }) => {




  return (
    <CardActionArea onClick={onClick} >
      
      <Card className="card-cat"
      sx={{
        
         maxHeight: 120
        , marginLeft: 2
        , marginRight: 2
        , marginTop: 1
        , marginBottom: 5
        , maxBlockSize: 120,
        
      }}
      
      
      >
      <Typography sx={{overflow: 'hidden', whiteSpace: "nowrap"}}>

        {name}
      </Typography>
    </Card>
    </CardActionArea>
    
  )
}


