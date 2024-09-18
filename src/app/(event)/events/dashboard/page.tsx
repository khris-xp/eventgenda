"use client";

import { Events } from "@/constants/event.constants";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TableHead } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import {
  default as TableCell,
  default as tableCellClasses,
} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import * as React from "react";

type Props = {
  count: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  page: number;
  rowsPerPage: number;
};

function TablePaginationActions(props: Props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function EventDashboardPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Events.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="flex justify-center container mx-auto py-5">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 500, marginTop: "32px" }}
          aria-label="custom pagination table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Created By</TableCell>
              <TableCell align="right">Event Start Date</TableCell>
              <TableCell align="right">Event End Date</TableCell>
              <TableCell align="right">Registration Start Date</TableCell>
              <TableCell align="right">Registration End Date</TableCell>
              <TableCell align="right">Participants</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? Events.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage,
                )
              : Events
            ).map((event, index) => (
              <TableRow key={index}>
                <TableCell style={{ width: 320 }} scope="row">
                  {event.title}
                </TableCell>
                <TableCell style={{ width: 320 }} align="right">
                  {event.description}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {event.category.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {event.createdBy.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {event.eventStartDate.toLocaleDateString()}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {event.eventEndDate.toLocaleDateString()}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {event.registrationStartDate.toLocaleDateString()}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {event.registrationEndDate.toLocaleDateString()}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {event.participants.length}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={Events.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
