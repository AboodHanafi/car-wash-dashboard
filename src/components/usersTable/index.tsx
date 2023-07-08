import { IconButton, Menu, MenuItem, styled } from '@mui/material';
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { useState } from 'react';
import { Icons } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { useFetchUsersQuery, useDeleteUserByIdMutation } from '../../app/store';
import LoadingSkeleton from '../loadingSkeleton';
import { Nullable } from '../../utils/types';
import useCustomConfirm from '../../hooks/use-custom-confirm';
import NotificationDialog from '../notificationDialog';

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

type SelectedUsersList = {
    name: string | undefined;
    id: number | undefined;
}[];

const UsersTable = () => {
    const [selectedUsers, setSelectedUsers] = useState<SelectedUsersList>();
    const [selectedUsersClone, setSelectedUsersClone] =
        useState<SelectedUsersList>();
    const [showMenu, setShowMenu] = useState(false);
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState<Nullable<number>>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { data, isLoading, isSuccess, isError, status } =
        useFetchUsersQuery();
    const [deleteUser, results] = useDeleteUserByIdMutation();
    const confirm = useCustomConfirm();

    // if (isSuccess) console.log('data: ', data.data);

    const [pageSize, setPageSize] = useState<number>(10);
    const [page, setPage] = useState<number>(0);
    const nvigate = useNavigate();

    const handleRowClick: GridEventListener<'rowClick'> = params => {
        const id = params.row.id;
        // nvigate(`/reservations/${params.row.id}`);
        // setShowMenu(true);
        setSelectedRowId(id);
        // console.log('reservations', `/reservations/${id}`);
    };

    const handleClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };
    const handleSendNotification = () => {
        setShowMenu(false);
        setIsOpenNotification(true);

        console.log('id send notification', selectedRowId);
    };

    const handleDeleteUser = () => {
        setShowMenu(false);
        console.log('id delete', selectedRowId);
        confirm(
            selectedRowId!,
            deleteUser,
            'هل انت متاكد من حظر المستخدم صاحب الرقم '
        );
    };

    const handleClose = () => {
        setShowMenu(false);
    };

    const handleCloseNotification = () => {
        setIsOpenNotification(false);
        setSelectedUsers(selectedUsersClone);
    };

    const handleDeleteUserFromList = (id: number) => {
        const filteredSelectedUsers = selectedUsers?.filter(
            user => user.id !== id
        );
        setSelectedUsers(filteredSelectedUsers);
        if (filteredSelectedUsers?.length === 0) {
            setIsOpenNotification(false);
            setSelectedUsers(selectedUsersClone);
        }
    };

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
            field: 'other',
            headerName: 'أخرى',
            maxWidth: 75,

            renderCell: () => (
                <IconButton
                    onClick={() => setShowMenu(prev => !prev)}
                    size="large">
                    {Icons.moreIcon}
                </IconButton>
            ),
        },
    ];

    const handleSelectionModelChange = (selectionModel: any) => {
        const selectedRows = selectionModel.map(
            (rowNum: any) => data?.data[Number(rowNum) - 1]
        );
        const selectedNames = selectedRows.map((row: any) => ({
            name: row?.name,
            id: row?.id,
        }));
        setSelectedUsers(selectedNames);
        setSelectedUsersClone(selectedNames);
    };

    if (!isLoading) {
        return (
            <>
                {isOpenNotification && (
                    <NotificationDialog
                        isOpen={isOpenNotification}
                        onClose={handleCloseNotification}
                        selectedUsers={selectedUsers!}
                        onDeleteUser={handleDeleteUserFromList}
                    />
                )}
                <div onClick={handleClick}>
                    <StyledTable
                        rows={data?.data || []}
                        checkboxSelection
                        columns={columns}
                        page={page}
                        onPageChange={(newPage: number) => setPage(newPage)}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize: number) =>
                            setPageSize(newPageSize)
                        }
                        rowsPerPageOptions={[10, 20, 100]}
                        disableSelectionOnClick
                        pagination
                        onCellClick={event =>
                            selectedUsers?.length === 0 || !selectedUsers
                                ? setSelectedUsers([
                                      {
                                          id: event.row.id,
                                          name: event.row.name,
                                      },
                                  ])
                                : selectedUsers?.length === 1 &&
                                  selectedUsers[0].id !== event.row.id &&
                                  setSelectedUsers([
                                      {
                                          id: event.row.id,
                                          name: event.row.name,
                                      },
                                  ])
                        }
                        onRowClick={handleRowClick}
                        rowHeight={48}
                        headerHeight={40}
                        getRowClassName={() => 'paxton-table--row'}
                        onSelectionModelChange={handleSelectionModelChange}
                    />
                </div>
                <Menu
                    id="basic-menu"
                    anchorReference="anchorPosition"
                    open={showMenu}
                    onClose={handleClose}
                    anchorPosition={{
                        top: mousePosition.y,
                        left: mousePosition.x - 76,
                    }}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}>
                    <MenuItem onClick={handleSendNotification}>
                        {Icons.NotificationIcon()} &nbsp; ارسال اشعار
                    </MenuItem>
                    <MenuItem onClick={handleDeleteUser}>
                        {Icons.deleteIcon('#FF0000')} &nbsp; حظر
                    </MenuItem>
                </Menu>
            </>
        );
    } else {
        return <LoadingSkeleton />;
    }
};
export default UsersTable;
