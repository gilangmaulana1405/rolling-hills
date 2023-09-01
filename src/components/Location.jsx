import React from "react";
import BorderedButtomBox from "./BorderedBottomBox";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import ImgLocation from "../assets/img/location.png";
import ImgIconCeklist from "../assets/img/icon-ceklist-location.png";

const Location = () => {
  const lists = [
    {
      text: "Jalan Tol Cepat Jakarta - Cikampek 0 KM",
      image: `${ImgIconCeklist}`,
    },
    {
      text: "Jalan Tol Layang Jakarta - Cikampek 5 Menit",
      image: `${ImgIconCeklist}`,
    },
    {
      text: "Jalan JORR II (Sedang dibangun)",
      image: `${ImgIconCeklist}`,
    },
    {
      text: "Jalan Tol Jakarta - Cikampek II (Sedang dibangun)",
      image: `${ImgIconCeklist}`,
    },
    {
      text: "LRT Cawang - Karawang (Sedang dibangun)",
      image: `${ImgIconCeklist}`,
    },
    {
      text: "Stasiun Kereta Cepat Jakarta - Bangun 5 Menit",
      image: `${ImgIconCeklist}`,
    },
    {
      text: "Commuter Line (KRL) Jakarta-Karawang 20 Menit",
      image: `${ImgIconCeklist}`,
    },
    {
      text: "Bandara Internasional Kertajati",
      image: `${ImgIconCeklist}`,
    },
    {
      text: "Bandara Soekarno - Hatta II",
      image: `${ImgIconCeklist}`,
    },
    {
      text: "Pelabuan Patimban",
      image: `${ImgIconCeklist}`,
    },
  ];
  return (
    <Box sx={{ bgcolor: "#130C05", color: "common.white", height: "778px" }}>
      <Container maxWidth="xl">
        <Grid container alignItems="center" columnSpacing={25}>
          <Grid item xs={12} md={6}>
            <img
              src={ImgLocation}
              layout="responsive"
              style={{
                marginLeft: "-25px",
                marginTop: "75px",
                height: "620px",
                width: "700px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 9 }}>
            <List component="ul">
              <Typography
                gutterBottom
                sx={{
                  color: "#ffffff",
                  fontSize: "36px",
                }}
              >
                Strategic Area Location
              </Typography>
              {lists.map((item, index) => (
                <ListItem component="li">
                  <Avatar
                    src={item.image}
                    style={{ width: "23px", height: "23px" }}
                  ></Avatar>
                  <ListItemText
                    primary={item.text}
                    style={{ marginLeft: "15px" }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Location;
