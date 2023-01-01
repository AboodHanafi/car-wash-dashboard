import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["استلام الطلب", "توجه للموقع", "وصل الموقع", "منتهي"];

export default function CustomizedSteppers() {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper alternativeLabel activeStep={0}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
