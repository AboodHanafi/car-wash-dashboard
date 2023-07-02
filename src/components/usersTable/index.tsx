import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Skeleton,
  Typography,
  styled,
} from '@mui/material';
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { PropsWithChildren, useState } from 'react';
import { Icons } from '../../assets';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Navigate, useNavigate } from 'react-router-dom';
import { useFetchUsersQuery } from '../../app/store';
import LoadingSkeleton from '../loadingSkeleton';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'الإسم',
    minWidth: 200,
  },

  {
    field: 'phone',
    headerName: 'رقم الهاتف',
    minWidth: 150,
  },
  {
    field: 'payments',
    headerName: 'المدفوعات',
    minWidth: 200,
  },
  {
    field: 'reservations_count',
    headerName: ' عدد الحجوزات',
    minWidth: 200,
  },
  {
    field: 'أخرى',
    renderCell: () => <IconButton size='small'>{Icons.moreIcon}</IconButton>,
  },
];

const rows = [
  {
    id: 1,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '10',
  },
  {
    id: 2,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '6',
  },
  {
    id: 3,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '5',
  },
  {
    id: 4,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '12',
  },
  {
    id: 5,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '3',
  },
  {
    id: 6,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '3',
  },
  {
    id: 7,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '16',
  },
  {
    id: 8,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '30',
  },
  {
    id: 9,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '21',
  },
  {
    id: 10,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '13',
  },
  {
    id: 11,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '23',
  },
  {
    id: 12,
    name: 'ابراهيم جمال',
    phone: '+236 659 425',
    price: '35 ريال',
    resrvationNumber: '19',
  },
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
    // marginTop: "1px",
    // marginBottom: "1px",
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

const UsersTable = () => {
  const [open, setOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { data, isLoading, isSuccess, isError, status } =
    useFetchUsersQuery('');

  if (isSuccess) console.log('data: ', data.data);

  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const nvigate = useNavigate();

  const handleRowClick: GridEventListener<'rowClick'> = params => {
    // nvigate(`/reservations/${params.row.id}`);
    console.log('reservations', `/reservations/${params.row.id}`);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (!isLoading) {
    return (
      <>
        <div onClick={handleClick}>
          <StyledTable
            rows={data?.data || []}
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
            getRowClassName={() => 'paxton-table--row'}
          />
        </div>
        <Menu
          id='basic-menu'
          anchorReference='anchorPosition'
          open={open}
          onClose={handleClose}
          anchorPosition={{ top: mousePosition.y, left: mousePosition.x }}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            {Icons.NotificationIcon()} &nbsp; ارسال اشعار
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {Icons.deleteIcon('#FF0000')} &nbsp; حذف المستخدم
          </MenuItem>
        </Menu>
      </>
    );
  } else {
    return <LoadingSkeleton />;
  }
};
export default UsersTable;
