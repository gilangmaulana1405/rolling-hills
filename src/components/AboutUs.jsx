import React from "react";
import BorderedBottomBox from "./BorderedBottomBox";
import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import ImgAboutUs from "../assets/img/aboutus.jpg";

const AboutUs = () => {
  return (
    <>
      <Box>
        <Container sx={{ py: 15 }}>
          <Grid container alignItems="center" spacing={2} columnSpacing={12}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  textAlign: { xs: "center", md: "left", color: "#484848" },
                }}
              >
                Rolling Hills Karawang
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  color: "#7a7a7a",
                }}
              >
                Rolling Hills Karawang hunian mewah berlokasi di pusat
                perekonomian Eastern Corridor dan dikelilingi oleh ratusan
                perusahaan Multinasional dengan akses langsung 0 KM dari exit
                tol Karawang Barat dan hanya 5 menit ke stasiun kereta cepat
                Jakarta – Bandung. Didesain oleh arsitek kelas Dunia Alex Bayu,
                peraih International Arcitect Award.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <img
                src={ImgAboutUs}
                width="648px"
                height="527px"
                layout="responsive"
                style={{ marginLeft: "-23px", }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
