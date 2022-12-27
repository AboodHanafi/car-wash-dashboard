import { Box, Skeleton, styled, useMediaQuery } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
const columns: GridColDef[] = [
  {
    field: "reservationNum",
    headerName: "رقم الحجز",
    maxWidth: 75,
  },
  {
    field: "name",
    headerName: "الإسم",
    maxWidth: 120,
  },

  {
    field: "mobileNum",
    headerName: "رقم الهاتف",
    minWidth: 120,
  },
  {
    field: "price",
    headerName: "السعر",
    maxWidth: 65,
  },
  {
    field: "date",
    headerName: "تاريخ الحجز",
    // minWidth: 150,
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
  const bigLabtob = useMediaQuery("(max-width:1024px)");
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(0);

  const StyledTable = styled(DataGrid)(({ theme }) => ({
    border: "none",
    width: bigLabtob ? "450px" : "650px",
    minHeight: "327px",
    fontWeight: 400,
    fontSize: "0.9rem",
    "& .MuiDataGrid-main": {
      width: bigLabtob ? "450px" : "650px",
    },

    "& .paxton-table--row": {
      border: "none",
      // marginTop: "5px",
      // marginBottom: "5px",
      backgroundColor: " #F6F6F6",
      color: "#404040",
    },
    "& .paxton-table--cell": {
      border: "none",
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#FCFCFC",
      // width: "100%",
      // minwidth: "100vw",
      color: "#191919",
    },
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: "#fff",
      width: bigLabtob ? "450px" : "650px",
      height: "5px",
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
      // <Stack
      //   sx={{
      //     backgroundColor: "#f4f4f4",
      //     boxShadow: "none",
      //     width: "50%",
      //     minWidth: "650px",
      //   }}
      //   component={Paper}
      // >
      <StyledTable
        rows={rows}
        columns={columns}
        page={page}
        onPageChange={(newPage: number) => setPage(newPage)}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 100]}
        pagination
        disableSelectionOnClick
        getRowClassName={() => "paxton-table--row"}
      />
      // </Stack>
    );
  } else {
    return <LoadingSkeleton />;
  }
}
