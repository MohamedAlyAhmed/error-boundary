import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorReactRouter from './components/ErrorReactRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ErrorBoundary><App /></ErrorBoundary>,
    errorElement: <ErrorReactRouter />,
    children: [
      {
        path: "/test",
        element: <div>TEST</div>,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);