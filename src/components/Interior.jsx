import React, { useState, useEffect } from "react";
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
  Paper,
  MobileStepper,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgInterior1 from "../assets/img/interior1.jpg";
import ImgInterior2 from "../assets/img/interior2.jpg";
import ImgInterior3 from "../assets/img/interior3.jpg";
import ImgInterior4 from "../assets/img/interior4.jpg";
import ImgInterior5 from "../assets/img/interior5.jpg";
import ImgInterior6 from "../assets/img/interior6.jpg";

// const items = [
//   { title: "Tipe 1", image: `${ImgInterior1}` },
//   { title: "Tipe 2", image: `${ImgInterior2}` },
//   { title: "Tipe 3", image: `${ImgInterior3}` },
//   { title: "Tipe 4", image: `${ImgInterior1}` },
//   { title: "Tipe 5", image: `${ImgInterior2}` },
//   { title: "Tipe 6", image: `${ImgInterior3}` },
//   { title: "Tipe 7", image: `${ImgInterior1}` },
//   { title: "Tipe 8", image: `${ImgInterior2}` },
//   { title: "Tipe 9", image: `${ImgInterior3}` },
// ];

const Interior = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#130C05",
          color: "common.white",
          height: "770px",
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
          <Grid item xs={12} sm={4}>
            <Slider {...settings}>
              <div>
                <Card sx={{ width: "370px" }}>
                  <img
                    src={ImgInterior1}
                    style={{ width: "370px", height: "350px" }}
                  />
                </Card>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", color: "#AEADAD", mt: 1 }}
                >
                  Tipe 1
                </Typography>
              </div>
              <div>
                <Card sx={{ width: "370px" }}>
                  <img
                    src={ImgInterior2}
                    style={{ width: "370px", height: "350px" }}
                  />
                </Card>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", color: "#AEADAD", mt: 1 }}
                >
                  Tipe 2
                </Typography>
              </div>
              <div>
                <Card sx={{ width: "370px" }}>
                  <img
                    src={ImgInterior3}
                    style={{ width: "370px", height: "350px" }}
                  />
                </Card>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", color: "#AEADAD", mt: 1 }}
                >
                  Tipe 3
                </Typography>
              </div>
              <div>
                <Card sx={{ width: "370px" }}>
                  <img
                    src={ImgInterior4}
                    style={{ width: "370px", height: "350px" }}
                  />
                </Card>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", color: "#AEADAD", mt: 1 }}
                >
                  Tipe 1
                </Typography>
              </div>
              <div>
                <Card sx={{ width: "370px" }}>
                  <img
                    src={ImgInterior5}
                    style={{ width: "370px", height: "350px" }}
                  />
                </Card>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", color: "#AEADAD", mt: 1 }}
                >
                  Tipe 2
                </Typography>
              </div>
              <div>
                <Card sx={{ width: "370px" }}>
                  <img
                    src={ImgInterior6}
                    style={{ width: "370px", height: "350px" }}
                  />
                </Card>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", color: "#AEADAD", mt: 1 }}
                >
                  Tipe 3
                </Typography>
              </div>
            </Slider>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Interior;
