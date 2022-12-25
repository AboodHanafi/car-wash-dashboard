import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const CustomizedTextField = styled(TextField)`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #999999;
  .MuiSvgIcon-root {
    color: #191919;
  }
  .MuiFilledInput-root {
    background-color: #fff;
    border-radius: 10px;
  }

  .MuiFilledInput-root::before {
    border: 1px solid #999999;
  }

  .MuiFilledInput-root:after {
    border: 1px solid #999999;
  }
  .MuiFilledInput-root:hover:not(.Mui-disabled):before {
    border: 1px solid #999999;
    /* background-color: #e7e0e0; */
  }

  .MuiFilledInput-root:hover {
    background-color: #fff;
    border-radius: 10px;
  }
  .Mui-disabled {
    background-color: #e7e0e0;
    border-radius: 10px;
  }
  .MuiFilledInput-root.Mui-disabled:before {
    border: none;
    background-color: #e7e0e0;
    border-radius: 10px;
  }
  .MuiFilledInput-root.Mui-disabled {
    background-color: #e7e0e0;
    border-radius: 10px;
  }
  .Mui-focused {
    background-color: #fff !important;
  }
`;
