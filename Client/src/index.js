import * as React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {router} from'./Routes'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

