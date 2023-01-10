import {
  Autocomplete,
  Box,
  InputAdornment,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { CustomizedTextField } from "../../globalStyle";
import { Icons, Months } from "../../assets";
import ChartBar from "../../components/chartBar";
import { useState } from "react";
import LocationsChartBar from "../../components/locationsChartBar";
interface autoType {
  label: string;
  id: number;
}
const ReservationLocations = () => {
  const [monthValue, setMonthValue] = useState<autoType | null>(Months[0]);

  const theme = useTheme();
  return (
    <Stack id="mainWrapper" spacing={3} pr="30px">
      <Stack id="header" spacing={1}>
        <Typography fontWeight="bold" fontSize="0.9rem" color="#191919">
          أماكن الحجز
        </Typography>
        <CustomizedTextField
          sx={{
            width: "15%",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{Icons.search}</InputAdornment>
            ),
          }}
          placeholder="البحث عن حي"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "10%",
            minWidth: "150px",
            backgroundColor: "#F6F6F6",
            // border: "1px solid #DDDDDD",
            borderRadius: "5px",
            padding: "5px 10px",
            gap: 1,
          }}
        >
          <Stack>
            <Typography fontWeight="medium">حي السامر</Typography>
            <Typography color={theme.palette.primary.main}>55 حجز </Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          boxShadow="0px 1px 3px rgba(0, 0, 0, 0.25)"
          bgcolor="#FCFCFC"
          padding="5px 10px"
          borderRadius="10px 10px 0 0"
        >
          <Typography fontSize="0.9rem" color="#191919">
            عدد الحجوزات
          </Typography>
          <Autocomplete
            sx={{
              width: "150px",
              "& .MuiAutocomplete-input": {
                color: "#191919",
                fontWeight: 400,
                fontSize: "0.9rem",
              },
              "&& .MuiSvgIcon-root": {
                fontSize: "1rem",
              },
              "&& .MuiPopperUnstyled-root": {
                backgroundColor: "red",
                color: "red",
              },
            }}
            disablePortal
            id="combo-box-demo"
            size="small"
            options={Months}
            getOptionLabel={(option) => option.label}
            ListboxProps={{
              style: {
                fontSize: "0.9rem",
                color: "#191919",
              },
            }}
            value={monthValue}
            onChange={(e: any, value: autoType | null) => setMonthValue(value)}
            renderInput={(params) => (
              <CustomizedTextField
                placeholder="Month"
                {...params}
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        </Stack>
        <LocationsChartBar />
      </Stack>
    </Stack>
  );
};

export default ReservationLocations;
