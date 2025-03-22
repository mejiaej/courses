import { TableBody as MuiTableBody, TableCell, TableRow } from "@mui/material";
import { flexRender } from "@tanstack/react-table";
import { TableBodyProps } from "./Table.types";

const TableBody = ({ rowModel }: TableBodyProps) => {
  return (
    <MuiTableBody>
      {rowModel?.rows?.map((row) => {
        return (
          <TableRow key={`table-body-${row.id}`}>
            {row?.getVisibleCells()?.map((cell, index) => {
              return (
                <TableCell key={`tablebody-cell-${index}`}>
                  {flexRender(cell?.column?.columnDef?.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </MuiTableBody>
  );
};

export default TableBody;
