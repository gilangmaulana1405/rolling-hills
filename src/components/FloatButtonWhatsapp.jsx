import React, { useState, useEffect } from "react";

import { Container, Fab } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Events, animateScroll as scroll } from "react-scroll";
import CallIcon from "@mui/icons-material/Call";

const FloatButtonWhatsapp = () => {
  return (
    <Fab
      sx={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 999,
      }}
      color="success"
      aria-label="Tambah"
    >
      <CallIcon sx={{ color: "common.white" }} />
    </Fab>
  );
};

export default FloatButtonWhatsapp;
