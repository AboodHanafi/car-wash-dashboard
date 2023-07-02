import { Typography, Box, Stack } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import { Icons } from '../assets';

function useCustomConfirm() {
  const confirm = useConfirm();

  const onConfirmHandler = (
    confirmationId: string | number | undefined = '',
    deletionFunc: any,
    confirmMsg: string,
  ) => {
    confirm({
      description: (
        <Typography
          fontWeight={600}
          color={'#000'}
        >{`${confirmMsg} ${confirmationId}؟`}</Typography>
      ),
      cancellationText: 'لا',
      confirmationText: (
        <Typography sx={{ color: '#FF0000' }}>نعم حذف</Typography>
      ),
      title: (
        <Stack style={{ alignItems: 'center' }}>
          {Icons.deleteIcon('#FF0000')}
        </Stack>
      ),
      buttonOrder: ['confirm', 'cancel'],
      dialogProps: {
        sx: {
          width: '25rem',
          margin: 'auto',
        },
      },
      contentProps: { sx: { textAlign: 'center' } },
      dialogActionsProps: {
        sx: {
          justifyContent: 'center',
        },
      },
    })
      .then(() => deletionFunc(confirmationId))
      .catch(() => console.log('Deletion cancelled.'));
  };

  return onConfirmHandler;
}

export default useCustomConfirm;
