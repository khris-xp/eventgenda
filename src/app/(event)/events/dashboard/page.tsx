"use client";

import PaginatedTable from "@/components/Table/PaginatedTable";
import { useEvent } from "@/hooks/useEvent";
import { EventType } from "@/types/event.type";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, TableCell, TableRow } from "@mui/material";
import Button from "@mui/material/Button";

export default function EventDashboardPage() {
  const { events, approveEventMutation, rejectEventMutation } = useEvent();
  const eventHeaders = [
    "Title",
    "Description",
    "Category",
    "Created By",
    "Status",
    "Event Start Date",
    "Event End Date",
    "Registration Start Date",
    "Registration End Date",
    "Participants",
    "Action",
  ];

  const handleApprove = async (id: string) => {
    try {
      await approveEventMutation.mutateAsync(id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id: string) => {
    try {
      await rejectEventMutation.mutateAsync(id);
    } catch (error) {
      console.error(error);
    }
  };

  function renderEventRow(event: EventType) {
    return (
      <TableRow key={event.title}>
        <TableCell>{event.title}</TableCell>
        <TableCell>
          {event.description.length > 30
            ? event.description.substring(0, 30) + "..."
            : event.description}
        </TableCell>
        <TableCell>
          {event.categories.map((category) => category.name)}
        </TableCell>
        <TableCell>{event.createdBy.fullName}</TableCell>
        <TableCell>{event.status}</TableCell>
        <TableCell>
          {new Date(event.eventStartDate).toLocaleDateString()}
        </TableCell>
        <TableCell>
          {new Date(event.eventEndDate).toLocaleDateString()}
        </TableCell>
        <TableCell>
          {new Date(event.registrationStartDate).toLocaleDateString()}
        </TableCell>
        <TableCell>
          {new Date(event.registrationEndDate).toLocaleDateString()}
        </TableCell>
        <TableCell>{event.participants.length}</TableCell>
        <TableCell>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
            }}
          >
            <Button
              variant="outlined"
              color="success"
              startIcon={<CheckIcon />}
              onClick={() => handleApprove(event._id)}
            >
              Approve
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<CloseIcon />}
              onClick={() => handleReject(event._id)}
            >
              Reject
            </Button>
          </Box>
        </TableCell>
      </TableRow>
    );
  }
  return (
    <div className="flex justify-center container mx-auto py-5 text-center">
      <PaginatedTable
        headers={eventHeaders}
        rows={events}
        renderRow={renderEventRow}
      />
    </div>
  );
}
