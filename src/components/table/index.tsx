import Paper from "@mui/material/Paper";
// import { DataGrid } from "@mui/x-data-grid";
import { Box, Skeleton, Stack, styled } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from "react";
const columns: GridColDef[] = [
  {
    field: "reservationNum",
    headerName: "رقم الحجز",
    minWidth: 100,
  },
  {
    field: "name",
    headerName: "الإسم",
    minWidth: 150,
  },

  {
    field: "mobileNum",
    headerName: "رقم الهاتف",
    minWidth: 150,
  },
  {
    field: "price",
    headerName: "قيمة الحجز",
    minWidth: 90,
  },
  {
    field: "date",
    headerName: "تاريخ الحجز",
    minWidth: 150,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = [
  {
    id: 1,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
  },
  {
    id: 2,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
  },
  {
    id: 3,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
  },
  {
    id: 4,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
  },
  {
    id: 5,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
  },
  {
    id: 6,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
  },
  {
    id: 7,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
  },
  {
    id: 8,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
  },
  {
    id: 9,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
  },
];
export default function BasicTable() {
  const [pageSize, setPageSize] = useState<number>(5);
  const [page, setPage] = useState<number>(0);

  const StyledTable = styled(DataGrid)(({ theme }) => ({
    border: "none",
    minHeight: "450px",
    fontWeight: 500,
    fontSize: "18px",
    width: "100%",
    minWidth: "650px",

    "& .paxton-table--row": {
      border: "none",
      marginTop: "5px",
      marginBottom: "5px",
      backgroundColor: " #F6F6F6",
      color: "#404040",
    },
    "& .paxton-table--cell": {
      border: "none",
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#FCFCFC",
      width: "100%",
      minwidth: "100vw",
      color: "#191919",
    },
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: "#fff",
      direction: "rtl",
    },
  }));

  const LoadingSkeleton = () => (
    <Box
      sx={{
        height: "max-content",
      }}
    >
      {[...Array(10)].map((_, index) => (
        <Skeleton key={index} variant="rectangular" sx={{ my: 4, mx: 1 }} />
      ))}
    </Box>
  );

  if (!false) {
    return (
      <Stack
        sx={{
          backgroundColor: "#f4f4f4",
          boxShadow: "none",
          width: "50%",
          minWidth: "650px",
        }}
        component={Paper}
      >
        <StyledTable
          rows={rows}
          columns={columns}
          page={page}
          onPageChange={(newPage: number) => setPage(newPage)}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20, 100]}
          pagination
          disableSelectionOnClick
          getRowClassName={() => "paxton-table--row"}
        />
      </Stack>
    );
  } else {
    return <LoadingSkeleton />;
  }
}
