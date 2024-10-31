"use client";

import { useCategory } from "@/hooks/useCategory";
import { useEvent } from "@/hooks/useEvent";
import { useLocation } from "@/hooks/useLocation";
import { uploadService } from "@/services/upload.service";
import { CategoryType } from "@/types/category.type";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import { Button, IconButton, MenuItem, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function CreateEventPage() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [limit, setLimit] = useState<number>(0);
  const [amountRequired, setAmountRequired] = useState<number>(0);
  const [prizes, setPrizes] = useState<number[]>([]);
  const [eventStartDate, setEventStartDate] = useState<string>("");
  const [eventEndDate, setEventEndDate] = useState<string>("");
  const [registrationStartDate, setRegistrationStartDate] =
    useState<string>("");
  const [registrationEndDate, setRegistrationEndDate] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const router = useRouter();

  const { categoriesQuery } = useCategory();
  const { locationsQuery } = useLocation();
  const { createEventMutation } = useEvent();
  const [previewProfile, setPreviewProfile] = useState<string>("");

  const handleCreateEvent = async () => {
    try {
      await createEventMutation.mutateAsync({
        title,
        description,
        limit,
        categories: selectedCategories.ids,
        eventStartDate,
        eventEndDate,
        registrationStartDate,
        registrationEndDate,
        prizes,
        thumbnail,
        location: selectedLocations.id,
        amountRequired,
        rules: [],
        status: "pending",
      });
      router.push("/events");

      await Swal.fire({
        title: "Success",
        text: "Event has been created successfully",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      });
    } catch (error) {
      await Swal.fire({
        title: "Error",
        text: error as string,
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      });
    }
  };

  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    try {
      if (e.target.files) {
        const file = e.target.files[0];
        if (type === "picture-profile") {
          const uploadFile = new FormData();
          uploadFile.append("image", e.target.files[0]);

          const response = await uploadService.uploadImage(uploadFile);
          const objectUrl = URL.createObjectURL(file);
          setPreviewProfile(objectUrl);
          setThumbnail(response.data.url);
        }
      }
    } catch (error) {
      await Swal.fire({
        title: "Error",
        text: error as string,
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      });
    }
  };

  interface CategorySelection {
    ids: string[];
    names: string[];
  }

  interface LocationSelection {
    id: string;
    name: string;
  }

  const [selectedCategories, setSelectedCategories] =
    useState<CategorySelection>({
      ids: [],
      names: [],
    });

  const [selectedLocations, setSelectedLocations] = useState<LocationSelection>(
    {
      id: "",
      name: "",
    },
  );

  const handleCategoryChange = (event: any) => {
    const selectedNames = event.target.value;
    const selectedIds =
      categoriesQuery.data?.data
        .filter((cat) => selectedNames.includes(cat.name))
        .map((cat) => cat._id) || [];

    setSelectedCategories({
      ids: selectedIds,
      names: selectedNames,
    });
  };

  const handleLocationChange = (event: any) => {
    const selectedName = event.target.value;
    const selectedId =
      locationsQuery.data?.data.find((loc) => loc.name === selectedName)?._id ||
      "";

    setSelectedLocations({
      id: selectedId,
      name: selectedName,
    });
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
            <span>Create New Event</span>
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              fullWidth
              label="Event Description"
              className="mt-6 mb-2 mx-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Participant Limit"
              className="mt-6 mb-2 mx-2"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
            />
            <TextField
              label="Amount Funding Goal"
              className="mt-6 mb-2 mx-2"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              value={amountRequired}
              onChange={(e) => setAmountRequired(Number(e.target.value))}
            />
            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <TextField
                  label="Prize 1st"
                  className="mt-6 mb-2 mx-2"
                  fullWidth
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                  value={prizes[0]}
                  onChange={(e) =>
                    setPrizes([Number(e.target.value), prizes[1], prizes[2]])
                  }
                />
              </div>
              <div className="flex flex-col">
                <TextField
                  label="Prize 2nd"
                  className="mt-6 mb-2 mx-2"
                  fullWidth
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                  value={prizes[1]}
                  onChange={(e) =>
                    setPrizes([prizes[0], Number(e.target.value), prizes[2]])
                  }
                />
              </div>
              <div className="flex flex-col">
                <TextField
                  label="Prize 3rd"
                  className="mt-6 mb-2 mx-2"
                  fullWidth
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                  value={prizes[2]}
                  onChange={(e) =>
                    setPrizes([prizes[0], prizes[1], Number(e.target.value)])
                  }
                />
              </div>
            </div>
            <FormControl className="mt-6 mb-2 mx-2">
              <InputLabel id="demo-multiple-name-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                multiple
                value={selectedCategories.names}
                onChange={handleCategoryChange}
                input={<OutlinedInput label="Category" />}
                MenuProps={MenuProps}
              >
                {categoriesQuery.data?.data.map((category: CategoryType) => (
                  <MenuItem key={category._id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="outlined-select-category"
              select
              label="Select Location"
              className="mt-6 mb-2 mx-2"
              value={selectedLocations.name}
              onChange={handleLocationChange}
            >
              {locationsQuery.data?.data.map((location) => (
                <MenuItem key={location._id} value={location.name}>
                  {location.name}
                </MenuItem>
              ))}
            </TextField>
            <div className="grid grid-cols-2 gap-5 mx-2">
              <div className="flex flex-col">
                <label className="mt-6 mb-2 mx-2">Event Start Date</label>
                <TextField
                  fullWidth
                  type="date"
                  value={eventStartDate}
                  onChange={(e) => setEventStartDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mt-6 mb-2 mx-2">Event End Date</label>
                <TextField
                  fullWidth
                  type="date"
                  value={eventEndDate}
                  onChange={(e) => setEventEndDate(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mx-2">
              <div className="flex flex-col">
                <label className="mt-6 mb-2 mx-2">
                  Registration Start Date
                </label>
                <TextField
                  fullWidth
                  type="date"
                  value={registrationStartDate}
                  onChange={(e) => setRegistrationStartDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mt-6 mb-2 mx-2">Registration End Date</label>
                <TextField
                  fullWidth
                  type="date"
                  value={registrationEndDate}
                  onChange={(e) => setRegistrationEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2 my-5">
            <Button
              variant="outlined"
              startIcon={<SaveAsRoundedIcon />}
              onClick={handleCreateEvent}
            >
              Create EVent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
