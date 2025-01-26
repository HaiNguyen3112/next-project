"use client";

import { Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Home Page!
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </>
  );
}
