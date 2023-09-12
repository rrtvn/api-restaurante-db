import { Card } from "@mui/material"

export const CardCategorias = ({ name }) => {




  return (
    <Card className="card-cat"
      sx={{
        minWidth: 85
        , minHeight: 120
        , marginLeft: 2
        , marginRight: 2
        , marginTop: 1
        , marginBottom: 5

      }}>
      <p>

        {name}
      </p>
    </Card>
  )
}


