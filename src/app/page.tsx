"use client";

import { Box } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className=" text-2xl font-bold underline">Hello World!</h1>
    </Box>
  );
}
