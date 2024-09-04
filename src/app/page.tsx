"use client";

import { useAuth } from "@/hooks/useAuth";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  const { userProfile } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className=" text-2xl font-bold underline">
        Hello World! {userProfile?.data.fullName}
      </h1>
    </Box>
  );
}
