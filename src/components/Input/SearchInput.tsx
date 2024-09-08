"use client";

import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import React, { Fragment, FunctionComponent, useState } from "react";

const SearchInput: FunctionComponent = () => {
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = (): void => {
    console.log("clicked the clear icon...");
  };

  return (
    <FormControl>
      <TextField
        size="small"
        variant="outlined"
        onChange={handleChange}
        placeholder="Search..."
        sx={{
          width: "350px",
          borderRadius: "50px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
          },
        }}
        fullWidth
        InputProps={{
          endAdornment: (
            <Fragment>
              <InputAdornment
                position="end"
                style={{ display: showClearIcon === "flex" ? "none" : "flex" }}
              >
                <SearchRoundedIcon />
              </InputAdornment>
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
                onClick={handleClick}
              >
                <ClearRoundedIcon
                  sx={{
                    cursor: "pointer",
                    color: "grey",
                    "&:hover": {
                      color: "black",
                    },
                    animationDuration: "2s",
                  }}
                />
              </InputAdornment>
            </Fragment>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchInput;
