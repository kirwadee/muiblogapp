import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import RecentNewsCard from "./RecentNewsCard";

const RecentsNews = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        bgcolor={"blue"}
        borderRadius={2}
        color="white"
        padding={1}
      >
        Latest News
      </Typography>
      <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}>
        <Grid item md={4} sm={6} xs={12}>
          <RecentNewsCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <RecentNewsCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <RecentNewsCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <RecentNewsCard />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <RecentNewsCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecentsNews;
