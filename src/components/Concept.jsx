import {
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Icon,
  Typography,
} from "@mui/material";
import React from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CommuteIcon from '@mui/icons-material/Commute';

const Concept = () => {
  return (
    <Container className="card-concept">
      <Grid container spacing={3} mx="auto">
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "220px", width: "330px" }}>
            <CardContent>
              <LocationCityIcon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" sx={{ mt: 1 }}>
                Township
              </Typography>
              <Typography variant="body1" sx={{ color: "#7a7a7a", mt: 2 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, alias!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "220px", width: "330px" }}>
            <CardContent>
              <Diversity3Icon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" sx={{ mt: 1 }}>
                Trustworthy
              </Typography>
              <Typography variant="body1" sx={{ color: "#7a7a7a", mt: 2 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, alias!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "220px", width: "330px" }}>
            <CardContent>
              <CommuteIcon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h5" sx={{ mt: 1 }}>
                Transportation
              </Typography>
              <Typography variant="body1" sx={{ color: "#7a7a7a", mt: 2 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, alias!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Concept;
