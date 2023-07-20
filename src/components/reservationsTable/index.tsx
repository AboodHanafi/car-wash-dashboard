import { Box, IconButton, Skeleton, Typography, styled } from '@mui/material';
import {
    DataGrid,
    GridColDef,
    GridEventListener,
    GridToolbarExport,
    GridToolbarContainer,
    GridCsvExportOptions,
} from '@mui/x-data-grid';
import { PropsWithChildren, useRef, useState } from 'react';
import { Icons } from '../../assets';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom';
import { useFetchReservationsQuery } from '../../app/store';
import { CustomButton } from '../../globalStyle';
import useSearch from '../../hooks/use-context-search';

function getStatusColor(status: number): string {
    let color = '';
    if (status === 0) {
        color = '#BF1C1C';
    } else if (status === 1) {
        color = '#F59D18';
    } else if (status === 2) {
        color = '#1d4ed8';
    } else if (status === 3) {
        color = '#0f172a';
    } else {
        color = '#0CA437';
    }
    return color;
}
const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'رقم الحجز',
    },
    {
        field: 'user_name',
        headerName: 'الإسم',
        minWidth: 200,
    },

    {
        field: 'user_phone',
        headerName: 'رقم الهاتف',
        minWidth: 150,
    },
    {
        field: 'total',
        headerName: 'السعر',
    },
    {
        field: 'created_at',
        headerName: 'تاريخ الحجز',
        minWidth: 150,
    },
    {
        field: 'timer',
        headerName: 'توقيت الحجز',
    },
    {
        field: 'status',
        headerName: 'حالة الحجز',
        renderCell: ({ row }) => (
            <>
                <FiberManualRecordIcon
                    sx={{
                        fill: getStatusColor(row.status),
                        fontSize: '10px',
                    }}
                />
                <Typography
                    fontWeight={300}
                    fontSize={12}
                    sx={{
                        color: getStatusColor(row.status),
                    }}>
                    {row.status_string}
                </Typography>
            </>
        ),
    },
    {
        field: 'biker_name',
        headerName: 'البايكر',
    },
    {
        field: 'أخرى',
        renderCell: () => (
            <IconButton size="small">{Icons.moreIcon}</IconButton>
        ),
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

interface PropType extends PropsWithChildren {
    onRowClick: () => void;
}
const StyledTable = styled(DataGrid)(({ theme }) => ({
    border: 'none',
    minHeight: '350px',
    fontWeight: 400,
    fontSize: '0.9rem',
    width: '100%',
    '& .MuiDataGrid-main': {
        width: '100%',
    },

    '& .paxton-table--row': {
        border: 'none',
        cursor: 'pointer',
        backgroundColor: ' #F6F6F6',
        color: '#404040',
    },
    '& .paxton-table--cell': {
        border: 'none',
        height: '20px',
    },
    '& .MuiDataGrid-columnHeaders': {
        backgroundColor: '#FCFCFC',
        borderRadius: '10px',
        width: '100%',
        color: '#191919',
    },
    '& .MuiDataGrid-footerContainer': {
        backgroundColor: '#fff',
        borderRadius: '10px',
        width: '100%',
        direction: 'rtl',
    },
}));
const LoadingSkeleton = () => (
    <Box
        sx={{
            height: 'max-content',
        }}>
        {[...Array(10)].map((_, index) => (
            <Skeleton key={index} variant="rectangular" sx={{ my: 4, mx: 1 }} />
        ))}
    </Box>
);

const ReservationsTable = () => {
    const { clientBikerTerm, dateRange, reservationStatus } = useSearch();
    const dataGridRef = useRef<any>(null);
    const {
        data: reservations,
        isLoading,
        isSuccess,
        status,
    } = useFetchReservationsQuery();
    const [pageSize, setPageSize] = useState<number>(10);
    console.log('status: ', status);
    console.log('reservations: ', reservations);
    const [page, setPage] = useState<number>(0);
    const nvigate = useNavigate();

    const handleRowClick: GridEventListener<'rowClick'> = params => {
        nvigate(`/reservations/${params.row.id}`);
    };

    const handleExport = () => {
        const options: GridCsvExportOptions = {
            allColumns: true,
            fileName: 'reservations',
            utf8WithBom: true,
        };
        // dataGridRef.current?.exportDataGrid(options);
    };

    let filteredReservations: any;

    if (reservationStatus !== null && clientBikerTerm) {
        filteredReservations = reservations?.data.filter(reservation => {
            const { user_name, biker_name, status } = reservation;
            if (
                (reservationStatus === -1 &&
                    user_name.includes(clientBikerTerm)) ||
                biker_name.includes(clientBikerTerm)
            ) {
                return true;
            } else if (
                (reservationStatus === status &&
                    user_name.includes(clientBikerTerm)) ||
                biker_name.includes(clientBikerTerm)
            ) {
                return true;
            } else {
                return false;
            }
        });
    } else if (clientBikerTerm && reservationStatus !== -1) {
        filteredReservations = reservations?.data.filter(
            reservation =>
                reservation.user_name.includes(clientBikerTerm) ||
                reservation.biker_name.includes(clientBikerTerm)
        );
    } else if (dateRange.startDate && dateRange.endDate) {
        const millisecondsStart = Date.parse(dateRange.startDate);
        const millisecondsEnd = Date.parse(dateRange.endDate);

        filteredReservations = reservations?.data.filter(reservation => {
            const millisecondsParsedDate = Date.parse(
                reservation.created_at.split(' ')[0]
            );
            return (
                millisecondsParsedDate >= millisecondsStart &&
                millisecondsParsedDate <= millisecondsEnd
            );
        });
    } else if (reservationStatus !== -1) {
        filteredReservations = reservations?.data.filter(
            reservation => reservation.status === reservationStatus
        );
    }

    // Return JSX
    if (isLoading) {
        return <LoadingSkeleton />;
    } else if (isSuccess) {
        return (
            <StyledTable
                rows={filteredReservations || reservations?.data}
                columns={columns}
                ref={dataGridRef}
                page={page}
                onPageChange={(newPage: number) => setPage(newPage)}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize: number) =>
                    setPageSize(newPageSize)
                }
                rowsPerPageOptions={[10, 20, 100]}
                pagination
                disableSelectionOnClick
                onRowClick={handleRowClick}
                rowHeight={48}
                headerHeight={40}
                getRowClassName={() => 'paxton-table--row'}
                components={{
                    Toolbar: CustomToolbar,
                }}
            />
        );
    } else {
        return <Typography>يوجد خطا ما</Typography>;
    }
};

