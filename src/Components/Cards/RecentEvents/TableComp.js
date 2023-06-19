import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper
  } from '@mui/material';


const TableComp = ({events}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const headers = ["Event Date","Event Time", "Reporter", "Event Type", "Severity"];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

      function extractDate(dateTimeString) {
        const date = new Date(dateTimeString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }

      function extractTime(dateTimeString) {
        const date = new Date(dateTimeString);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      }


  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell key={header}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {events
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((event, index) => (
            <TableRow key={index}>
              <TableCell>{extractDate(event.currentTime)}</TableCell>
              <TableCell>{extractTime(event.currentTime)}</TableCell>
              <TableCell>{event.reporter}</TableCell>
              <TableCell>{event.eventType}</TableCell>
              <TableCell>{event.severity}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
    <TablePagination
      rowsPerPageOptions={20}
      component="div"
      count={events.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
    />
  </TableContainer>
  )
}

export default TableComp