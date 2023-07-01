import { Uploader } from 'uploader'; // Installed by "react-uploader".
import { UploadButton } from 'react-uploader';
import { Box, useTheme } from '@mui/material';
import { CustomButton } from '../../globalStyle';

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: 'free', // Get production API keys from Upload.io
});

// Configuration options: https://upload.io/uploader#customize
const options = { multi: false };

function UploadImage() {
  const theme = useTheme();

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <svg
        width='55'
        height='55'
        viewBox='0 0 55 55'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.4'
          d='M3.5 14C3.5 9.02944 7.52944 5 12.5 5H39.5C44.4706 5 48.5 9.02944 48.5 14V41C48.5 45.9706 44.4706 50 39.5 50H12.5C7.52944 50 3.5 45.9706 3.5 41V14Z'
          fill='#1975FF'
        />
        <path
          d='M12.5 50.0004H39.5C44.4706 50.0004 48.5 45.971 48.5 41.0004V32.0004L41.8872 27.2392C38.4511 24.7652 33.755 25.0209 30.6078 27.8534L21.3922 36.1474C18.245 38.9799 13.5489 39.2356 10.1128 36.7616L3.5 32.0004V41.0004C3.5 45.971 7.52944 50.0004 12.5 50.0004Z'
          fill='#1975FF'
        />
        <circle cx='18.125' cy='19.625' r='5.625' fill='#1975FF' />
      </svg>

      <UploadButton
        uploader={uploader}
        options={options}
        onComplete={files => alert(files.map(x => x.fileUrl).join('\n'))}
      >
        {({ onClick }) => (
          <CustomButton
            style={{
              backgroundColor: theme.palette.secondary.main,
              marginTop: '1rem',
              color: '#fff',
            }}
            onClick={onClick}
          >
            إضافة صورة
          </CustomButton>
        )}
      </UploadButton>
    </Box>
  );
}

export default UploadImage;
