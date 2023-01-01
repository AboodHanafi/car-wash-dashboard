import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { CustomButton } from "../../globalStyle";
import { useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Stack spacing={2}>
      <Typography fontWeight={600}>حجز جديد</Typography>
      <Stack direction="row" flexWrap="wrap" gap={3} pr="20px">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            minWidth: "250px",
            backgroundColor: "#F6F6F6",
            border: "1px solid #DDDDDD",
            borderRadius: "10px",
            padding: "20px",
            gap: 1,
          }}
        >
          <TextField id="standard-basic" label="الأسم" variant="standard" />
          <TextField
            id="standard-basic"
            label="رقم الهاتف"
            variant="standard"
          />
          <TextField id="standard-basic" label="العنوان" variant="standard" />
          <TextField
            id="standard-basic"
            label="تاريخ الحجز"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="ساعة الحجز"
            variant="standard"
          />
        </Box>
        <Stack
          spacing={2}
          sx={{
            width: "40%",
            minWidth: "250px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F6F6F6",
              border: "1px solid #DDDDDD",
              borderRadius: "10px",
              padding: "20px",
              gap: 1,
            }}
          >
            <TextField
              id="standard-basic"
              label="ماركة السيارة"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="موديل السيارة"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="لون السيارة"
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#F6F6F6",
              border: "1px solid #DDDDDD",
              borderRadius: "10px",
              padding: "20px",
              gap: 1,
            }}
          >
            <FormLabel>الخدمات الإضافية</FormLabel>
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckCircleOutlineIcon />}
                    checkedIcon={<CheckCircleIcon />}
                  />
                }
                label="تلبيس دعاسات"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckCircleOutlineIcon />}
                    checkedIcon={<CheckCircleIcon />}
                  />
                }
                label="فواحة عطرية"
              />
            </FormGroup>
          </Box>
          <Stack id="buttons" direction="row" spacing={1}>
            <CustomButton
              style={{
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                width: "50%",
              }}
            >
              حجز
            </CustomButton>
            <CustomButton
              style={{
                backgroundColor: "#fff",
                color: theme.palette.primary.main,
                width: "50%",
              }}
              onClick={() => navigate("/reservations")}
            >
              إلغاء
            </CustomButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ReservationForm;
