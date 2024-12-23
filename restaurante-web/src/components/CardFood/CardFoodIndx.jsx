import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const CardFoodIndx = ({ img, title, categorias, description, precio }) => {
  return (
    <Card
      className="card-banner"
      md={{ maxWidth: 720, display: "flex" }}
      sx={{ maxHeight: 550, justifyItems: "legacy", display: "flex" }}
    >

      <Grid id='grid-banner'  container  spacing={2}>
        <Grid id='grid-info'  item style={{flexBasis: '70%'
          , flexShrink: 0, height: '100%', position: 'relative', overflow: 'hidden', flexGrow: 0}} size={{xs: 12, sm: 8}}>
          <Typography variant="h1"
           
           sx={{ justifyItems: "flex-start", ml: 7 }}>
            <p
              style={{ fontSize: 34, animation: "backwards" }}
              id="title-typo"
            >
              {title}
            </p>
          </Typography>
        </Grid>
        <Grid id='grid-img' item style={{flexBasis: '30%', justifyContent: 'center'
          , alignContent: 'center', position: 'relative', overflow: 'hidden', flexShrink: 0
          , flexGrow: 0, padding: 0, }} size={{xs: 12, sm: 4}}>
          <CardMedia
            style={{objectFit: 'cover'
              , width: '100%'
              , height: '100%'
              ,  objectPosition: 'center'}}
            component="img"
            image={"src/assets/Platos/" + img}
          ></CardMedia>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardFoodIndx;
