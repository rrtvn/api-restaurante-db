import "./CardFoodIndx.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const CardFoodIndx = ({
  img,
  title,
  categorias,
  clasificacion,
  precio,
}) => {
  return (
    <Grid id="grid-banner" container row sx={{}} spacing={2}>
      <Grid
        id="grid-info"
        direction="column"
        item
        style={{
          flexBasis: "70%",
          flexShrink: 0,
          height: "100%",
          position: "relative",
          overflow: "hidden",
          flexGrow: 0,
        }}
      >
        <Grid container gridRow={2}>
          <Grid item xs={12}>
            <Typography variant="h3" id="title-typo">
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" id="cate-typo">
            {categorias}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box id="box-rating">
            <Rating
              id="rating"
              value={clasificacion}
              readOnly
              size="large"
              precision={0.5}
              border={3}
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.55, boxShadow: 5 }}
                  fontSize="inherit"
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            id="precio-typo"
            sx={{
              height: "35%",
              alignItems: "center",
              justifyContent: "center",
              ml: 7,
            }}
          >
            {"$ " + precio}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        id="grid-img"
        item
        style={{
          flexBasis: "30%",
          height: "100%",
          padding: 0,
        }}
        size={{ xs: 12, sm: 4 }}
      >
        <CardMedia
          style={{
            height: "100%",
            objectPosition: "center",
          }}
          component="img"
          image={"src/assets/Platos/" + img}
        ></CardMedia>
      </Grid>
    </Grid>
  );
};

export default CardFoodIndx;
