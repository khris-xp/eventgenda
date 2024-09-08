import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import * as React from "react";
import { Fragment } from "react";

type Props = {
  title: string;
  icon: React.ReactElement<OverridableComponent<SvgIconTypeMap<{}, "svg">>>;
  options: string[];
  width?: string;
};

export default function SelectOptions(props: Props) {
  const [value, setValue] = React.useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <Fragment>
      {props.icon}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">{props.title}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={value}
          label={props.title}
          onChange={handleChange}
          sx={{
            width: props.width,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {props.options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
}
