import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import('./Engines/HeaderEngine.js');


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'reports',
        children: [
          {
            path: 'dailyReport'
          }
        ]
      },
      {
        path: 'SPOR'
      },
      {
        path: 'schedule'
      },
      {
        path: 'replies'
      },
      {
        path: 'objects'
      },
      {
        path: 'accident',
      },

    ]
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);




