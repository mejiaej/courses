import { TableCell, TableHead, TableRow } from "@mui/material";
import { flexRender } from "@tanstack/react-table";
import { TableHeaderProps } from "./Table.types";

const TableHeader = ({ headers }: TableHeaderProps) => {
  return (
    <TableHead>
      {headers?.map((headerGroup, index) => {
        return (
          <TableRow key={`table-head-${index}`}>
            {headerGroup?.headers?.map((header, index) => {
              return (
                <TableCell key={`table-cell-${index}`}>
                  {flexRender(
                    header?.column?.columnDef?.header,
                    header.getContext()
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableHead>
  );
};

export default TableHeader;
