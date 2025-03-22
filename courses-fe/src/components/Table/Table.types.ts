import { ColumnDef, HeaderGroup, RowModel } from "@tanstack/react-table";

export interface TableProps {
  title?: string;
  data: object[];
  columns: ColumnDef<object>[];
}

export interface TableHeaderProps {
  headers: HeaderGroup<object>[];
}

export interface TableBodyProps {
  rowModel: RowModel<object>;
}
