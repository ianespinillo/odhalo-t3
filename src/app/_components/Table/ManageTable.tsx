"use client";
import React, { useState } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useRouter } from "next/navigation";
import { deleteById } from "@/helpers/actions";
interface Props {
  colsName: string[];
  data: Data[];
}

type Data = {
  id: number | string;
  col2: string;
  col3: string;
  col4: string;
};

export const ManageTable = (props: Props) => {
  const { colsName, data } = props;
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const router = useRouter();
  const [page, setPage] = useState(0);
  return (
    <Paper sx={{ width: "70%", overflow: "hidden" }}>
      <TableContainer sx={{ width: "100%" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {colsName.map((col) => (
                <TableCell key={col} className="text-center text-2xl font-arial">
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-xl text-center">{item.id}</TableCell>
                  <TableCell className="text-xl text-center">{item.col2}</TableCell>
                  <TableCell className="text-xl text-center">{item.col3}</TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-4">
                      <Button
                        variant="contained"
                        className="bg-blue-700 text-white flex gap-2"
                        onClick={() => router.push(`/admin/obras/${item.id}`)}
                      >
                        Editar
                        <ModeEditIcon />
                      </Button>
                      <Button
                        variant="contained"
                        className="bg-red-500 text-white hover:bg-red-500 flex gap-2 items-center"
                        onClick={() => deleteById(item.id as string)}
                      >
                        Eliminar
                        <DeleteForeverIcon  />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value));
          setPage(0);
        }}
        disabled={data.length <10}
      />
    </Paper>
  );
};
