import { ChangeEvent, FormEvent, useState } from 'react';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CustomButton } from '../../globalStyle';
import { Item } from '../gridItem';
import BoxBorder from '../boxBorder';
import { Icons } from '../../assets';

interface Props {
  isOpen: boolean;
  selectedUsers: {
    name: string | undefined;
    id: number | undefined;
  }[];
  onDeleteUser: (id: number) => void;
  onClose: () => void;
}

function NotificationDialog({
  isOpen,
  onClose,
  selectedUsers,
  onDeleteUser,
}: Props) {
  const [notificationText, setNotificationText] = useState('');
  const theme = useTheme();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(notificationText);
  };

  return (
    <Dialog fullWidth open={isOpen} onClose={onClose}>
      <DialogTitle fontWeight={600} textAlign={'center'}>
        ارسال اشعار{' '}
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <Item gap={2}>
                {selectedUsers?.map(user => (
                  <BoxBorder flexDirection='row' mb='1rem'>
                    <Typography>{user.name}</Typography>
                    <Button onClick={() => onDeleteUser(Number(user.id))}>
                      {Icons.xIcon}
                    </Button>
                  </BoxBorder>
                ))}
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <TextField
                  onChange={e => setNotificationText(e.target.value)}
                  value={notificationText}
                  name='description'
                  fullWidth
                  multiline
                  rows={8}
                  placeholder='نص الاشعار'
                />
              </Item>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Box style={{ marginRight: 'auto' }}>
            <CustomButton
              style={{
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
                marginLeft: '0.3rem',
              }}
              onClick={onClose}
              type='submit'
            >
              ارسال{' '}
            </CustomButton>

            <CustomButton
              style={{
                backgroundColor: '#E6E6E6',
                color: theme.palette.primary.main,
              }}
              onClick={onClose}
            >
              إلغاء
            </CustomButton>
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
}
export default NotificationDialog;
