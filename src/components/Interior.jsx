import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import ImgInterior1 from "../assets/img/interior1.jpg";
import ImgInterior2 from "../assets/img/interior2.jpg";
import ImgInterior3 from "../assets/img/interior3.jpg";

const Interior = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#130C05",
          color: "common.white",
          mt: 9,
          height: "772px",
        }}
      >
        <Container>
          <Grid container mx="auto">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "#BAA46E", mt: 4, mb: 2 }}
              >
                INTERIOR
              </Typography>
              <Typography
                variant="h3"
                sx={{ textAlign: "center", color: "#FFFFFF", mb: 3 }}
              >
                DESIGN INTERIOR
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "#AEADAD", mb: 4 }}
              >
                Desain hebat membuat anda tersenyum dan desain tidak semata-mata
                estetis melainkan unsur kesatuan semua indra dan kepraktisan
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1} mx="auto">
            <Grid item xs={12} sm={4} sx={{ width: "400px" }}>
              <Card>
                <CardMedia sx={{ height: "340px" }} image={ImgInterior1} />
              </Card>
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "#AEADAD", mt: 1 }}
              >
                Tipe 1
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia sx={{ height: "340px" }} image={ImgInterior2} />
              </Card>
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "#AEADAD", mt: 1 }}
              >
                Tipe 2
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia sx={{ height: "340px" }} image={ImgInterior3} />
              </Card>
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "#AEADAD", mt: 1 }}
              >
                Tipe 3
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Interior;
