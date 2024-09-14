"use client";

import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import { Button, IconButton, MenuItem, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function EditEventPage() {
  const [previewProfile, setPreviewProfile] = useState<string>("");
  const categories = [
    {
      value: "Category 1",
      label: "Category 1",
    },
    {
      value: "Category 2",
      label: "Category 2",
    },
    {
      value: "Category 3",
      label: "Category 3",
    },
    {
      value: "Category 4",
      label: "Category 4",
    },
  ];
  const uploadImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (type === "picture-profile") {
        const objectUrl = URL.createObjectURL(file);
        setPreviewProfile(objectUrl);
      }
    }
  };
  return (
    <div className="w-full p-12 h-screen">
      <div className="flex flex-row h-full drop-shadow-lg border rounded-xl">
        <div className="w-full h-full basis-5/12 bg-gray-100 flex items-end justify-center  pb-6">
          {previewProfile ? (
            <div className="relative w-full h-full">
              <Image
                src={previewProfile}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
                width={3000}
                height={3060}
              />
              <div className="absolute top-2 right-2">
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => setPreviewProfile("")}
                >
                  <DeleteOutlineRoundedIcon
                    sx={{
                      color: "#fff",
                      backgroundColor: "#4f46e5",
                      borderRadius: "50%",
                      padding: "5px",
                      fontSize: "32px",
                    }}
                  />
                </IconButton>
              </div>
            </div>
          ) : (
            <label className="w-64 flex justify-center items-center px-4 py-6 bg-indigo-600 text-blue rounded-lg shadow-lg tracking-wide cursor-pointer mb-6">
              <CameraAltRoundedIcon className="text-white" />
              <span className="text-white text-base leading-normal">
                อัปโหลดรูปภาพ
              </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => uploadImage(e, "picture-profile")}
              />
            </label>
          )}
        </div>
        <div className="flex flex-col w-7/12 break-words p-5 py-0 flex-grow-1 ">
          <div className="flex justify-center items-center mb-3 text-left text-xl p-3 mt-5 rounded-xl">
            <span>Edit Event</span>
          </div>
          <div className="overflow-auto border my-3 text-left p-3 rounded-xl flex flex-col">
            <div className="flex flex-row justify-center mt-2">
              <DescriptionRoundedIcon sx={{ color: "#4b5563", marginX: 1 }} />
              <label>Description</label>
            </div>
            <TextField
              fullWidth
              label="Event Title"
              className="mt-6 mb-2 mx-2"
            />
            <TextField
              fullWidth
              label="Event Description"
              className="mt-6 mb-2 mx-2"
            />
            <TextField
              label="Participant Limit"
              className="mt-6 mb-2 mx-2"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
            />
            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <TextField
                  label="Prize 1st"
                  className="mt-6 mb-2 mx-2"
                  fullWidth
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </div>
              <div className="flex flex-col">
                <TextField
                  label="Prize 2nd"
                  className="mt-6 mb-2 mx-2"
                  fullWidth
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </div>
              <div className="flex flex-col">
                <TextField
                  label="Prize 3rd"
                  className="mt-6 mb-2 mx-2"
                  fullWidth
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                />
              </div>
            </div>
            <TextField
              id="outlined-select-category"
              select
              label="Select"
              className="mt-6 mb-2 mx-2"
              helperText="Please select your category"
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="grid grid-cols-2 gap-5 mx-2">
              <div className="flex flex-col">
                <label className="mt-6 mb-2 mx-2">Event Start Date</label>
                <TextField fullWidth type="date" />
              </div>
              <div className="flex flex-col">
                <label className="mt-6 mb-2 mx-2">Event End Date</label>
                <TextField fullWidth type="date" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mx-2">
              <div className="flex flex-col">
                <label className="mt-6 mb-2 mx-2">
                  Registration Start Date
                </label>
                <TextField fullWidth type="date" />
              </div>
              <div className="flex flex-col">
                <label className="mt-6 mb-2 mx-2">Registration End Date</label>
                <TextField fullWidth type="date" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2 my-5">
            <Button variant="outlined" startIcon={<SaveAsRoundedIcon />}>
              Edit EVent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
