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
import ImgFacilities1 from "../assets/img/facilities1.jpg";
import ImgFacilities2 from "../assets/img/facilities2.jpg";
import ImgFacilities3 from "../assets/img/facilities3.jpg";

const Facilities = () => {
  return (
    <>
      <Box sx={{ height: "700px" }}>
        <Container>
          <Grid container mx="auto">
            <Grid item xs={12}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ textAlign: "center", color: "#BAA46E", mt: 8, mb: 6 }}
              >
                Facilities
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} mx="auto">
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  position: "relative",
                  "&::after": {
                    position: "absolute",
                    content: '""',
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    background: "rgba(0, 0, 0, 0.2)",
                    backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.5) 100%
            )`,
                  },
                }}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia sx={{ height: 500 }} image={ImgFacilities1}>
                    <Container
                      maxWidth="md"
                      sx={{ position: "absolute", zIndex: 1000 }}
                    >
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        style={{
                          position: "relative",
                          textAlign: "center",
                          top: "225px",
                          color: "#ffffff",
                        }}
                      >
                        Mall Lippo Karawang
                      </Typography>
                    </Container>
                  </CardMedia>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  position: "relative",
                  "&::after": {
                    position: "absolute",
                    content: '""',
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    background: "rgba(0, 0, 0, 0.2)",
                    backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.5) 100%
            )`,
                  },
                }}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia sx={{ height: 500 }} image={ImgFacilities2}>
                    <Container
                      maxWidth="md"
                      sx={{ position: "absolute", zIndex: 1000 }}
                    >
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        style={{
                          position: "relative",
                          textAlign: "center",
                          top: "225px",
                          color: "#ffffff",
                        }}
                      >
                        Rumah Sakit Siloam
                      </Typography>
                    </Container>
                  </CardMedia>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  position: "relative",
                  "&::after": {
                    position: "absolute",
                    content: '""',
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    background: "rgba(0, 0, 0, 0.2)",
                    backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.5) 100%
            )`,
                  },
                }}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia sx={{ height: 500 }} image={ImgFacilities3}>
                    <Container
                      maxWidth="md"
                      sx={{ position: "absolute", zIndex: 1000 }}
                    >
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        style={{
                          position: "relative",
                          textAlign: "center",
                          top: "225px",
                          color: "#ffffff",
                        }}
                      >
                        Sekolah Dian Harapan
                      </Typography>
                    </Container>
                  </CardMedia>
                </Card>
              </Box>
            </Grid>

            {/* versi 2 */}
            {/* <Grid item xs={12} sm={4}>
              <Card>
                <CardMedia sx={{ height: 400 }} image={ImgFacilities1} />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    Lippo Mall Karawang
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mt: 3 }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Facilities;
