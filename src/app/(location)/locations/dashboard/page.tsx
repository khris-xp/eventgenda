"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { Locations } from "@/constants/location.constants";
import { LocationType } from "@/types/location.type";
import { TableCell, TableRow } from "@mui/material";

export default function LocationDashboardPage() {
  const locationHeaders = [
    "Name",
    "Location",
    "Prices",
    "Created Date",
    "Updated Date",
  ];

  function renderEventRow(location: LocationType) {
    return (
      <TableRow key={location.name}>
        <TableCell>{location.location}</TableCell>
        <TableCell>{location.prices}</TableCell>
        <TableCell>
          {new Date(location.createdDate).toLocaleDateString()}
        </TableCell>
        <TableCell>
          {new Date(location.updatedDate).toLocaleDateString()}
        </TableCell>
      </TableRow>
    );
  }
  return (
    <div className="flex justify-center container mx-auto py-5">
      <PaginatedTable
        headers={locationHeaders}
        rows={Locations}
        renderRow={renderEventRow}
      />
    </div>
  );
}
