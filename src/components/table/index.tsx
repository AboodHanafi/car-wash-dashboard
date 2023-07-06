import { Box, Skeleton, styled, useMediaQuery } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { useFetchReservationsQuery } from '../../app/store';
import LoadingSkeleton from '../loadingSkeleton';
import { Data, Response } from '../../services/homeInfo';
const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'رقم الحجز',
    maxWidth: 75,
  },
  {
    field: 'user_name',
    headerName: 'الإسم',
    minWidth: 200,
  },

  {
    field: 'user_phone',
    headerName: 'رقم الهاتف',
    minWidth: 120,
  },
  {
    field: 'total',
    headerName: 'السعر',
    maxWidth: 65,
  },
  {
    field: 'created_at',
    headerName: 'تاريخ الحجز',
    minWidth: 150,
  },
];

export default function BasicTable({
  reservations,
}: {
  reservations: Data | undefined;
}) {
  const { isLoading, isFetching } = useFetchReservationsQuery();

  const bigLabtob = useMediaQuery('(max-width:1024px)');
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(0);

  const StyledTable = styled(DataGrid)(({ theme }) => ({
    border: 'none',
    width: bigLabtob ? '450px' : '650px',
    minHeight: '327px',
    fontWeight: 400,
    fontSize: '0.9rem',
    '& .MuiDataGrid-main': {
      width: bigLabtob ? '450px' : '650px',
    },

    '& .paxton-table--row': {
      border: 'none',
      // marginTop: "5px",
      // marginBottom: "5px",
      backgroundColor: ' #F6F6F6',
      color: '#404040',
    },
    '& .paxton-table--cell': {
      border: 'none',
    },
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: '#FCFCFC',
      // width: "100%",
      // minwidth: "100vw",
      color: '#191919',
    },
    '& .MuiDataGrid-footerContainer': {
      backgroundColor: '#fff',
      width: bigLabtob ? '450px' : '650px',
      height: '5px',
      direction: 'rtl',
    },
  }));

  if (isFetching || isLoading) {
    return <LoadingSkeleton />;
  } else {
    return (
      <StyledTable
        rows={reservations?.reservations || []}
        columns={columns}
        page={page}
        onPageChange={(newPage: number) => setPage(newPage)}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 100]}
        pagination
        disableSelectionOnClick
        getRowClassName={() => 'paxton-table--row'}
      />
    );
  }
}
