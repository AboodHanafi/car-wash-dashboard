import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const CustomizedTextField = styled(TextField)`
  background-color: #fff;
  border-radius: 10px;
  /* width: 120px; */
  border: '1px solid #DDDDDD' .MuiSvgIcon-root {
    color: #191919;
  }
  .MuiFilledInput-root {
    background-color: #fff;
    border-radius: 10px;
    /* padding: 0; */
  }
  .MuiOutlinedInput-input {
    padding: 10px;
    font-size: 1rem;
  }

  .MuiFilledInput-root::before {
    border: '1px solid #DDDDDD';
  }

  .MuiFilledInput-root:after {
    border: '1px solid #DDDDDD';
  }
  .MuiFilledInput-root:hover:not(.Mui-disabled):before {
    border: '1px solid #DDDDDD'; /* background-color: #e7e0e0; */
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

export const CustomButton = styled(Button)`
  border-radius: 5px;
  min-width: 120px;
  font-weight: 300;
  font-size: 0.75rem;
  :hover {
    box-shadow: none;
    color: #000;
  }
`;

export const CustomNumberField = styled(TextField)`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .MuiOutlinedInput-input {
    padding: 10px;
    font-size: 1rem;
  }
  /* For Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
