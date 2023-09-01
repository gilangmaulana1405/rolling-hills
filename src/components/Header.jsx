import React from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import ImgBrand from "../assets/img/brand.png";
import ImgJumbotron from "../assets/img/jumbotron.jpg";
import BorderedButtomBox from "./BorderedBottomBox";

const Header = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          padding: "25px 20px",
          position: "absolute",
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <img
                src={ImgBrand}
                height="45px"
                width="167px"
                layout="intrinsic"
              />
            </Grid>
            <Grid item xs="auto">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="inherit"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab
                    label={
                      <Typography
                        variant="body1"
                        color="common.white"
                        sx={{
                          "&:hover": {
                            color: "#b0bec5",
                          },
                        }}
                      >
                        Beranda
                      </Typography>
                    }
                  />
                  <Tab
                    label={
                      <Typography
                        variant="body1"
                        color="common.white"
                        sx={{
                          "&:hover": {
                            color: "#b0bec5",
                          },
                        }}
                      >
                        About Us
                      </Typography>
                    }
                  />
                  <Tab
                    label={
                      <Typography
                        variant="body1"
                        color="common.white"
                        sx={{
                          "&:hover": {
                            color: "#b0bec5",
                          },
                        }}
                      >
                        Facilities
                      </Typography>
                    }
                  />
                  <Tab
                    label={
                      <Typography
                        variant="body1"
                        color="common.white"
                        sx={{
                          "&:hover": {
                            color: "#b0bec5",
                          },
                        }}
                      >
                        Interior
                      </Typography>
                    }
                  />
                </Tabs>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: "relative",
          height: "768px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.4)",
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.8) 100%
            )`,
          },
        }}
      >
        <img
          src={ImgJumbotron}
          layout="fill"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <Container maxWidth="md" sx={{ position: "absolute", zIndex: 1000 }}>
          <Typography
            variant="h3"
            color="common.white"
            fontWeight="600"
            textAlign="center"
          >
            Properti Anda, Prioritas Kami.
          </Typography>
          <Typography
            variant="h6"
            color="common.white"
            textAlign="center"
            sx={{ my: 2 }}
          >
            Merayakan Kehidupan dalam Rumah yang Menawan. Rumah Impian Anda
            Tersedia di Sini.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
