import { Paper, Table as MuiTable, TableContainer, TextField, Box } from "@mui/material";
import { useReactTable, getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { TableProps } from "./Table.types";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { useState } from "react";
import { StyledSearchContainer } from "./Table.styles";

const Table = (props: TableProps) => {
  const { data, columns } = props;

  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getRowId: (row: object) => (row as { id: string })?.id,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <>
      <StyledSearchContainer>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </StyledSearchContainer>
      <TableContainer component={Paper}>
        <MuiTable aria-label="table component">
          <TableHeader headers={table?.getHeaderGroups()} />
          <TableBody rowModel={table?.getRowModel()} />
        </MuiTable>
      </TableContainer>
    </>
  );
};

export default Table;
