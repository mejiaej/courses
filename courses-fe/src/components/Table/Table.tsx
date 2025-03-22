import { Paper, Table as MuiTable, TableContainer } from "@mui/material";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { TableProps } from "./Table.types";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = (props: TableProps) => {
  const { data, columns } = props;

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row: object) => (row as { id: string })?.id,
  });

  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label="table component">
        <TableHeader headers={table?.getHeaderGroups()} />
        <TableBody rowModel={table?.getRowModel()} />
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
