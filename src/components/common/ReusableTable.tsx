import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export interface TableColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
}

export interface TableActionProps {
  row: any;
}

interface ReusableTableProps {
  columns: TableColumn[];
  data: any[];
  renderAction?: (props: TableActionProps) => React.ReactNode;
}

const ReusableTable: React.FC<ReusableTableProps> = ({
  columns,
  data,
  renderAction,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        maxWidth: "100vw",
        margin: 0,
        boxSizing: "border-box",
      }}
    >
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "rgb(117 62 124 / var(--tw-bg-opacity, 1))",
            }}
          >
            {columns.map((col) => (
              <TableCell
                key={col.id}
                align={col.align || "left"}
                style={{
                  minWidth: col.minWidth,
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                {col.label}
              </TableCell>
            ))}
            <TableCell align="center" sx={{ color: "#fff", fontWeight: 600 }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((col) => (
                <TableCell key={col.id} align={col.align || "left"}>
                  {row[col.id]}
                </TableCell>
              ))}
              <TableCell align="center">
                {renderAction ? renderAction({ row }) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
