import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ProviderSearch } from './context/context-search';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalizationProvider
        adapterLocale={localStorage['ar']}
        dateAdapter={AdapterDayjs}
      >
        <Provider store={store}>
          <ProviderSearch>
            <App />
          </ProviderSearch>
        </Provider>
      </LocalizationProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
