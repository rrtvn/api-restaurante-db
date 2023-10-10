import { Card, CardActionArea } from "@mui/material"

export const CardCategorias = ({ name, onClick }) => {




  return (
    <CardActionArea onClick={onClick} >
      
      <Card className="card-cat"
      sx={{
        minWidth: 85
        , minHeight: 120
        , marginLeft: 2
        , marginRight: 2
        , marginTop: 1
        , marginBottom: 5

      }}>
      <p className="">

        {name}
      </p>
    </Card>
    </CardActionArea>
    
  )
}


