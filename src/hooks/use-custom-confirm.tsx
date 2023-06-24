import { Typography, Box } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import { Icons } from '../assets';

function useCustomConfirm() {
  const confirm = useConfirm();

  const onConfirmHandler = (
    confirmMsg: string,
    confirmationId: string | number | undefined = '',
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
      title: <Box textAlign={'center'}>{Icons.deleteIcon('#FF0000')}</Box>,
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
      .then(() =>
        console.log(
          'Here you can delete what ever you want (Deletion Operation)',
        ),
      )
      .catch(() => console.log('Deletion cancelled.'));
  };

  return onConfirmHandler;
}

export default useCustomConfirm;
