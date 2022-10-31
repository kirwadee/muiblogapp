import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";

const StyledTypography = styled(Typography)({
  color: "white",
  textAlign: "start",
});

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "blue",
        height: { xs: "max-content", md: "250px" },
        mb: 3,
        p: 5,
        m: "auto",
      }}
    >
      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              m: "auto",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="h6" color="white" align="start">
              Quick Links
            </Typography>
            <StyledTypography>Home</StyledTypography>
            <StyledTypography>Products</StyledTypography>
            <StyledTypography>Blog</StyledTypography>
            <StyledTypography>About Us</StyledTypography>
            <StyledTypography>Contact Us</StyledTypography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              m: "auto",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="h6" color="white">
              Categories
            </Typography>
            <StyledTypography>Technology</StyledTypography>
            <StyledTypography>Health</StyledTypography>
            <StyledTypography>Agriculture</StyledTypography>
            <StyledTypography>Music</StyledTypography>
            <StyledTypography>Business</StyledTypography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
