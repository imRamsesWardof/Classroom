import React from "react";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import App from '../App';

function IndexRoutes() {
  return (
    <BrowserRouter>
    <SnackbarProvider maxSnack={3}>
      <App/>
    </SnackbarProvider>
    </BrowserRouter>
  );
}

export default IndexRoutes;