function CustomToolbar() {
    return (
        <GridToolbarContainer sx={{ position: 'relative' }} lang="ar">
            <CustomButton
                sx={{
                    border: '1px solid',
                    marginBottom: '1rem',
                    color: '#333',
                }}>
                {Icons.pdfButton('#333')} تصدير البيانات
            </CustomButton>
            <div style={{ opacity: '0', position: 'absolute' }}>
                <GridToolbarExport />
            </div>
        </GridToolbarContainer>
    );
}

export default ReservationsTable;

/*

const rows = [
  {
    id: 1,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'ملغي',
    biker: 'خليل الحنفي',
  },
  {
    id: 2,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'قيد التنفيذ',
    biker: 'خليل الحنفي',
  },
  {
    id: 3,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'تم التنفيذ',
    biker: 'خليل الحنفي',
  },
  {
    id: 4,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'ملغي',
    biker: 'خليل الحنفي',
  },
  {
    id: 5,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'تم التنفيذ',
    biker: 'خليل الحنفي',
  },
  {
    id: 6,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'تم التنفيذ',
    biker: 'خليل الحنفي',
  },
  {
    id: 7,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'تم التنفيذ',
    biker: 'خليل الحنفي',
  },
  {
    id: 8,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'تم التنفيذ',
    biker: 'خليل الحنفي',
  },
  {
    id: 9,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'تم التنفيذ',
    biker: 'خليل الحنفي',
  },
  {
    id: 10,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'تم التنفيذ',
    biker: 'خليل الحنفي',
  },
  {
    id: 11,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'تم التنفيذ',
    biker: 'خليل الحنفي',
  },
  {
    id: 12,
    name: 'ابراهيم جمال',
    reservationNum: '002',
    mobileNum: '+236 659 425',
    price: '35 ريال',
    date: '14-2-2022',
    time: '11:30 ص',
    status: 'تم التنفيذ',
    biker: 'خليل الحنفي',
  },
];
*/
