import { Autocomplete, Stack, Typography } from "@mui/material";
import { Months } from "../../assets";
import { useState } from "react";
import { CustomizedTextField } from "../../globalStyle";
import DashCard from "../../components/dashboardCard";
import BasicTable from "../../components/table";
import ChartBar from "../../components/chartBar";

interface autoType {
  label: string;
  id: number;
}

const HomePage = () => {
  const [monthValue, setMonthValue] = useState<autoType | null>(Months[0]);

  return (
    <Stack spacing={2}>
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
      <Stack direction="row" flexWrap="wrap" gap={2}>
        <DashCard
          title="الحجوزات"
          counter={"66"}
          color="rgba(126, 77, 200, 0.65)"
          shadow="0px 2px 5px rgba(167, 134, 217, 0.5)"
        />
        <DashCard
          title="الحجوزات قيد التنفيذ"
          counter={"32"}
          color="rgba(0, 128, 0, 0.64)"
          shadow="0px 2px 5px rgba(71, 163, 71, 0.5)"
        />
        <DashCard
          title="الحجوزات السابقة"
          counter={"34"}
          color="rgba(98, 112, 242, 0.64)"
          shadow="0px 2px 5px rgba(138, 148, 245, 0.5)"
        />
        <DashCard
          title="المدفوعات"
          counter={"2000 ريال"}
          color="rgba(255, 177, 57, 0.64)"
          shadow="0px 2px 5px rgba(254, 201, 120, 0.5)"
        />
      </Stack>
      <Stack width="100%" direction="row" flexWrap="wrap" gap={3}>
        <Stack>
          <BasicTable />
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
              onChange={(e: any, value: autoType | null) =>
                setMonthValue(value)
              }
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
          <ChartBar />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomePage;
