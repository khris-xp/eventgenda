"use client";

import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import { Button, IconButton, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function CreateCategoryPage() {
  const [previewProfile, setPreviewProfile] = useState<string>("");

  return (
    <div className="w-full p-12 h-screen">
      <div className="flex flex-row h-full drop-shadow-lg border rounded-xl">
        <div className="flex flex-col w-full break-words p-5 py-0 flex-grow-1 ">
          <div className="flex justify-center items-center mb-3 text-left text-xl p-3 mt-5 rounded-xl">
            <span>Create New Category</span>
          </div>
          <div className="overflow-auto border my-3 text-left p-3 rounded-xl flex flex-col">
            <div className="flex flex-row justify-center mt-2">
              <DescriptionRoundedIcon sx={{ color: "#4b5563", marginX: 1 }} />
              <label>Description</label>
            </div>
            <TextField
              fullWidth
              label="Category Name"
              className="mt-6 mb-2 mx-2"
            />
            <TextField
              fullWidth
              label="Category Description"
              className="mt-6 mb-2 mx-2"
            />
            <div className="flex justify-center mt-2 my-5">
              <Button variant="outlined" startIcon={<SaveAsRoundedIcon />}>
                Create Category
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
