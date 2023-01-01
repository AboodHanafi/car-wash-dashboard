import { Box, IconButton, Skeleton, Typography, styled } from "@mui/material";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { PropsWithChildren, useState } from "react";
import { Icons } from "../../assets";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Navigate, useNavigate } from "react-router-dom";
const columns: GridColDef[] = [
  {
    field: "reservationNum",
    headerName: "رقم الحجز",
  },
  {
    field: "name",
    headerName: "الإسم",
    minWidth: 200,
  },

  {
    field: "mobileNum",
    headerName: "رقم الهاتف",
    minWidth: 150,
  },
  {
    field: "price",
    headerName: "السعر",
  },
  {
    field: "date",
    headerName: "تاريخ الحجز",
    // minWidth: 150,
  },
  {
    field: "time",
    headerName: "توقيت الحجز",
  },
  {
    field: "status",
    headerName: "حالة الحجز",
    renderCell: ({ row }) => (
      <>
        <FiberManualRecordIcon
          sx={{
            fill:
              row.status === "قيد التنفيذ"
                ? "#F59D18"
                : row.status === "تم التنفيذ"
                ? "#0CA437"
                : "#BF1C1C",
            fontSize: "10px",
          }}
        />
        <Typography
          fontWeight={300}
          fontSize={12}
          sx={{
            color:
              row.status === "قيد التنفيذ"
                ? "#F59D18"
                : row.status === "تم التنفيذ"
                ? "#0CA437"
                : "#BF1C1C",
          }}
        >
          {row.status}
        </Typography>
      </>
    ),
  },
  {
    field: "biker",
    headerName: "البايكر",
  },
  {
    field: "أخرى",
    renderCell: () => <IconButton size="small">{Icons.moreIcon}</IconButton>,
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
    time: "11:30 ص",
    status: "ملغي",
    biker: "خليل الحنفي",
  },
  {
    id: 2,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "قيد التنفيذ",
    biker: "خليل الحنفي",
  },
  {
    id: 3,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "تم التنفيذ",
    biker: "خليل الحنفي",
  },
  {
    id: 4,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "ملغي",
    biker: "خليل الحنفي",
  },
  {
    id: 5,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "تم التنفيذ",
    biker: "خليل الحنفي",
  },
  {
    id: 6,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "تم التنفيذ",
    biker: "خليل الحنفي",
  },
  {
    id: 7,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "تم التنفيذ",
    biker: "خليل الحنفي",
  },
  {
    id: 8,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "تم التنفيذ",
    biker: "خليل الحنفي",
  },
  {
    id: 9,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "تم التنفيذ",
    biker: "خليل الحنفي",
  },
  {
    id: 10,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "تم التنفيذ",
    biker: "خليل الحنفي",
  },
  {
    id: 11,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "تم التنفيذ",
    biker: "خليل الحنفي",
  },
  {
    id: 12,
    name: "ابراهيم جمال",
    reservationNum: "002",
    mobileNum: "+236 659 425",
    price: "35 ريال",
    date: "14-2-2022",
    time: "11:30 ص",
    status: "تم التنفيذ",
    biker: "خليل الحنفي",
  },
];

interface PropType extends PropsWithChildren {
  onRowClick: () => void;
}
const StyledTable = styled(DataGrid)(({ theme }) => ({
  border: "none",
  minHeight: "350px",
  fontWeight: 400,
  fontSize: "0.9rem",
  width: "100%",
  "& .MuiDataGrid-main": {
    width: "100%",
  },

  "& .paxton-table--row": {
    border: "none",
    cursor: "pointer",
    // marginTop: "1px",
    // marginBottom: "1px",
    backgroundColor: " #F6F6F6",
    color: "#404040",
  },
  "& .paxton-table--cell": {
    border: "none",
    height: "20px",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#FCFCFC",
    borderRadius: "10px",
    width: "100%",
    color: "#191919",
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "100%",
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
const ReservationsTable = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const nvigate = useNavigate();

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    nvigate(`/reservations/${params.row.id}`);
  };

  if (!false) {
    return (
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
        onRowClick={handleRowClick}
        rowHeight={48}
        headerHeight={40}
        getRowClassName={() => "paxton-table--row"}
      />
    );
  } else {
    return <LoadingSkeleton />;
  }
};
export default ReservationsTable;
